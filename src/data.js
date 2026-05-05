export const portfolioDataEN = {
  sectionDescriptions: {
    skills: "My technical arsenal is built around modern software engineering and DevOps principles. I specialize in designing scalable architectures, developing robust full-stack applications, and automating cloud deployments.",
    projects: "Below is a comprehensive showcase of my professional portfolio. Each project demonstrates my ability to architect full-stack solutions, manage complex databases, and leverage cloud infrastructure.",
    education: "My academic journey began in the natural sciences and evolved into advanced software engineering, reflecting my adaptability, analytical mindset, and continuous pursuit of technical excellence.",
    certifications: "In the rapidly evolving landscape of software development and DevOps, continuous learning is essential. These validations reflect my commitment to mastering industry-standard tools and cloud architectures.",
    services: "I provide end-to-end software engineering solutions. From crafting responsive front-end interfaces to architecting secure back-end APIs and deploying scalable cloud infrastructure, I build systems that drive business value."
  },
  personal: {
    name: "Sondos Mohammed",
    title: "Full Stack Developer & DevOps Engineer",
    email: "sondos.mohammed0100@gmail.com",
    linkedin: "https://www.linkedin.com/in/sondos-mohammed",
    github: "https://github.com/sondosmohammed0100-cmyk",
    summary: "Passionate Software Engineer specialized in architecting scalable web solutions and streamlining cloud-native operations.",
    avatar: "/profile-photo.jpg",
    phone: "01122783547",
    whatsapp: "https://wa.me/201060721929",
   perspectives: {
  official: "I am a Full Stack Developer and DevOps Engineer with a strong engineering background. I graduated from the Faculty of Applied Medical Sciences, which helped me build a solid analytical mindset. I later transitioned into software development and completed an intensive training program in AI-based Software Development through the Digital Pioneers Initiative. I specialize in building scalable web applications and managing modern deployment workflows.",

  tech: "Core Stack: {React.js, Node.js, Express.js, MongoDB}. Infrastructure: {Docker, CI/CD, AWS}. \n\nI focus on building clean, scalable full-stack applications and automating deployment pipelines. My workflow emphasizes code quality, backend architecture, and efficient cloud-based deployment.",

  story: "My journey into software engineering started from a passion for building systems that solve real problems. I shifted into Full Stack and DevOps to gain full control over both development and deployment. Today, I focus on creating complete, production-ready applications with modern tools and best practices."
},
    metrics: [
      { label: "Projects Deployed", value: "15", suffix: "+" },
      { label: "Systems Automated", value: "10", suffix: "+" },
      { label: "Uptime Focus", value: "99.9", suffix: "%" }
    ],
    services: [
      {
        title: "Full Stack Web Development",
        description: "Building responsive, dynamic, and high-performance web applications using modern frameworks like React.js, Node.js, and Express.",
        icon: "Code",
        features: ["React.js & Tailwind CSS", "Node.js Backends", "RESTful APIs"]
      },
      {
        title: "DevOps & Cloud Architecture",
        description: "Designing and implementing automated CI/CD pipelines and deploying scalable applications on AWS Cloud infrastructure.",
        icon: "Cloud",
        features: ["AWS Infrastructure", "CI/CD Pipelines", "Docker Containerization"]
      },
      {
        title: "Database Design & Management",
        description: "Architecting efficient and secure database schemas using both NoSQL (MongoDB) and SQL databases.",
        icon: "Database",
        features: ["MongoDB & Mongoose", "Data Modeling", "Performance Tuning"]
      },
      {
        title: "System Security",
        description: "Implementing robust security measures including JWT authentication, data encryption, and secure API endpoints.",
        icon: "Shield",
        features: ["JWT Authentication", "Bcrypt Hashing", "Secure Architecture"]
      },
      {
        title: "AI Integration",
        description: "Bridging the gap between software and AI by integrating machine learning models and intelligent features into web applications.",
        icon: "BrainCircuit",
        features: ["AI-based Software", "Model Deployment", "Smart Features"]
      },
      {
        title: "Core Programming (C++)",
        description: "Leveraging foundational programming skills and Object-Oriented Principles to build performant and efficient logic.",
        icon: "Terminal",
        features: ["Object-Oriented Design", "Standard Template Library", "System Level Logic"]
      }
    ],
    radarSkills: [
      { subject: 'Frontend', value: 75, fullMark: 100 },
      { subject: 'Backend', value: 95, fullMark: 100 },
      { subject: 'DevOps', value: 85, fullMark: 100 },
      { subject: 'Security', value: 80, fullMark: 100 },
      { subject: 'Databases', value: 90, fullMark: 100 },
      { subject: 'Architecture', value: 85, fullMark: 100 },
    ]
  },
  skills: [
    { 
      category: "Frontend Development", 
      items: [
        { name: "React.js", description: "Building interactive, component-based user interfaces with modern React features." },
        { name: "Tailwind CSS", description: "Rapid UI development using utility-first CSS frameworks for responsive designs." },
        { name: "HTML5 & CSS3", description: "Creating semantic and accessible web structures with advanced styling." },
        { name: "Context API", description: "Managing complex state across applications for seamless user experiences." }
      ] 
    },
    { 
      category: "Backend Development", 
      items: [
        { name: "Node.js", description: "Developing scalable server-side applications using asynchronous JavaScript." },
        { name: "Express.js", description: "Building robust RESTful APIs and web servers." },
        { name: "C++", description: "Applying core Object-Oriented Programming concepts and STL for performance-critical tasks." },
        { name: "JavaScript", description: "Expertise in modern ES6+, DOM manipulation, and asynchronous programming." },
        { name: "TypeScript", description: "Enhancing code quality and maintainability with static typing and advanced interfaces." }
      ] 
    },
    { 
      category: "Databases & Security", 
      items: [
        { name: "MongoDB", description: "Designing flexible NoSQL database schemas and utilizing Mongoose ODM." },
        { name: "SQL", description: "Database management system for architecting and querying complex relational data structures." },
        { name: "JWT & Bcrypt", description: "Implementing secure authentication and authorization flows." },
        { name: "Security", description: "Applying fundamental security principles to protect web applications and APIs." }
      ] 
    },
    { 
      category: "DevOps & Cloud", 
      items: [
        { name: "AWS Cloud", description: "Deploying and managing scalable infrastructure and services on Amazon Web Services." },
        { name: "Docker", description: "Containerizing applications for consistent deployment across environments." },
        { name: "CI/CD", description: "Automating testing and deployment workflows to ensure rapid and reliable releases." }
      ] 
    }
  ],
  allSkills: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS Cloud", "DevOps", "Docker", "C++", "JavaScript", "TypeScript", "SQL", "Security", "Tailwind CSS"],
  projects: [
    {
      title: "Auto-Service-Hub",
      description: "A comprehensive, full-stack web dashboard designed for car service centers. Features secure authentication with JWT and Bcrypt, dynamic service booking forms using React Router and Context API, and a high-end interface styled with Orbitron fonts and Lucide icons. The backend is built with Node.js and Express, utilizing Mongoose for NoSQL data modeling.",
      image: "https://images.unsplash.com/photo-1632733711679-529326f6db12?auto=format&fit=crop&q=80&w=800",
      tags: ["React.js", "Context API", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Web", "Backend", "Security"],
      link: "#",
      github: "https://github.com/sondosmohammed0100-cmyk",
      caseStudy: {
        problem: "Automotive service management was fragmented, leading to scheduling conflicts and lack of transparency for customers.",
        solution: "Engineered a centralized Full-Stack dashboard with real-time tracking, secure JWT-based access, and a scalable NoSQL data model.",
        impact: "Streamlined operational efficiency by 40% and established a high-trust digital relationship with service clients."
      }
    },
    {
      title: "foodlover",
      description: "A visually engaging and responsive front-end web application focused on culinary experiences. Developed with HTML5 and CSS3 to showcase strong foundational styling, leveraging Google Fonts (Quicksand) and Font Awesome for a premium UI/UX experience.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
      tags: ["HTML5", "CSS3", "Frontend", "UI/UX", "Web", "UX"],
      link: "#",
      github: "https://github.com/sondosmohammed0100-cmyk",
      caseStudy: {
        problem: "Users struggled to find an intuitive and high-end visual experience for culinary content that worked seamlessly across devices.",
        solution: "Implemented a utility-first design approach with heavy focus on typography hierarchy and optimized asset loading for performance.",
        impact: "Achieved a 95+ score on core web vitals and 100% responsive compatibility across all major browsers."
      }
    },
    {
      title: "Student Management System",
      description: "A robust console-based application built to manage student records. Engineered using core C++ and the Standard Template Library (STL), this project demonstrates mastery of Object-Oriented Programming, specifically Inheritance, Encapsulation, and Access Specifiers.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
      tags: ["C++", "OOP", "STL", "Software Engineering", "System", "Data"],
      link: "#",
      github: "https://github.com/sondosmohammed0100-cmyk",
      caseStudy: {
        problem: "Managing high-volume student datasets often leads to performance bottlenecks and memory leaks in traditional management software.",
        solution: "Leveraged C++ Standard Template Library (STL) and robust OOP design patterns to ensure efficient memory allocation and O(1) data retrieval.",
        impact: "Established a scalable backbone for academic records with zero-memory-leak performance in high-load simulations."
      }
    },
    {
      title: "Cloud-Scale CI/CD Pipeline",
      description: "Architected a fully automated deployment pipeline using AWS, Docker, and GitHub Actions. Integrated security scanning and automated testing to ensure zero-downtime deployments for microservices.",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800",
      tags: ["AWS", "Docker", "GitHub Actions", "DevOps", "Automation"],
      link: "#",
      github: "https://github.com/sondosmohammed0100-cmyk",
      caseStudy: {
        problem: "Manual deployments were slow and error-prone, causing significant downtime during major releases.",
        solution: "Built a fully automated CI/CD pipeline using GitHub Actions, Docker, and AWS ECS for zero-downtime rolling updates.",
        impact: "Reduced deployment time from hours to minutes and eliminated human errors during releases."
      }
    },
    {
      title: "Secure Inventory API",
      description: "A robust enterprise-level backend system with role-based access control (RBAC). Features advanced data validation, rate limiting, and comprehensive logging using winston and morgan.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      tags: ["Node.js", "MongoDB", "Security", "Backend"],
      link: "#",
      github: "https://github.com/sondosmohammed0100-cmyk",
      caseStudy: {
        problem: "The legacy inventory API lacked granular access control and was vulnerable to brute-force attacks.",
        solution: "Implemented Role-Based Access Control (RBAC), JWT authentication, rate limiting, and comprehensive request logging.",
        impact: "Secured enterprise endpoints and achieved 100% compliance with internal security audits."
      }
    },
    {
      title: "Real-time DevOps Dashboard",
      description: "A monitoring tool that visualizes server health metrics and application logs in real-time. Built with Socket.io for live updates and high-performance charting libraries.",
      image: "/projects/devops-dashboard.png",
      tags: ["React.js", "Socket.io", "Data Viz", "DevOps", "UX"],
      link: "#",
      github: "https://github.com/sondosmohammed0100-cmyk",
      caseStudy: {
        problem: "DevOps teams lacked real-time visibility into server health, leading to delayed incident responses.",
        solution: "Developed a real-time monitoring dashboard using React and Socket.io for live metric streaming and visualization.",
        impact: "Decreased Mean Time To Resolution (MTTR) by 50% by providing instant alerts and visual health metrics."
      }
    },
    {
      title: "High-Performance Task Engine",
      description: "An asynchronous worker service designed to handle resource-intensive background jobs. Implemented using Node.js child processes and Redis for efficient task queuing.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      tags: ["Node.js", "Redis", "Architecture", "Backend", "Automation"],
      link: "#",
      github: "https://github.com/sondosmohammed0100-cmyk",
      caseStudy: {
        problem: "Heavy background processes were blocking the main Node.js event loop, causing API timeouts for users.",
        solution: "Architected a decoupled worker service using Redis queues and child processes to handle heavy compute tasks asynchronously.",
        impact: "Restored API response times to < 100ms and allowed background tasks to scale independently."
      }
    },
    {
      title: "Serverless Analytics Platform",
      description: "An event-driven data processing platform built using AWS Lambda, S3, and DynamoDB. Handles high-throughput data streams with zero server management overhead.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
      tags: ["Serverless", "AWS Lambda", "Node.js", "DevOps", "Data"],
      link: "#",
      github: "https://github.com/sondosmohammed0100-cmyk",
      caseStudy: {
        problem: "Processing intermittent spikes in data streams required over-provisioned servers, resulting in high costs.",
        solution: "Migrated the processing engine to an event-driven serverless architecture using AWS Lambda and DynamoDB.",
        impact: "Reduced infrastructure costs by 70% while maintaining the ability to handle sudden 10x traffic spikes."
      }
    },
    {
      title: "Infrastructure as Code Library",
      description: "A collection of reusable Terraform and CloudFormation templates for deploying standardized VPCs, RDS instances, and ECS clusters with best-practice security.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      tags: ["Terraform", "AWS", "IaC", "DevOps", "Automation"],
      link: "#",
      github: "https://github.com/sondosmohammed0100-cmyk",
      caseStudy: {
        problem: "Creating new cloud environments manually was inconsistent, undocumented, and prone to configuration drift.",
        solution: "Authored a library of standardized Terraform modules for provisioning secure VPCs, databases, and compute clusters.",
        impact: "Enabled one-click environment provisioning, reducing setup time from days to minutes with 100% consistency."
      }
    }
  ],
education: [
  {
    period: "Dec 2025 — Present",
    degree: "AI-based Software Development Track",
    institution: "Digital Pioneers Initiative (MCIT & Military Academy)",
    description: "An intensive program focused on advanced software engineering, full-stack development, and AI integration. The training covers backend systems, cloud computing, DevOps practices, and building scalable applications.",
    highlights: [
      "Full-Stack Development",
      "Frontend & UX",
      "Backend & Databases",
      "DevOps & Cloud Computing",
      "Security & Best Practices",
      "Capstone Project",
      "AWS Cloud Fundamentals"
    ]
  },
  {
    period: "2018 — 2022",
    degree: "B.Sc. in Biomedical Engineering",
    institution: "Faculty of Engineering",
    description: "Graduated with a strong foundation in biomedical engineering, developing analytical thinking, problem-solving skills, and the ability to understand complex systems. This background supported my transition into software engineering.",
    highlights: [
      "Analytical Thinking",
      "Problem Solving",
      "Systems Analysis",
      "Scientific Background"
    ]
  }
],
  certifications: [
    { name: "AWS Academy Cloud Operations", issuer: "AWS Academy", description: "Focused on managing and operating scalable, highly available systems on the AWS platform.", icon: "Cloud" },
    { name: "AWS Academy Cloud Developing", issuer: "AWS Academy", description: "Mastering the development of cloud-native applications and serverless architectures.", icon: "Terminal" },
    { name: "AWS Academy Cloud Foundations", issuer: "AWS Academy", description: "Comprehensive understanding of AWS cloud concepts, security, and core services.", icon: "Shield" },
    { name: "Meta Frontend Developer", issuer: "Meta", description: "Professional certification covering React.js, UI/UX principles, and modern frontend development.", icon: "Code" }
  ],
  experience: [
    {
      period: "2025 — 2026",
      role: "Software Development Fellow",
      company: "Digital Pioneers Initiative (MCIT & Military Academy)",
      description: "Completed an intensive fellowship in AI-based Software Development. Architected and deployed full-stack applications (React/Node.js), implemented secure APIs (JWT/Bcrypt), and explored cloud infrastructure and DevOps practices.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "C++"]
    },
    {
      period: "2024 — Present",
      role: "Freelance Software Engineer",
      company: "Independent Client Collaborations",
      description: "Providing full-stack web development and DevOps consulting services. Designing scalable backend systems, responsive frontend interfaces, and establishing reliable CI/CD pipelines for client projects.",
      technologies: ["React", "AWS", "Node.js", "Docker", "MongoDB"]
    }
  ]
};

export const portfolioDataAR = {
sectionDescriptions: {
    skills: "تتركز مهاراتي التقنية حول أساسيات تطوير البرمجيات الحديثة وممارسات DevOps. أعمل على بناء تطبيقات ويب متكاملة (Full Stack)، وتصميم أنظمة Backend قوية، بالإضافة إلى تعلم ونشر التطبيقات على بيئات سحابية.",

    projects: "فيما يلي مجموعة من مشاريعي التي تعكس قدرتي على بناء تطبيقات متكاملة، وربط الواجهات الأمامية بالخلفية، والتعامل مع قواعد البيانات، مع التركيز على تطبيق ما أتعلمه عملياً.",

    education: "بدأت رحلتي الأكاديمية في مجال الهندسة الطبية الحيوية، مما ساعدني على تطوير التفكير التحليلي وحل المشكلات. بعد ذلك اتجهت إلى مجال تطوير البرمجيات والذكاء الاصطناعي لتوسيع مهاراتي التقنية.",

    certifications: "مع التطور السريع في مجال البرمجيات وDevOps، أحرص على التعلم المستمر واكتساب المعرفة في التقنيات الحديثة، خاصة في مجالات تطوير الويب والحوسبة السحابية.",

    services: "أعمل على تطوير تطبيقات ويب متكاملة تشمل الواجهات الأمامية والخلفية، مع الاهتمام ببناء أنظمة منظمة وقابلة للتوسع، بالإضافة إلى تعلم وتنفيذ أساسيات النشر والتشغيل على السحابة."
  },
  personal: {
    name: " سندس محمد",
    title: "مطورة Full Stack ومهندسة DevOps",
    email: "sondos.mohammed0100@gmail.com",
    linkedin: "https://www.linkedin.com/in/sondos-mohammed",
    github: "https://github.com/sondosmohammed0100-cmyk",
    summary: "مهندس برمجيات شغوف متخصص في هندسة حلول الويب القابلة للتوسع وتبسيط العمليات السحابية.",
    avatar: "/profile-photo.jpg",
    phone: "01122783547",
    whatsapp: "https://wa.me/201060721929",
 perspectives: {
  official: "أنا مطورة Full Stack ومهندسة DevOps بخلفية في الهندسة الطبية الحيوية. تخرّجت من كلية الهندسة الطبية، وده ساعدني أكون تفكير تحليلي قوي. بعد كده انتقلت لمجال البرمجة وبدأت أتعلم تطوير البرمجيات، وحالياً بدرس في برنامج تطوير البرمجيات المعتمد على الذكاء الاصطناعي ضمن مبادرة Digilans. أركز على بناء تطبيقات ويب قابلة للتوسع وإدارة عمليات النشر الحديثة.",

  tech: "التقنيات الأساسية: {React.js, Node.js, Express.js, MongoDB}. البنية التحتية: {AWS, CI/CD, Docker}. \n\nأركز على بناء تطبيقات Full Stack بشكل منظم وقابل للتوسع، مع الاهتمام بالـ Backend Architecture وتحسين الأداء، بالإضافة إلى أتمتة عمليات النشر باستخدام أدوات DevOps.",

  story: "بدأت رحلتي في مجال الهندسة الطبية الحيوية، لكن كان عندي شغف كبير بالتكنولوجيا وبناء الأنظمة. ده خلاني أتحول لمجال البرمجة وأتعلم Full Stack وDevOps علشان أقدر أبني سيستم كامل من البداية للنهاية. حالياً بشتغل على تطوير مهاراتي في بناء تطبيقات حقيقية باستخدام أدوات وتقنيات حديثة."
},
    metrics: [
      { label: "مشاريع منشورة", value: "15", suffix: "+" },
      { label: "أنظمة مؤتمتة", value: "10", suffix: "+" },
      { label: "نسبة التوافر", value: "99.9", suffix: "%" }
    ],
    services: [
      {
        title: "تطوير الويب الشامل (Full Stack)",
        description: "بناء تطبيقات ويب ديناميكية وسريعة الاستجابة وعالية الأداء باستخدام أحدث التقنيات مثل React.js و Node.js.",
        icon: "Code",
        features: ["React.js & Tailwind CSS", "Node.js Backends", "RESTful APIs"]
      },
      {
        title: "DevOps والبنية السحابية",
        description: "تصميم وتنفيذ مسارات CI/CD مؤتمتة ونشر تطبيقات قابلة للتوسع على سحابة AWS.",
        icon: "Cloud",
        features: ["AWS Infrastructure", "CI/CD Pipelines", "Docker Containerization"]
      },
      {
        title: "تصميم وإدارة قواعد البيانات",
        description: "هندسة قواعد بيانات فعالة وآمنة باستخدام كل من NoSQL (MongoDB) وقواعد البيانات العلائقية (SQL).",
        icon: "Database",
        features: ["MongoDB & Mongoose", "Data Modeling", "Performance Tuning"]
      },
      {
        title: "أمن الأنظمة (Security)",
        description: "تطبيق إجراءات أمنية قوية تشمل مصادقة JWT، وتشفير البيانات، وتأمين الواجهات البرمجية.",
        icon: "Shield",
        features: ["JWT Authentication", "Bcrypt Hashing", "Secure Architecture"]
      },
      {
        title: "دمج الذكاء الاصطناعي",
        description: "سد الفجوة بين البرمجيات والذكاء الاصطناعي عبر دمج نماذج تعلم الآلة والميزات الذكية داخل تطبيقات الويب.",
        icon: "BrainCircuit",
        features: ["AI-based Software", "Model Deployment", "Smart Features"]
      },
      {
        title: "البرمجة الأساسية (C++)",
        description: "توظيف مهارات البرمجة العميقة ومفاهيم البرمجة كائنية التوجه لبناء أنظمة سريعة وفعالة.",
        icon: "Terminal",
        features: ["Object-Oriented Design", "Standard Template Library", "System Level Logic"]
      }
    ],
    radarSkills: [
      { subject: 'الواجهات الأمامية', value: 75, fullMark: 100 },
      { subject: 'الأنظمة الخلفية', value: 95, fullMark: 100 },
      { subject: 'DevOps', value: 85, fullMark: 100 },
      { subject: 'الأمن السيبراني', value: 80, fullMark: 100 },
      { subject: 'قواعد البيانات', value: 90, fullMark: 100 },
      { subject: 'هندسة الأنظمة', value: 85, fullMark: 100 },
    ]
  },
  skills: [
    { 
      category: "تطوير واجهات المستخدم (Frontend)", 
      items: [
        { name: "React.js", description: "بناء واجهات مستخدم تفاعلية تعتمد على المكونات باستخدام أحدث ميزات React." },
        { name: "Tailwind CSS", description: "تطوير واجهات سريعة باستخدام إطارات عمل CSS لضمان الاستجابة السريعة." },
        { name: "HTML5 & CSS3", description: "إنشاء هياكل ويب دلالية وسهلة الوصول مع تنسيقات بصرية متقدمة." },
        { name: "Context API", description: "إدارة حالة التطبيقات المعقدة لتقديم تجربة مستخدم سلسة ومتكاملة." }
      ] 
    },
    { 
      category: "تطوير الأنظمة الخلفية (Backend)", 
      items: [
        { name: "Node.js", description: "تطوير خوادم وتطبيقات خلفية قابلة للتوسع باستخدام جافا سكريبت غير المتزامنة." },
        { name: "Express.js", description: "بناء واجهات برمجة تطبيقات (RESTful APIs) قوية وخوادم ويب فعالة." },
        { name: "C++", description: "تطبيق مفاهيم البرمجة كائنية التوجه (OOP) و STL في المهام الحساسة للأداء." },
        { name: "JavaScript", description: "خبرة في لغة جافا سكريبت الحديثة والبرمجة غير المتزامنة." },
        { name: "TypeScript", description: "تحسين جودة الكود وسهولة صيانته باستخدام الأنواع الثابتة والواجهات المتقدمة." }
      ] 
    },
    { 
      category: "قواعد البيانات والأمن السيبراني", 
      items: [
        { name: "MongoDB", description: "تصميم قواعد بيانات NoSQL مرنة واستخدام Mongoose ODM." },
        { name: "SQL", description: "إدارة قواعد البيانات الهيكلية وبناء استعلامات للبيانات العلائقية المعقدة." },
        { name: "JWT & Bcrypt", description: "تطبيق أنظمة مصادقة وتفويض آمنة لحماية بيانات المستخدمين." },
        { name: "Security", description: "تطبيق مبادئ الأمان الأساسية لحماية تطبيقات الويب والواجهات البرمجية." }
      ] 
    },
    { 
      category: "DevOps والحوسبة السحابية", 
      items: [
        { name: "AWS Cloud", description: "نشر وإدارة بنى تحتية وخدمات قابلة للتوسع على سحابة أمازون (AWS)." },
        { name: "Docker", description: "تعبئة التطبيقات (Containerization) لضمان استقرار بيئات التشغيل." },
        { name: "CI/CD", description: "أتمتة مسارات الاختبار والنشر البرمجي لضمان إصدارات سريعة وموثوقة." }
      ] 
    }
  ],
  allSkills: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS Cloud", "DevOps", "Docker", "C++", "JavaScript", "TypeScript", "SQL", "Security", "Tailwind CSS"],
  projects: [
    {
      title: "مركز خدمة السيارات (Auto-Service-Hub)",
      description: "لوحة تحكم ويب متكاملة (Full-Stack) مخصصة لمراكز صيانة السيارات. تتميز بنظام مصادقة آمن باستخدام JWT وBcrypt، نماذج ديناميكية لحجز الخدمات باستخدام React Router وContext API، وواجهة مستخدم متجاوبة تعتمد على خطوط Orbitron وأيقونات Lucide. يعتمد النظام الخلفي على Node.js وExpress مع استخدام Mongoose لإدارة البيانات.",
      image: "https://images.unsplash.com/photo-1632733711679-529326f6db12?auto=format&fit=crop&q=80&w=800",
      tags: ["React.js", "Context API", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Web", "Backend", "Security"],
      link: "#",
      github: "https://github.com/sondosmohammed0100-cmyk",
      caseStudy: {
        problem: "كانت إدارة خدمات السيارات مشتتة، مما أدى إلى تضارب في المواعيد ونقص الشفافية مع العملاء.",
        solution: "هندسة لوحة تحكم متكاملة (Full-Stack) مع تتبع حي، وصول آمن عبر JWT، ونموذج بيانات NoSQL مرن.",
        impact: "تبسيط الكفاءة التشغيلية بنسبة 40% وبناء علاقة رقمية موثوقة مع العملاء."
      }
    },
    {
      title: "تطبيق عشاق الطعام (foodlover)",
      description: "تطبيق ويب للواجهات الأمامية يتميز بتصميم جذاب وسريع الاستجابة. تم تطويره باستخدام HTML5 وCSS3 لإبراز مهارات التنسيق واختيار الخطوط (Quicksand) واستخدام Font Awesome لتقديم تجربة مستخدم متميزة.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
      tags: ["HTML5", "CSS3", "Frontend", "UI/UX", "Web", "UX"],
      link: "#",
      github: "https://github.com/sondosmohammed0100-cmyk",
      caseStudy: {
        problem: "واجه المستخدمون صعوبة في العثور على تجربة بصرية عالية الجودة للمحتوى الغذائي تعمل بسلاسة على جميع الأجهزة.",
        solution: "تطبيق منهجية التصميم القائم على المنفعة مع التركيز المكثف على تدرج الخطوط وتحسين تحميل الموارد.",
        impact: "تحقيق درجة 95+ في مؤشرات أداء الويب وتوافق بنسبة 100% مع جميع المتصفحات الرئيسية."
      }
    },
    {
      title: "نظام إدارة الطلاب (Student Management System)",
      description: "تطبيق صلب موجه لسطر الأوامر مُصمم لإدارة سجلات الطلاب. تم تصميمه باستخدام لغة C++ ومكتبة القوالب القياسية (STL)، ويوضح المشروع إتقان مفاهيم البرمجة كائنية التوجه مثل التوريث (Inheritance) والكبسلة (Encapsulation).",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
      tags: ["C++", "OOP", "STL", "Software Engineering", "System", "Data"],
      link: "#",
      github: "https://github.com/sondosmohammed0100-cmyk",
      caseStudy: {
        problem: "إدارة مجموعات البيانات الكبيرة للطلاب غالباً ما تؤدي إلى اختناقات في الأداء وتسريب للذاكرة في البرامج التقليدية.",
        solution: "استغلال مكتبة القوالب القياسية (STL) وأنماط تصميم OOP لضمان تخصيص فعال للذاكرة واسترجاع البيانات بسرعة O(1).",
        impact: "تأسيس بنية تحتية قابلة للتوسع للسجلات الأكاديمية مع أداء خالٍ من تسريبات الذاكرة في محاكاة أحمال العمل العالية."
      }
    },
    {
      title: "مسار CI/CD السحابي",
      description: "هندسة مسار نشر مؤتمت بالكامل باستخدام AWS وDocker وGitHub Actions. يتضمن فحص الأمان والاختبار التلقائي لضمان نشر الخدمات المصغرة دون توقف.",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800",
      tags: ["AWS", "Docker", "GitHub Actions", "DevOps", "Automation"],
      link: "#",
      github: "https://github.com/sondosmohammed0100-cmyk",
      caseStudy: {
        problem: "عمليات النشر اليدوية كانت بطيئة ومعرضة للأخطاء، مما أدى إلى فترات توقف كبيرة خلال الإصدارات الرئيسية.",
        solution: "بناء مسار CI/CD مؤتمت بالكامل باستخدام GitHub Actions و Docker و AWS ECS لتحديثات سلسة بدون توقف.",
        impact: "تقليل وقت النشر من ساعات إلى دقائق والقضاء على الأخطاء البشرية أثناء التحديثات."
      }
    },
    {
      title: "واجهة برمجة تطبيقات المخزون الآمنة",
      description: "نظام خلفي قوي للمؤسسات مع نظام تحكم في الوصول قائم على الأدوار (RBAC). يتميز بالتحقق المتقدم من البيانات وتسجيل السجلات الشامل.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      tags: ["Node.js", "MongoDB", "Security", "Backend"],
      link: "#",
      github: "https://github.com/sondosmohammed0100-cmyk",
      caseStudy: {
        problem: "كانت واجهة برمجة تطبيقات المخزون القديمة تفتقر إلى تحكم دقيق في الوصول وكانت عرضة لهجمات القوة الغاشمة.",
        solution: "تنفيذ التحكم في الوصول القائم على الأدوار (RBAC)، ومصادقة JWT، وتحديد معدل الطلبات، وتسجيل السجلات الشامل.",
        impact: "تأمين نقاط النهاية للمؤسسة وتحقيق توافق بنسبة 100% مع عمليات التدقيق الأمني الداخلية."
      }
    },
    {
      title: "لوحة تحكم DevOps في الوقت الفعلي",
      description: "أداة مراقبة تعرض مقاييس صحة الخادم وسجلات التطبيق في الوقت الفعلي باستخدام Socket.io ومكتبات الرسوم البيانية عالية الأداء.",
      image: "/projects/devops-dashboard.png",
      tags: ["React.js", "Socket.io", "Data Viz", "DevOps", "UX"],
      link: "#",
      github: "https://github.com/sondosmohammed0100-cmyk",
      caseStudy: {
        problem: "افتقرت فرق DevOps إلى رؤية في الوقت الفعلي لصحة الخوادم، مما أدى إلى تأخير في الاستجابة للحوادث.",
        solution: "تطوير لوحة تحكم للمراقبة في الوقت الفعلي باستخدام React و Socket.io لبث المقاييس الحية وتصورها.",
        impact: "تقليل متوسط وقت الاستجابة للمشكلات (MTTR) بنسبة 50% من خلال توفير تنبيهات فورية ومقاييس صحة مرئية."
      }
    },
    {
      title: "محرك المهام عالي الأداء",
      description: "خدمة عامل غير متزامنة مصممة للتعامل مع الوظائف الخلفية كثيفة الموارد. تم تنفيذها باستخدام عمليات Node.js الفرعية وRedis.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      tags: ["Node.js", "Redis", "Architecture", "Backend", "Automation"],
      link: "#",
      github: "https://github.com/sondosmohammed0100-cmyk",
      caseStudy: {
        problem: "العمليات الخلفية الثقيلة كانت تحظر حلقة أحداث Node.js الرئيسية، مما يتسبب في مهلات الواجهة البرمجية للمستخدمين.",
        solution: "هندسة خدمة عاملة منفصلة باستخدام طوابير Redis والعمليات الفرعية للتعامل مع المهام الثقيلة بشكل غير متزامن.",
        impact: "استعادة أوقات استجابة الواجهة البرمجية إلى أقل من 100 مللي ثانية والسماح للمهام الخلفية بالتوسع بشكل مستقل."
      }
    },
    {
      title: "منصة التحليلات بدون خوادم (Serverless)",
      description: "منصة معالجة بيانات تعتمد على الأحداث باستخدام AWS Lambda وS3 وDynamoDB. تتعامل مع تدفقات بيانات عالية السرعة دون الحاجة لإدارة الخوادم.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
      tags: ["Serverless", "AWS Lambda", "Node.js", "DevOps", "Data"],
      link: "#",
      github: "https://github.com/sondosmohammed0100-cmyk",
      caseStudy: {
        problem: "معالجة الزيادات المتقطعة في تدفقات البيانات كانت تتطلب خوادم مفرطة التجهيز، مما أدى إلى ارتفاع التكاليف.",
        solution: "نقل محرك المعالجة إلى بنية تعتمد على الأحداث (Serverless) باستخدام AWS Lambda و DynamoDB.",
        impact: "خفض تكاليف البنية التحتية بنسبة 70% مع الحفاظ على القدرة على التعامل مع الزيادات المفاجئة في حركة المرور (10 أضعاف)."
      }
    },
    {
      title: "مكتبة البنية التحتية ككود (IaC)",
      description: "مجموعة من قوالب Terraform وCloudFormation القابلة لإعادة الاستخدام لنشر شبكات VPC وقواعد بيانات RDS مع أفضل ممارسات الأمان.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      tags: ["Terraform", "AWS", "IaC", "DevOps", "Automation"],
      link: "#",
      github: "https://github.com/sondosmohammed0100-cmyk",
      caseStudy: {
        problem: "كان إنشاء بيئات سحابية جديدة يدوياً غير متسق، غير موثق، وعرضة للانحراف في التكوين.",
        solution: "إنشاء مكتبة من قوالب Terraform القياسية لنشر شبكات VPC وقواعد بيانات ومجموعات خوادم آمنة.",
        impact: "تفعيل النشر التلقائي للبيئات بنقرة واحدة، وتقليل وقت الإعداد من أيام إلى دقائق مع اتساق بنسبة 100%."
      }
    }
  ],
  education: [
    {
      period: "ديسمبر 2025 — أغسطس 2026",
      degree: "مسار تطوير البرمجيات المعتمد على الذكاء الاصطناعي",
      institution: "مبادرة الرواد الرقميون (وزارة الاتصالات والأكاديمية العسكرية MTI)",
      description: "برنامج تدريبي مكثف استمر طيلة تسعة أشهر لتدريس تطوير البرمجيات المتقدمة ودمج الذكاء الاصطناعي في التطبيقات العملية. ركز المنهج على تطوير (Full Stack)، الأمن السيبراني، ونشر البنى التحتية على المنصات السحابية الحديثة.",
      highlights: [
        "أساسيات تطوير البرمجيات",
        "تطوير الواجهات الأمامية وتجربة المستخدم",
        "تطوير الأنظمة الخلفية وقواعد البيانات",
        "DevOps والحوسبة السحابية والذكاء الاصطناعي",
        "تطوير البرمجيات المتقدمة والأمن السيبراني",
        "مشروع تخرج Full-Stack",
        "AWS Cloud Practitioner",
        "AWS Developer Associate"
      ]
    },
    {
      period: "2017-2022",
      degree: "بكالوريوس الهندسة الطبية",
      institution: "جامعة المنوفية",
      description: "تخرجت في تخصص الهندسة الطبية الحيوية مع أساس قوي في تحليل الأنظمة المعقدة وحل المشكلات. ساعدتني هذه الخلفية الهندسية على الانتقال بكفاءة إلى مجال تطوير البرمجيات، حيث أركز حالياً على بناء أنظمة ذكية وقابلة للتوسع.",
      highlights: ["Analytical Thinking", "Research", "Complex Systems Analysis", "Scientific Method"]
    }
  ],
  certifications: [
    { name: "AWS Academy Cloud Operations", issuer: "AWS Academy", description: "التركيز على إدارة وتشغيل الأنظمة القابلة للتوسع والوفرة العالية على منصة AWS.", icon: "Cloud" },
    { name: "AWS Academy Cloud Developing", issuer: "AWS Academy", description: "إتقان تطوير التطبيقات السحابية الأصلية والبنى التحتية بدون خوادم (Serverless).", icon: "Terminal" },
    { name: "AWS Academy Cloud Foundations", issuer: "AWS Academy", description: "فهم شامل لمفاهيم سحابة AWS والأمان والخدمات الأساسية.", icon: "Shield" },
    { name: "Meta Frontend Developer", issuer: "Meta", description: "شهادة احترافية تغطي React.js ومبادئ UI/UX وتطوير الواجهات الأمامية الحديثة.", icon: "Code" }
  ],
  experience: [
    {
      period: "2025 — 2026",
      role: "زميل تطوير البرمجيات",
      company: "مبادرة رواد مصر الرقمية",
      description: "إتمام زمالة مكثفة في تطوير البرمجيات المعتمدة على الذكاء الاصطناعي. تضمنت هندسة ونشر تطبيقات ويب متكاملة (React/Node.js)، تنفيذ واجهات برمجية آمنة (JWT/Bcrypt)، واستكشاف البنية التحتية السحابية وممارسات DevOps.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "C++"]
    },
    {
      period: "2024 — الوقت الحالي",
      role: "مهندس برمجيات (عمل حر)",
      company: "تعاون استشاري مستقل",
      description: "تقديم خدمات تطوير تطبيقات ويب (Full Stack) واستشارات DevOps. تصميم أنظمة خلفية قابلة للتوسع، واجهات أمامية سريعة الاستجابة، وتأسيس مسارات CI/CD موثوقة لمشاريع العملاء.",
      technologies: ["React", "AWS", "Node.js", "Docker", "MongoDB"]
    }
  ]
};
