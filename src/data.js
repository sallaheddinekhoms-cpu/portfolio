const defaultProjects = [
  {
    id: 1,
    title: 'منصة طلبة الطب (MedSpace)',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600',
    tags: ['Web Platform', 'Medical', 'Education'],
    link: '/prototypes/medspace',
    description: 'منصة تعليمية متكاملة لطلبة الطب. تحتوي على لوحة تحكم، مراجع طبية، نظام اختبارات، وأدوات تنظيم الوقت للمذاكرة.'
  },
  {
    id: 2,
    title: 'منصة Making Labs',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600',
    tags: ['Tech', 'Innovation', 'Platform'],
    link: '/prototypes/making-labs',
    description: 'منصة متطورة لإدارة وتجهيز المعامل التقنية. تتميز بنظام لحجز أجهزة الطباعة ثلاثية الأبعاد ومعرض لمشاريع المبتكرين.'
  },
  {
    id: 3,
    title: 'متجر الدراجات الهوائية',
    image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&q=80&w=600',
    tags: ['E-Commerce', 'Mobile App', 'UI/UX'],
    link: '/prototypes/bikes',
    description: 'تطبيق جوال احترافي لمتجر بيع دراجات. يحتوي على نظام سلة مشتريات تفاعلي، وتصنيفات مفصلة للمنتجات مع واجهة عرض سينمائية.'
  },
  {
    id: 4,
    title: 'تطبيق الحرفيين',
    image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=600',
    tags: ['Services', 'Mobile App', 'Booking'],
    link: '/prototypes/craftsmen',
    description: 'منصة خدمية لربط الحرفيين بالعملاء. تتضمن ملفات شخصية للحرفيين مع التقييمات، ومحرك بحث للبحث بالاسم أو المهنة، ونظام تواصل مبسط.'
  },
  {
    id: 5,
    title: 'إدارة بيوت الشباب',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600',
    tags: ['Dashboard', 'Management', 'Web'],
    link: '/prototypes/hostels',
    description: 'لوحة تحكم إدارية (Dashboard) قوية لإدارة الحجوزات، تحتوي على شبكة مرئية للغرف، وتتبع لحالات النزلاء مع إحصائيات دقيقة للإشغال.'
  },
  {
    id: 6,
    title: 'تسيير المخزونات (BM Stocking)',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600',
    tags: ['Desktop App', 'Inventory', 'Management'],
    link: '/prototypes/bm-stocking',
    description: 'برنامج سطح مكتب قوي بتصميم داكن (Dark Mode) لإدارة المستودعات، يراقب حركة السلع وينبه عند نقص المخزون بأسلوب احترافي.'
  },
  {
    id: 7,
    title: 'إدارة محلات النظارات (Optica-Sys)',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=600',
    tags: ['Desktop App', 'Medical', 'Management'],
    link: '/prototypes/optica-sys',
    description: 'برنامج سطح مكتب مشرق مخصص لمراكز البصريات. يوفر إدارة شاملة للملفات الطبية وقياسات العيون لكل مريض.'
  },
  {
    id: 8,
    title: 'تطبيق Flora (الزراعة المائية)',
    image: '/assets/flora_mockup.jpg',
    tags: ['Mobile App', 'IoT', 'Smart Farming'],
    link: '/prototypes/flora',
    description: 'تطبيق لإدارة المزرعة الذكية للزراعة المائية (Hydroponics). يوفر مراقبة حية لمستويات الـ pH، درجة الحرارة، ونمو النباتات بواجهة عصرية.'
  }
];

export const getProjects = () => {
  const saved = localStorage.getItem('portfolio_projects');
  if (saved) {
    const parsed = JSON.parse(saved);
    const missing = defaultProjects.filter(dp => !parsed.find(p => p.id === dp.id));
    if (missing.length > 0) {
      const merged = [...parsed, ...missing];
      localStorage.setItem('portfolio_projects', JSON.stringify(merged));
      return merged;
    }
    return parsed;
  }
  localStorage.setItem('portfolio_projects', JSON.stringify(defaultProjects));
  return defaultProjects;
};

export const saveProjects = (projects) => {
  localStorage.setItem('portfolio_projects', JSON.stringify(projects));
};

const defaultCourses = [
  {
    id: 1,
    title: 'دورة تطوير الويب الشاملة',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=600',
    description: 'تعلم بناء تطبيقات ويب تفاعلية من الصفر وحتى الاحتراف. تشمل الدورة تغطية شاملة لأساسيات الويب الحديث، بناء واجهات مستخدم جذابة، وتطوير أنظمة خلفية قوية قابلة للتوسع.',
    link: '#',
    details: {
      objective: 'تخريج مطور ويب متكامل (Full-Stack Developer) قادر على بناء وتطوير واستضافة منصات ويب متقدمة تواكب متطلبات سوق العمل.',
      duration: '12 أسبوع (72 ساعة تدريبية)',
      prerequisites: 'معرفة أساسية جداً بالكمبيوتر، ولا يشترط خبرة برمجية سابقة.',
      content: [
        'أساسيات الويب: HTML5, CSS3, و Javascript.',
        'تصميم واجهات متجاوبة (Responsive Design).',
        'تطوير الواجهة الأمامية (Frontend) باستخدام React.js.',
        'تطوير الخوادم والواجهة الخلفية (Backend) وبناء الـ APIs.',
        'التعامل مع قواعد البيانات وربطها بالموقع.',
        'استضافة ونشر المشروع على خوادم حقيقية.'
      ]
    }
  },
  {
    id: 2,
    title: 'الخوارزميات - المستوى الأول',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=600',
    description: 'مقدمة في التفكير المنطقي وحل المشكلات البرمجية خطوة بخطوة. تعلم كيفية كتابة خوارزميات فعالة، فهم الهياكل الشرطية، وحلقات التكرار لتأسيس قاعدة برمجية صلبة.',
    link: '#',
    details: {
      objective: 'ترسيخ أساسيات التفكير المنطقي والرياضي الضروري لأي مبرمج، وتعلّم كيفية تفكيك المشكلات المعقدة وحلها خطوة بخطوة.',
      duration: '4 أسابيع (16 ساعة تدريبية)',
      prerequisites: 'لا يوجد. مفتوح لجميع المبتدئين.',
      content: [
        'مفهوم الخوارزميات وطرق كتابتها (Pseudocode & Flowcharts).',
        'المتغيرات وأنواع البيانات.',
        'الجمل الشرطية (If-Else) واتخاذ القرار.',
        'حلقات التكرار (Loops).',
        'المصفوفات الأحادية (1D Arrays) وتطبيقاتها الأساسية.',
        'التمارين العملية والتفكير المنطقي.'
      ]
    }
  },
  {
    id: 3,
    title: 'خوارزميات متقدمة وهياكل البيانات',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=600',
    description: 'تعمق في الخوارزميات المتقدمة مثل البحث، الترتيب، الرسوم البيانية (Graphs)، والأشجار (Trees). صمم برامج بأعلى كفاءة في الأداء واستهلاك الذاكرة.',
    link: '#',
    details: {
      objective: 'الارتقاء بمستوى المتدرب ليكون قادراً على اجتياز مقابلات العمل التقنية في الشركات الكبرى وبناء برمجيات سريعة بأقل استهلاك للموارد.',
      duration: '6 أسابيع (24 ساعة تدريبية)',
      prerequisites: 'إتمام دورة الخوارزميات المستوى الأول أو إجادة أساسيات البرمجة.',
      content: [
        'هياكل البيانات: القوائم المتصلة (Linked Lists) والمكدسات (Stacks).',
        'الأشجار (Trees) والرسوم البيانية (Graphs).',
        'خوارزميات الترتيب المتقدمة (Merge Sort, Quick Sort).',
        'خوارزميات البحث والمسار الأقصر (Dijkstra).',
        'تحليل تعقيد الخوارزميات (Big O Notation).',
        'تطبيقات البرمجة الديناميكية (Dynamic Programming).'
      ]
    }
  },
  {
    id: 4,
    title: 'بايثون: من الأساسيات إلى تحليل البيانات',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600',
    description: 'رحلة متكاملة في لغة Python، تبدأ بالأساسيات والمفاهيم المتقدمة، وصولاً إلى استخدام مكتبات تحليل البيانات (Pandas, NumPy) وبناء نماذج استخراج المعرفة.',
    link: '#',
    details: {
      objective: 'تمكين المتدرب من استخدام لغة بايثون في التطبيقات العامة وصولاً إلى معالجة وتحليل البيانات الكبيرة واستخراج الإحصائيات.',
      duration: '8 أسابيع (32 ساعة تدريبية)',
      prerequisites: 'معرفة عامة باستخدام الحاسوب.',
      content: [
        'أساسيات لغة Python والمتغيرات.',
        'الدوال البرمجية (Functions) والتعامل مع الملفات.',
        'هياكل البيانات في بايثون (Lists, Dictionaries, Tuples).',
        'التعامل مع مكتبة NumPy للحسابات المصفوفية.',
        'تنظيف ومعالجة البيانات باستخدام مكتبة Pandas.',
        'تصوير البيانات (Data Visualization) باستخدام Matplotlib و Seaborn.'
      ]
    }
  },
  {
    id: 5,
    title: 'البرمجة كائنية التوجه (OOP)',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600',
    description: 'استوعب مفاهيم الـ OOP كالتغليف (Encapsulation)، الوراثة (Inheritance)، والتعددية (Polymorphism). ابدأ بكتابة كود برمجي منظم ومحترف يسهل صيانته.',
    link: '#',
    details: {
      objective: 'تعليم المتدرب كيفية تنظيم المشاريع البرمجية الكبيرة باستخدام الكائنات، مما يجعل الكود أكثر قابلية للقراءة، الصيانة، وإعادة الاستخدام.',
      duration: '4 أسابيع (16 ساعة تدريبية)',
      prerequisites: 'إجادة أساسيات إحدى لغات البرمجة (C++, Java, C#, أو Python).',
      content: [
        'مفهوم الفئات (Classes) والكائنات (Objects).',
        'خصائص التغليف (Encapsulation) وحماية البيانات.',
        'الوراثة (Inheritance) وإعادة استخدام الشفرة.',
        'التعددية الشكلية (Polymorphism) والتجاوز (Overriding).',
        'الفئات المجردة (Abstract Classes) والواجهات (Interfaces).',
        'مبادئ التصميم النظيف (SOLID Principles) مبدئياً.'
      ]
    }
  },
  {
    id: 6,
    title: 'تطوير برامج سطح المكتب (C# .NET)',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600',
    description: 'تعلم لغة C# وإطار عمل .NET لبناء أنظمة وبرمجيات تسيير وإدارة احترافية لسطح المكتب (Windows) تتضمن ربطاً مباشراً مع قواعد البيانات.',
    link: '#',
    details: {
      objective: 'إعداد مطور قادر على تصميم وبرمجة أنظمة إدارة (كإدارة المخزون، أو العيادات) تعمل على أنظمة ويندوز باحترافية وتكون جاهزة للبيع للعملاء.',
      duration: '10 أسابيع (40 ساعة تدريبية)',
      prerequisites: 'فهم أساسيات البرمجة و OOP.',
      content: [
        'مقدمة في بيئة Visual Studio ولغة C#.',
        'تصميم واجهات المستخدم (Windows Forms أو WPF).',
        'الأحداث (Events) ومعالجتها.',
        'التعامل مع الملفات وإدارة الأخطاء.',
        'ربط التطبيق بقواعد بيانات SQL Server باستخدام ADO.NET أو Entity Framework.',
        'إنشاء التقارير المطبوعة وحزم برنامج التثبيت (Setup).'
      ]
    }
  },
  {
    id: 7,
    title: 'قواعد المعطيات: من الأساسيات إلى الكائنية',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600',
    description: 'انطلق من أساسيات قواعد البيانات العلائقية (SQL) وتصميم الجداول، حتى تصل إلى مفاهيم قواعد البيانات الكائنية والمتقدمة للتعامل مع البيانات الضخمة.',
    link: '#',
    details: {
      objective: 'احتراف تصميم وإدارة أنظمة حفظ البيانات بفعالية عالية، مع الحفاظ على الأمان وسلامة المعلومات (Data Integrity).',
      duration: '6 أسابيع (24 ساعة تدريبية)',
      prerequisites: 'لا يوجد.',
      content: [
        'المفاهيم الأساسية لقواعد البيانات العلائقية (RDBMS).',
        'مخطط الكينونة والعلاقة (ERD) وتطبيع البيانات (Normalization).',
        'لغة الاستعلام المهيكلة (SQL): DDL و DML.',
        'الاستعلامات المعقدة (Joins, Subqueries).',
        'الإجراءات المخزنة (Stored Procedures) والمحفزات (Triggers).',
        'مقدمة في قواعد البيانات غير العلائقية (NoSQL) والكائنية.'
      ]
    }
  },
  {
    id: 8,
    title: 'تطوير تطبيقات الموبايل (Flutter)',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600',
    description: 'استخدم لغة Dart وإطار عمل Flutter لبناء تطبيقات هواتف ذكية (Android و iOS) بواجهة مستخدم عصرية وكود مصدري واحد عالي الأداء.',
    link: '#',
    details: {
      objective: 'تمكينك من برمجة تطبيقات الهواتف الذكية لمنصتي الأندرويد والآيفون بكود واحد مع تجربة مستخدم سلسة ورسوميات عالية الأداء.',
      duration: '10 أسابيع (40 ساعة تدريبية)',
      prerequisites: 'أساسيات البرمجة كائنية التوجه.',
      content: [
        'مقدمة في لغة Dart وأساسياتها.',
        'فهم مكونات الواجهة (Widgets) وإدارة الحالة البسيطة.',
        'تخطيط الشاشات (Layouts) والتصميم المتجاوب للموبايل.',
        'إدارة الحالة المتقدمة (State Management - Provider/Bloc).',
        'التعامل مع الـ APIs والشبكة لطلب البيانات.',
        'استخدام Firebase وقواعد البيانات المحلية، ورفع التطبيق للمتاجر.'
      ]
    }
  },
  {
    id: 9,
    title: 'PHP من الأساسيات إلى Laravel',
    image: 'https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?auto=format&fit=crop&q=80&w=600',
    description: 'احترف تطوير مواقع الويب الديناميكية مع لغة PHP. انتقل من كتابة الكود الأساسي إلى العمل باحترافية على إطار العمل Laravel لبرمجة خلفيات أنظمة متطورة.',
    link: '#',
    details: {
      objective: 'تخريج مطور واجهات خلفية (Backend Developer) قوي يعتمد على لغة PHP وإطار لارافيل المستخدم بكثرة في كبرى الشركات ومواقع العمل الحر.',
      duration: '10 أسابيع (40 ساعة تدريبية)',
      prerequisites: 'أساسيات HTML و CSS.',
      content: [
        'أساسيات لغة PHP البرمجية والمتغيرات.',
        'إرسال واستقبال البيانات وتمريرها في المتصفح.',
        'البرمجة كائنية التوجه (OOP) في لغة PHP.',
        'مقدمة في إطار العمل Laravel ونمط (MVC).',
        'نظام التوجيه (Routing) ونظام القوالب (Blade).',
        'ربط قاعدة البيانات واستخدام (Eloquent ORM) وأنظمة المصادقة.'
      ]
    }
  },
  {
    id: 10,
    title: 'JavaScript: MERN Stack',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600',
    description: 'سيطر على لغة جافا سكريبت بالكامل. ابدأ من الأساسيات وتدرج حتى بناء واجهات أمامية باستخدام React، وتطوير خوادم خلفية متكاملة باستخدام Node.js.',
    link: '#',
    details: {
      objective: 'بناء تطبيقات الويب الحديثة (Single Page Applications) بشكل متكامل باستخدام بيئة JavaScript بالكامل للواجهتين الأمامية والخلفية.',
      duration: '12 أسبوع (48 ساعة تدريبية)',
      prerequisites: 'أساسيات HTML و CSS قوية.',
      content: [
        'أساسيات JavaScript و ES6+.',
        'مفاهيم React.js (المكونات، Hooks، وإدارة الحالة).',
        'إدارة التوجيه (React Router).',
        'أساسيات Node.js وإطار Express.js.',
        'ربط خادم Node.js بقواعد بيانات MongoDB (Mongoose).',
        'تكامل الـ Frontend مع الـ Backend وبناء نظام تسجيل دخول آمن (JWT).'
      ]
    }
  },
  {
    id: 11,
    title: 'دروس الدعم في الإعلام الآلي (ثانوي)',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600',
    description: 'حصص دعم متخصصة لطلبة الطور الثانوي في مادة الإعلام الآلي، تشمل تبسيط المفاهيم النظرية والتطبيق العملي لضمان التفوق الدراسي.',
    link: '#',
    details: {
      objective: 'مساعدة طلاب المرحلة الثانوية على فهم منهج مادة المعلوماتية (الإعلام الآلي) والتحضير للامتحانات بقوة وثقة عالية.',
      duration: 'مستمر (حسب البرنامج الدراسي)',
      prerequisites: 'التسجيل في الطور الثانوي.',
      content: [
        'مراجعة شاملة لأساسيات بيئة العمل وأنظمة التشغيل.',
        'شرح مفاهيم الخوارزميات (البرنامج الثانوي).',
        'تطبيق الخوارزميات باستخدام المخططات الانسيابية.',
        'مقدمة في لغات البرمجة (مثل باسكال أو سي) المعتمدة دراسياً.',
        'أساسيات الشبكات وهيكلة الحواسيب.',
        'حل نماذج اختبارات وفروض سابقة وتدريب عملي.'
      ]
    }
  },
  {
    id: 12,
    title: 'حزمة الأوفيس (Word, Excel, PowerPoint)',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=600',
    description: 'تكوين متكامل من المستوى المبتدئ إلى المتقدم في برامج مايكروسوفت أوفيس. المهارة الأساسية لكل موظف، طالب، وإداري ناجح.',
    link: '#',
    details: {
      objective: 'إكساب المتدرب احترافية تامة في تحرير الوثائق، معالجة الجداول الحسابية المتقدمة، وتقديم العروض التقديمية المبهرة.',
      duration: '4 أسابيع (16 ساعة تدريبية)',
      prerequisites: 'لا يوجد متطلبات مسبقة.',
      content: [
        'Microsoft Word: تنسيق النصوص المتقدم، إنشاء الفهارس، والمراسلات (Mail Merge).',
        'Microsoft Excel: أساسيات الخلايا، الدوال الرياضية والمنطقية الأساسية.',
        'Excel المتقدم: دوال البحث (VLOOKUP, XLOOKUP)، الجداول المحورية (Pivot Tables).',
        'Microsoft PowerPoint: تصميم الشرائح الاحترافية واستخدام الحركات (Animations).',
        'التكامل بين البرامج الثلاثة وكيفية تصدير وحماية الملفات.'
      ]
    }
  },
  {
    id: 13,
    title: 'تحليل البيانات: Power BI',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
    description: 'استفد من قوة البيانات. تعلم كيفية جمع، تنظيف، وعرض البيانات باستخدام لوحات تحكم (Dashboards) تفاعلية وذكية لاتخاذ قرارات مدروسة.',
    link: '#',
    details: {
      objective: 'تأهيل المتدربين لدخول سوق تحليل الأعمال (Business Intelligence) وبناء تقارير تفاعلية ذكية لاتخاذ القرارات الإدارية.',
      duration: '5 أسابيع (20 ساعة تدريبية)',
      prerequisites: 'إجادة متوسطة لبرنامج الإكسل ومعرفة بأساسيات البيانات.',
      content: [
        'مقدمة في ذكاء الأعمال (Business Intelligence).',
        'استيراد البيانات من مصادر متعددة (Excel, SQL, Web) وربطها.',
        'تنظيف وتشكيل البيانات باستخدام (Power Query).',
        'بناء العلاقات بين الجداول (Data Modeling).',
        'استخدام دوال (DAX) لإجراء الحسابات والمؤشرات الرئيسية (KPIs).',
        'تصميم لوحات التحكم (Dashboards) التفاعلية ونشر التقارير.'
      ]
    }
  },
  {
    id: 14,
    title: 'الذكاء الاصطناعي وهندسة الأوامر',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600',
    description: 'تكوين متقدم لاحتراف استخدام أدوات الذكاء الاصطناعي التوليدي، وفن هندسة الأوامر (Prompt Engineering) وهندسة السياق.',
    link: '#',
    details: {
      objective: 'إتقان استخدام أحدث نماذج الذكاء الاصطناعي التوليدي، وتعلّم كيفية توجيهها بدقة وتوفير السياق المناسب لمضاعفة الإنتاجية وتسهيل المهام.',
      duration: '3 أسابيع (12 ساعة تدريبية)',
      prerequisites: 'الرغبة في التعلم. متاح لجميع التخصصات والمستويات.',
      content: [
        'مدخل إلى الذكاء الاصطناعي التوليدي وأبرز أدواته (ChatGPT, Claude، وغيرها).',
        'أساسيات وقواعد هندسة الأوامر (Prompt Engineering).',
        'هندسة السياق (Context Engineering) لبرمجة إجابات دقيقة ومخصصة.',
        'تطبيقات عملية: توليد النصوص، تحليل البيانات، وكتابة الأكواد.',
        'أتمتة المهام الإدارية واليومية باستخدام الذكاء الاصطناعي.',
        'التعامل مع الهلوسة وأخلاقيات استخدام الذكاء الاصطناعي.'
      ]
    }
  },
  {
    id: 15,
    title: 'بناء الوكلاء الذكيين والأتمتة',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600',
    description: 'تعلم كيفية تصميم وتطوير وكلاء أذكياء مستقلين (AI Agents) وربطها بأدوات الأتمتة المتقدمة لإنجاز المهام المعقدة آلياً.',
    link: '#',
    details: {
      objective: 'تمكين المتدرب من بناء وكلاء ذكاء اصطناعي مخصصين وقادرين على اتخاذ القرارات، وربطهم بأنظمة سير العمل (Workflows) لأتمتة عمليات الشركات.',
      duration: '4 أسابيع (16 ساعة تدريبية)',
      prerequisites: 'أساسيات لغة بايثون (Python) ومعرفة عامة بكيفية عمل الـ APIs.',
      content: [
        'مفهوم الوكلاء الذكيين (AI Agents) وآلية اتخاذ القرار (Decision Making).',
        'بناء وكلاء مخصصين باستخدام أطر عمل مثل LangChain.',
        'تزويد الوكلاء بالذاكرة (Memory) والأدوات الخارجية (Tools).',
        'ربط الوكلاء بالخدمات (APIs) لتنفيذ إجراءات حقيقية.',
        'أتمتة سير العمل المتقدم باستخدام منصات مثل Zapier و Make.',
        'نشر الوكلاء (Deployment) واختبار أدائهم في بيئات العمل الحقيقية.'
      ]
    }
  }
];

export const getCourses = () => {
  // Always update cache to ensure images are correct
  localStorage.setItem('portfolio_courses', JSON.stringify(defaultCourses));
  return defaultCourses;
};

export const saveCourses = (courses) => {
  localStorage.setItem('portfolio_courses', JSON.stringify(courses));
};

const defaultStats = [
  { id: 1, title: 'سنوات خبرة', value: '+5' },
  { id: 2, title: 'مشاريع مكتملة', value: '+50' },
  { id: 3, title: 'عملاء سعداء', value: '+30' }
];



export const getStats = () => {
  const saved = localStorage.getItem('portfolio_stats');
  if (saved) {
    return JSON.parse(saved);
  }
  return defaultStats;
};

export const saveStats = (stats) => {
  localStorage.setItem('portfolio_stats', JSON.stringify(stats));
};

const defaultTestimonials = [
  {
    id: 1,
    name: 'أحمد سعيد',
    role: 'مدير تنفيذي - شركة التقنية',
    text: 'عمل احترافي جداً وتجاوب سريع، أنصح بشدة بالتعامل مع استوديو KhoMs Tech لالتزامهم وجودة برمجياتهم.',
    image: '/assets/hero.jpg' // Default generic image
  }
];

export const getTestimonials = () => {
  const saved = localStorage.getItem('portfolio_testimonials');
  if (saved) {
    return JSON.parse(saved);
  }
  return defaultTestimonials;
};

export const saveTestimonials = (testimonials) => {
  localStorage.setItem('portfolio_testimonials', JSON.stringify(testimonials));
};

export const getRequests = async () => {
  try {
    const response = await fetch('/api/requests');
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error('Error fetching requests:', error);
  }
  return [];
};

export const addRequest = async (request) => {
  try {
    await fetch('/api/requests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request)
    });
  } catch (error) {
    console.error('Error saving request:', error);
  }
};

export const deleteRequest = async (id) => {
  try {
    await fetch(`/api/requests/${id}`, {
      method: 'DELETE'
    });
  } catch (error) {
    console.error('Error deleting request:', error);
  }
};

export const recordVisit = async () => {
  if (!sessionStorage.getItem('has_visited')) {
    try {
      await fetch('/api/visits', { method: 'POST' });
      sessionStorage.setItem('has_visited', 'true');
    } catch (err) {
      console.error('Error recording visit:', err);
    }
  }
};

export const getVisits = async () => {
  try {
    const res = await fetch('/api/visits');
    return await res.json();
  } catch (err) {
    console.error('Error fetching visits:', err);
    return [];
  }
};
