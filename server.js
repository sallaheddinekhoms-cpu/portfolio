import express from 'express';
import pkg from 'pg';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { Pool } = pkg;
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Initialize database
const initDb = async () => {
  try {
    const client = await pool.connect();
    await client.query(`
      CREATE TABLE IF NOT EXISTS requests (
        id SERIAL PRIMARY KEY,
        req_id BIGINT,
        type VARCHAR(50),
        name VARCHAR(255),
        phone VARCHAR(255),
        projectType VARCHAR(255),
        description TEXT,
        image TEXT,
        courseTitle VARCHAR(255),
        attendanceType VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
      
      CREATE TABLE IF NOT EXISTS visits (
        visit_date DATE PRIMARY KEY,
        count INT DEFAULT 0
      );
    `);
    console.log("Database initialized successfully.");
    client.release();
  } catch (err) {
    console.error("Error initializing database:", err);
  }
};

initDb();

// Routes
app.get('/api/requests', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM requests ORDER BY created_at DESC');
    
    // Map DB schema back to expected frontend schema
    const mappedResult = result.rows.map(row => ({
      db_id: row.id,
      id: row.req_id,
      type: row.type,
      name: row.name,
      phone: row.phone,
      projectType: row.projecttype,
      description: row.description,
      image: row.image,
      courseTitle: row.coursetitle,
      attendanceType: row.attendancetype,
      created_at: row.created_at
    }));

    res.json(mappedResult);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/requests', async (req, res) => {
  try {
    const data = req.body;
    let reqData = data;
    
    // Support inserting from arrays (if the old frontend logic sends the whole array)
    if (Array.isArray(data)) {
        reqData = data[data.length - 1]; // Just insert the newest one
    }

    if (!reqData) {
        return res.json({ success: true });
    }

    const query = `
      INSERT INTO requests (req_id, type, name, phone, projectType, description, image, courseTitle, attendanceType)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id
    `;
    const values = [
        reqData.id || Date.now(), 
        reqData.type, 
        reqData.name, 
        reqData.phone, 
        reqData.projectType || null, 
        reqData.description || null, 
        reqData.image || null, 
        reqData.courseTitle || null, 
        reqData.attendanceType || null
    ];
    await pool.query(query, values);

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/api/requests/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM requests WHERE req_id = $1', [id]);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/visits', async (req, res) => {
  try {
    const result = await pool.query("SELECT TO_CHAR(visit_date, 'YYYY-MM-DD') as date, count FROM visits ORDER BY visit_date DESC LIMIT 30");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/visits', async (req, res) => {
  try {
    const query = `
      INSERT INTO visits (visit_date, count) 
      VALUES (CURRENT_DATE, 1) 
      ON CONFLICT (visit_date) 
      DO UPDATE SET count = visits.count + 1
    `;
    await pool.query(query);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Serve frontend static files
app.use(express.static(path.join(__dirname, 'dist')));

// Catch-all route to serve React app for client-side routing
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
