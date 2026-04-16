export interface Project {
    title: string
    description: string
    technologies: string[]
    status?: 'In Progress' | 'Completed'
    demo?: string
    github?: string
    featured?: boolean
}

export const projects: Project[] = [
    {
        title: 'Autovault Motors',
        description: 'Built a modern car dealership SPA with a public storefront featuring a hero slider, filterable vehicle catalog, and reservation flow — paired with a full admin dashboard for managing inventory, hero slides, categories, and reservations, with PIN-based auth and real-time API integration.',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion', 'Zustand', 'Axios', 'React Hook Form', 'Zod', 'Vite'],
        status: 'Completed',
        featured: true,
        demo: 'https://autovault-motors.vercel.app/',
        github: 'https://github.com/dextermontero/autovault'
    },
    {
        title: 'AutoVault Motors API',
        description: 'Built a production-ready REST API powering a car dealership platform, featuring multi-database support (MongoDB, SQLite, MySQL) via a repository pattern, full CRUD for inventory and reservations, Zod-validated endpoints, and OpenAPI docs—deployed on Vercel with AI-assisted development.',
        technologies: ['Fastify', 'TypeScript', 'Drizzle ORM', 'MongoDB', 'Zod', 'Node.js', 'Vercel'],
        status: 'Completed',
        featured: true,
        demo: 'https://autovault-api.vercel.app/api',
        github: 'https://github.com/dextermontero/autovault-api'
    },
    {
        title: 'CSV Data Visualizer',
        description: 'Developed a modern React-based dashboard that transforms CSV data into interactive visualizations, featuring dynamic chart rendering, real-time state management with Zustand, and export functionality—built with a focus on performance and usability, with AI-assisted development.',
        technologies: ['React', 'TailwindCSS', 'ShadCN UI', 'Zustand', 'Recharts', 'html2canvas'],
        status: 'Completed',
        featured: true,
        demo: 'https://data-visualizer-flax.vercel.app/',
        github: 'https://github.com/dextermontero/data-visualizer'
    },
    {
        title: 'Humana HRIS API',
        description: 'RESTful API for Modern React dashboard for managing human resources with real-time data visualization and user management.',
        technologies: ['Node.js', 'Express API', 'JWT', 'MongoDB', 'TypeScript', 'Swagger UI', 'Redis'],
        status: 'In Progress',
        featured: true,
        demo: 'https://humana-api.vercel.app/docs',
        github: 'https://github.com/dextermontero/hris-api'
    },
    {
        title: 'Humana HRIS UI',
        description: 'Modern React dashboard for managing human resources with real-time data visualization and user management.',
        technologies: ['React', 'TypeScript', 'ShadCN UI', 'Tailwind CSS'],
        status: 'In Progress',
        featured: true,
        demo: 'https://humana-hris.vercel.app/',
        github: 'https://github.com/dextermontero/hris-ui'
    },
    {
        title: 'Projects Monitoring API',
        description: 'RESTful API for monitoring and managing project workflows with real-time updates',
        technologies: ['Node.js', 'Express API', 'JWT', 'MongoDB', 'JavaScript', 'Swagger UI', 'Redis'],
        status: 'In Progress',
        featured: true,
        demo: 'https://projects-monitoring-api.vercel.app/docs',
        github: 'https://github.com/dextermontero/projects-monitoring-api'
    },
    {
        title: 'Projects Monitoring UI',
        description: 'Modern React dashboard for monitoring projects with real-time data visualization and user management.',
        technologies: ['React', 'TypeScript', 'ShadCN UI', 'Supabase'],
        status: 'In Progress',
        featured: true,
        demo: 'https://projects-monitoring.vercel.app/',
        github: 'https://github.com/dextermontero/projects-monitoring-ui'
    },
    {
        title: 'Kanban Board',
        description: 'Full-featured Kanban application with drag-and-drop functionality, user roles, and real-time collaboration.',
        technologies: ['Laravel', 'Tailwind CSS', 'AJAX', 'JavaScript', 'PostgreSQL'],
        featured: true,
        github: 'https://github.com/dextermontero/Kanban'
    },
    {
        title: 'JobSearch Platform',
        description: 'Job search and application tracking system with advanced filters and notifications.',
        technologies: ['Laravel', 'Tailwind CSS', 'PostgreSQL'],
        featured: true,
        github: 'https://github.com/dextermontero/jobSearc'
    },
    {
        title: 'Set Nickname Bot',
        description: 'Discord bot for managing user nicknames with permission-based controls.',
        technologies: ['Discord', 'Python'],
        github: 'https://github.com/dextermontero/setnickname-discord-bot'
    },
    {
        title: 'Blind Stick Navigator',
        description: 'IoT device combining ultrasonic sensors, GPS, GSM modules for navigation assistance.',
        technologies: ['Arduino', 'Ultrasonic Sensor', 'GSM Module', 'GPS', 'Buzzer'],
        github: 'https://github.com/dextermontero/Ardiuno/tree/main/blind_stick_navigation'
    },
    {
        title: 'Veterinarian Appointment System',
        description: 'Complete pet care and appointment management system with online payments and video consultation.',
        technologies: ['PHP', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'MySQL', 'GCash API', 'Zoom SDK'],
        featured: true,
        github: 'https://github.com/dextermontero/Capstone-Project'
    },
    {
        title: 'QCU Administrator Management',
        description: 'Windows desktop application for managing administrative functions.',
        technologies: ['Visual Basic', 'MySQL'],
        github: 'https://github.com/dextermontero/Visual-Studio/tree/main/Payroll%20and%20Time%20Keeper/QCU_Administrator'
    },
    {
        title: 'QCU Attendance Management',
        description: 'Windows desktop application for managing attendance functions.',
        technologies: ['Visual Basic', 'MySQL'],
        github: 'https://github.com/dextermontero/Visual-Studio/tree/main/Payroll%20and%20Time%20Keeper/QCU_Attendance'
    }
]