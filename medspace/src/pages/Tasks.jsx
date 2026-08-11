import React, { useState } from 'react';
import { Play, Pause, RotateCcw, Plus, Trash2 } from 'lucide-react';
import '../index.css';

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Réviser la physiologie rénale', completed: false },
    { id: 2, text: 'Faire 30 QCMs de Neuro', completed: true },
    { id: 3, text: 'Lire le cours sur le diabète', completed: false },
  ]);
  const [newTask, setNewTask] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([{ id: Date.now(), text: newTask, completed: false }, ...tasks]);
      setNewTask('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div className="tasks-container">
      {/* Pomodoro Section */}
      <div className="card pomodoro-card">
        <h2>Minuteur Pomodoro</h2>
        <div className="timer-display">
          <span>25</span>:<span>00</span>
        </div>
        <p className="timer-status">Phase de concentration</p>
        <div className="timer-controls">
          <button className="btn btn-primary btn-large">
            <Play size={20} /> Démarrer
          </button>
          <button className="btn btn-icon">
            <Pause size={20} />
          </button>
          <button className="btn btn-icon">
            <RotateCcw size={20} />
          </button>
        </div>
      </div>

      {/* To-Do List Section */}
      <div className="card todo-card">
        <h2>Objectifs de la journée</h2>
        <form onSubmit={addTask} className="add-task-form">
          <input 
            type="text" 
            placeholder="Ajouter une nouvelle tâche..." 
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            <Plus size={20} />
          </button>
        </form>

        <ul className="task-list">
          {tasks.map(task => (
            <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
              <label className="task-label">
                <input 
                  type="checkbox" 
                  checked={task.completed} 
                  onChange={() => toggleTask(task.id)}
                />
                <span className="task-text">{task.text}</span>
              </label>
              <button className="btn-icon delete-btn">
                <Trash2 size={16} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tasks;
