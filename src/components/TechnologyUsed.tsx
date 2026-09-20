import React from 'react';
import '../Styles/TechnologyUsed.css';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiMongodb, SiTailwindcss, SiTypescript } from 'react-icons/si';

const technologies = [
  {
    id: 1,
    name: 'React',
    description: 'A powerful JavaScript library for building user interfaces.',
    category: 'Frontend',
    iconClass: 'react',
    icon: <FaReact />
  },
  {
    id: 2,
    name: 'Next.js',
    description: 'The React framework for production-ready web apps.',
    category: 'Frontend / Fullstack',
    iconClass: 'nextjs',
    icon: <SiNextdotjs />
  },
  {
    id: 3,
    name: 'Node.js',
    description: 'A JavaScript runtime built on Chrome\'s V8 engine.',
    category: 'Backend',
    iconClass: 'nodejs',
    icon: <FaNodeJs />
  },
  {
    id: 4,
    name: 'Express.js',
    description: 'Fast, unopinionated web framework for Node.js.',
    category: 'Backend',
    iconClass: 'express',
    icon: <SiExpress />
  },
  {
    id: 5,
    name: 'MongoDB',
    description: 'A flexible, scalable NoSQL database.',
    category: 'Database',
    iconClass: 'mongodb',
    icon: <SiMongodb />
  },
  {
    id: 6,
    name: 'Tailwind CSS',
    description: 'A utility-first CSS framework for modern designs.',
    category: 'Styling',
    iconClass: 'tailwindcss',
    icon: <SiTailwindcss />
  },
  {
    id: 7,
    name: 'TypeScript',
    description: 'A strongly typed programming language that builds on JS.',
    category: 'Language',
    iconClass: 'typescript',
    icon: <SiTypescript />
  },
  {
    id: 8,
    name: 'React Native',
    description: 'A framework for building native apps using React.',
    category: 'Mobile',
    iconClass: 'reactnative',
    icon: <FaReact />
  }
];

const TechnologyUsed: React.FC = () => {
  return (
    <div className="tech-container">
      <div className="tech-header">
        <h2 className="tech-title">
          <span className="text-blue-500">&lt;/&gt;</span>
          Technologies <span className="tech-title-highlight">Used</span>
        </h2>
        <p className="tech-subtitle">Modern tools & technologies I work with</p>
      </div>

      <div className="tech-marquee-wrapper">
        <div className="tech-marquee">
          {technologies.map((tech) => (
            <div key={tech.id} className={`tech-card ${tech.iconClass}`}>
              <div className="tech-icon">
                {tech.icon}
              </div>
              <h3 className="tech-name">{tech.name}</h3>
              <p className="tech-desc">{tech.description}</p>
              <div className="tech-tag">
                {tech.category} &rarr;
              </div>
            </div>
          ))}
        </div>
        <div className="tech-marquee" aria-hidden="true">
          {technologies.map((tech) => (
            <div key={`${tech.id}-dup`} className={`tech-card ${tech.iconClass}`}>
              <div className="tech-icon">
                {tech.icon}
              </div>
              <h3 className="tech-name">{tech.name}</h3>
              <p className="tech-desc">{tech.description}</p>
              <div className="tech-tag">
                {tech.category} &rarr;
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyUsed;
