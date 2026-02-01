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
        title: 'Humana HRIS UI',
        description: 'Modern React dashboard for managing human resources with real-time data visualization and user management.',
        technologies: ['React', 'TypeScript', 'ShadCN UI'],
        status: 'In Progress',
        featured: true,
        demo: 'https://humana-hris.vercel.app/',
        github: 'https://github.com/dextermontero/hris-ui'
    },
    {
        title: 'Projects Monitoring API',
        description: 'RESTful API for monitoring and managing project workflows with real-time updates and WebSocket support.',
        technologies: ['Node.js', 'Express', 'JWT', 'MongoDB', 'WebSocket'],
        status: 'In Progress',
        featured: true,
        demo: 'https://api-projects-monitoring.onrender.com/docs/',
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