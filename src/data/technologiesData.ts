export interface TechnologyItem {
    name: string;
    description: string;
    category: 'Frontend' | 'Backend' | 'Mobile' | 'Database' | 'DevOps & Cloud' | 'AI';
    iconName: string;
    experience: string;
    tags: string[];
}

export const technologiesData: Record<string, TechnologyItem[]> = {
    Frontend: [
        {
            name: 'React',
            description: 'Component-based library for building reactive, high-performance web user interfaces.',
            category: 'Frontend',
            iconName: 'FaReact',
            experience: 'Enterprise & Production',
            tags: ['Hooks', 'Virtual DOM', 'State Management']
        },
        {
            name: 'Next.js',
            description: 'The premier React framework for hybrid static & server rendering, SEO, and edge routing.',
            category: 'Frontend',
            iconName: 'SiNextdotjs',
            experience: 'App Router / SSR',
            tags: ['SSR', 'SSG', 'Edge Runtime']
        },
        {
            name: 'TypeScript',
            description: 'Typed superset of JavaScript providing compile-time type safety and scalability.',
            category: 'Frontend',
            iconName: 'SiTypescript',
            experience: 'Strict Type System',
            tags: ['Type Safety', 'Interfaces', 'Generics']
        },
        {
            name: 'JavaScript',
            description: 'Modern ES6+ JavaScript power across client-side logic and asynchronous architectures.',
            category: 'Frontend',
            iconName: 'SiJavascript',
            experience: 'ES2024 Standards',
            tags: ['Async/Await', 'DOM APIs', 'Event Loop']
        },
        {
            name: 'HTML5',
            description: 'Semantic markup creating accessible, SEO-optimized, and compliant page structures.',
            category: 'Frontend',
            iconName: 'SiHtml5',
            experience: 'Semantic & A11y',
            tags: ['Semantics', 'Accessibility', 'SEO']
        },
        {
            name: 'CSS3',
            description: 'Modern styling utilizing custom properties, Flexbox, CSS Grid, and GPU-accelerated animations.',
            category: 'Frontend',
            iconName: 'SiCss3',
            experience: 'Modern CSS & Animations',
            tags: ['CSS Grid', 'Variables', 'Keyframes']
        },
        {
            name: 'Tailwind CSS',
            description: 'Utility-first styling framework enabling rapid design system implementation.',
            category: 'Frontend',
            iconName: 'SiTailwindcss',
            experience: 'Design Systems',
            tags: ['Utility CSS', 'Responsive', 'JIT Engine']
        },
        {
            name: 'Bootstrap',
            description: 'Responsive mobile-first component framework for rapid portal prototyping.',
            category: 'Frontend',
            iconName: 'SiBootstrap',
            experience: 'Responsive Grid',
            tags: ['Grid', 'Components', 'Responsive']
        }
    ],

    Backend: [
        {
            name: 'Node.js',
            description: 'Event-driven, asynchronous JavaScript runtime built on Chrome\'s V8 engine.',
            category: 'Backend',
            iconName: 'FaNodeJs',
            experience: 'High Concurrency',
            tags: ['Event-Loop', 'Non-blocking I/O', 'NPM']
        },
        {
            name: 'Express.js',
            description: 'Minimalist and flexible Node.js web application framework for building RESTful APIs.',
            category: 'Backend',
            iconName: 'SiExpress',
            experience: 'RESTful Microservices',
            tags: ['Middleware', 'Routing', 'REST APIs']
        },
        {
            name: 'Java',
            description: 'Robust, object-oriented language engineered for high-throughput enterprise systems.',
            category: 'Backend',
            iconName: 'FaJava',
            experience: 'Enterprise Platforms',
            tags: ['JVM', 'Multithreading', 'OOP']
        },
        {
            name: 'Spring Boot',
            description: 'Production-ready framework for creating standalone, production-grade Spring applications.',
            category: 'Backend',
            iconName: 'SiSpringboot',
            experience: 'Enterprise Microservices',
            tags: ['Microservices', 'Spring Data', 'Security']
        }
    ],

    Mobile: [
        {
            name: 'React Native',
            description: 'Cross-platform mobile framework compiling to native iOS and Android components.',
            category: 'Mobile',
            iconName: 'FaReact',
            experience: 'iOS & Android Native',
            tags: ['Cross-Platform', 'Native Modules', '60 FPS UI']
        }
    ],

    Database: [
        {
            name: 'MongoDB',
            description: 'Document-oriented NoSQL database engineered for flexible schemas and scale.',
            category: 'Database',
            iconName: 'SiMongodb',
            experience: 'Aggregation & Clustering',
            tags: ['NoSQL', 'Document DB', 'Replication']
        },
        {
            name: 'MySQL',
            description: 'Reliable, ACID-compliant relational database management system for structured data.',
            category: 'Database',
            iconName: 'SiMysql',
            experience: 'Relational & Indexing',
            tags: ['ACID', 'SQL', 'Complex Joins']
        }
    ],

    'DevOps & Cloud': [
        {
            name: 'Git',
            description: 'Distributed version control system tracking changes in source code during development.',
            category: 'DevOps & Cloud',
            iconName: 'FaGitAlt',
            experience: 'GitFlow & Trunk-Based',
            tags: ['Branching', 'Rebase', 'Version Control']
        },
        {
            name: 'GitHub',
            description: 'Cloud platform for code hosting, collaborative review, and GitHub Actions CI/CD.',
            category: 'DevOps & Cloud',
            iconName: 'FaGithub',
            experience: 'CI/CD & Governance',
            tags: ['Pull Requests', 'Issues', 'Security Alerts']
        },
        {
            name: 'Docker',
            description: 'Container platform packaging apps and dependencies into standardized lightweight images.',
            category: 'DevOps & Cloud',
            iconName: 'FaDocker',
            experience: 'Containerization',
            tags: ['Containers', 'Images', 'Multi-stage']
        },
        {
            name: 'CI/CD Pipelines',
            description: 'Automated continuous integration and continuous deployment pipelines for zero-downtime releases.',
            category: 'DevOps & Cloud',
            iconName: 'SiGithubactions',
            experience: 'Automated Releases',
            tags: ['Automated Tests', 'Staging Deployments', 'Linting']
        },
        {
            name: 'Cloud Platforms',
            description: 'Cloud hosting architectures across AWS, Microsoft Azure, and Google Cloud Platform.',
            category: 'DevOps & Cloud',
            iconName: 'FaCloud',
            experience: 'Multi-Cloud Architecture',
            tags: ['AWS', 'Azure', 'GCP']
        }
    ],

    AI: [
        {
            name: 'AI APIs',
            description: 'Integration of LLMs including OpenAI, Claude, and Gemini into commercial software workflows.',
            category: 'AI',
            iconName: 'SiOpenai',
            experience: 'LLM Orchestration',
            tags: ['OpenAI', 'Gemini', 'Embeddings']
        },
        {
            name: 'Machine Learning Integrations',
            description: 'Connecting predictive machine learning models, vector databases, and real-time inference.',
            category: 'AI',
            iconName: 'SiTensorflow',
            experience: 'Vector Search & Inference',
            tags: ['Vector DBs', 'RAG', 'Predictive Models']
        },
        {
            name: 'AI-Powered Automation',
            description: 'Autonomous agents, workflow triggers, and intelligent document data extraction.',
            category: 'AI',
            iconName: 'FaRobot',
            experience: 'Autonomous Workflows',
            tags: ['Agents', 'OCR Processing', 'Automated Triage']
        }
    ]
};
