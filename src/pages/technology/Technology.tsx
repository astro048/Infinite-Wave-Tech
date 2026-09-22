import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { technologiesData, TechnologyItem } from '../../data/technologiesData';
import Contact from '../../components/Contact';
import '../../styles/Technology.css';
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaCloud,
  FaRobot,
  FaCss3Alt,
  FaBrain
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiGithubactions,
  SiTensorflow
} from 'react-icons/si';
import { HiOutlineSparkles, HiOutlineChevronRight, HiOutlineArrowRight } from 'react-icons/hi';

const iconMap: Record<string, React.ReactElement> = {
  FaReact: <FaReact />,
  SiNextdotjs: <SiNextdotjs />,
  SiTypescript: <SiTypescript />,
  SiJavascript: <SiJavascript />,
  SiHtml5: <SiHtml5 />,
  SiCss3: <FaCss3Alt />,
  SiTailwindcss: <SiTailwindcss />,
  SiBootstrap: <SiBootstrap />,
  FaNodeJs: <FaNodeJs />,
  SiExpress: <SiExpress />,
  FaJava: <FaJava />,
  SiSpringboot: <SiSpringboot />,
  SiMongodb: <SiMongodb />,
  SiMysql: <SiMysql />,
  FaGitAlt: <FaGitAlt />,
  FaGithub: <FaGithub />,
  FaDocker: <FaDocker />,
  SiGithubactions: <SiGithubactions />,
  FaCloud: <FaCloud />,
  SiOpenai: <FaBrain />,
  SiTensorflow: <SiTensorflow />,
  FaRobot: <FaRobot />
};

const Technology: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Object.keys(technologiesData)];

  const filteredCategories = selectedCategory === 'All'
    ? Object.keys(technologiesData)
    : [selectedCategory];

  return (
    <div className="tech-showcase-page">
      {/* Hero */}
      <section className="tech-showcase-hero">
        <div className="dynamic-hero-glow"></div>
        <div className="dynamic-hero-glow-secondary"></div>

        <div className="tech-showcase-container">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="dynamic-breadcrumb">
            <Link to="/" className="dynamic-breadcrumb-link">Home</Link>
            <HiOutlineChevronRight className="dynamic-breadcrumb-separator" />
            <span className="dynamic-breadcrumb-current">Technology Used</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="dynamic-category-badge">
              <HiOutlineSparkles /> Engineering & Tooling
            </span>
          </motion.div>

          <motion.h1
            className="dynamic-hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Technologies Used
          </motion.h1>

          <motion.p
            className="dynamic-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Modern frameworks, battle-tested cloud platforms, and AI tools powering our solutions.
          </motion.p>

          <motion.p
            className="dynamic-hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We hand-pick leading frontend engines, resilient backend runtimes, scalable database clusters, automated CI/CD pipelines, and enterprise AI integrations to build high-performance, future-proof digital applications.
          </motion.p>

          <motion.div
            className="dynamic-hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <a href="#contact" className="dynamic-btn-primary">
              Build With Our Stack <HiOutlineArrowRight />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Main Interactive Showcase */}
      <section className="dynamic-section">
        {/* Filter Navigation */}
        <div className="tech-categories-nav">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tech-cat-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categories & Cards */}
        {filteredCategories.map((category) => {
          const items: TechnologyItem[] = technologiesData[category] || [];

          return (
            <div key={category} className="tech-category-group">
              <div className="tech-group-header">
                <h2 className="tech-group-title">{category}</h2>
                <span className="tech-group-count">{items.length} Technologies</span>
              </div>

              <div className="tech-cards-grid">
                {items.map((tech) => (
                  <div key={tech.name} className="tech-card-interactive">
                    <div className="tech-card-top">
                      <div className="tech-icon-box">
                        {iconMap[tech.iconName] || <FaReact />}
                      </div>
                      <span className="tech-exp-badge">{tech.experience}</span>
                    </div>

                    <h3 className="tech-card-name">{tech.name}</h3>
                    <p className="tech-card-desc">{tech.description}</p>

                    <div className="tech-card-tags">
                      {tech.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="tech-tag-pill">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA Section */}
      <section className="px-4">
        <div className="dynamic-cta-section">
          <div className="dynamic-cta-glow"></div>
          <div className="dynamic-cta-content">
            <h2 className="dynamic-cta-title">Ready to build your next project?</h2>
            <p className="dynamic-cta-desc">
              Leverage our modern engineering stack for lightning-fast, highly scalable software.
            </p>
            <div className="dynamic-cta-buttons">
              <a href="#contact" className="dynamic-btn-primary">
                Consult With Engineers <HiOutlineArrowRight />
              </a>
              <a
                href="https://wa.me/917558163869/"
                target="_blank"
                rel="noopener noreferrer"
                className="dynamic-btn-secondary"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Existing Contact Section */}
      <Contact />
    </div>
  );
};

export default Technology;
