import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DynamicPageData } from '../../types/dynamicPage';
import Contact from '../Contact';
import '../../Styles/DynamicPageLayout.css';
import { 
  HiOutlineCheckCircle, 
  HiOutlineArrowRight, 
  HiOutlineChevronRight,
  HiOutlineSparkles,
  HiOutlineCube,
  HiOutlineShieldCheck,
  HiOutlineLightningBolt
} from 'react-icons/hi';

interface DynamicPageLayoutProps {
  data: DynamicPageData;
}

export const DynamicPageLayout: React.FC<DynamicPageLayoutProps> = ({ data }) => {
  return (
    <div className="dynamic-page">
      {/* 1. Dynamic Hero & Breadcrumb */}
      <section className="dynamic-hero-section">
        <div className="dynamic-hero-glow"></div>
        <div className="dynamic-hero-glow-secondary"></div>

        <div className="dynamic-hero-container">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="dynamic-breadcrumb">
            <Link to="/" className="dynamic-breadcrumb-link">Home</Link>
            <HiOutlineChevronRight className="dynamic-breadcrumb-separator" />
            <span className="dynamic-breadcrumb-link">{data.category}</span>
            <HiOutlineChevronRight className="dynamic-breadcrumb-separator" />
            <span className="dynamic-breadcrumb-current">{data.title}</span>
          </nav>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="dynamic-category-badge">
              <HiOutlineSparkles /> {data.category} Solution
            </span>
          </motion.div>

          {/* Main Title & Subtitle */}
          <motion.h1
            className="dynamic-hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {data.title}
          </motion.h1>

          <motion.p
            className="dynamic-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {data.subtitle}
          </motion.p>

          <motion.p
            className="dynamic-hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {data.description}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            className="dynamic-hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <a href="#contact" className="dynamic-btn-primary">
              Get Started <HiOutlineArrowRight />
            </a>
            <a
              href="https://wa.me/917558163869/"
              target="_blank"
              rel="noopener noreferrer"
              className="dynamic-btn-secondary"
            >
              Contact Us
            </a>
          </motion.div>

          {/* Highlights Tag Bar */}
          {data.highlights && data.highlights.length > 0 && (
            <motion.div
              className="dynamic-highlights-bar"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {data.highlights.map((item, idx) => (
                <div key={idx} className="dynamic-highlight-tag">
                  <HiOutlineCheckCircle className="text-indigo-400" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* 2. Overview Section */}
      {data.overview && (
        <section className="dynamic-section">
          <div className="dynamic-overview-grid">
            <div className="dynamic-overview-content">
              <div className="dynamic-section-tag">Overview</div>
              <h3>{data.overview.heading}</h3>
              {data.overview.text.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {data.overview.stats && data.overview.stats.length > 0 && (
              <div className="dynamic-overview-stats">
                {data.overview.stats.map((stat, idx) => (
                  <div key={idx} className="dynamic-stat-card">
                    <div className="dynamic-stat-value">{stat.value}</div>
                    <div className="dynamic-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* 3. What We Provide / Capabilities */}
      {data.whatWeProvide && data.whatWeProvide.length > 0 && (
        <section className="dynamic-section-alt">
          <div className="dynamic-section">
            <div className="dynamic-section-header">
              <div className="dynamic-section-tag">Key Offerings</div>
              <h2 className="dynamic-section-title">What We Provide</h2>
              <p className="dynamic-section-description">
                Tailored digital solutions engineered for reliability, enterprise velocity, and measurable business outcomes.
              </p>
            </div>

            <div className="dynamic-cards-grid">
              {data.whatWeProvide.map((card, idx) => (
                <div key={idx} className="dynamic-card">
                  <div className="dynamic-card-icon-wrapper">
                    {idx % 3 === 0 ? <HiOutlineCube /> : idx % 3 === 1 ? <HiOutlineShieldCheck /> : <HiOutlineLightningBolt />}
                  </div>
                  <h3 className="dynamic-card-title">{card.title}</h3>
                  <p className="dynamic-card-description">{card.description}</p>
                  {card.points && card.points.length > 0 && (
                    <ul className="dynamic-card-points">
                      {card.points.map((pt, pIdx) => (
                        <li key={pIdx} className="dynamic-card-point">
                          <span className="dynamic-card-point-bullet">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Our Approach Process */}
      {data.approach && data.approach.length > 0 && (
        <section className="dynamic-section">
          <div className="dynamic-section-header">
            <div className="dynamic-section-tag">Methodology</div>
            <h2 className="dynamic-section-title">Our Approach</h2>
            <p className="dynamic-section-description">
              A structured execution model from discovery to production deployment.
            </p>
          </div>

          <div className="dynamic-process-grid">
            {data.approach.map((step, idx) => (
              <div key={idx} className="dynamic-process-card">
                <div className="dynamic-process-step">{step.step}</div>
                <h3 className="dynamic-process-title">{step.title}</h3>
                <p className="dynamic-process-desc">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. Technology / Capabilities Stack */}
      {data.technologies && data.technologies.length > 0 && (
        <section className="dynamic-section-alt">
          <div className="dynamic-section">
            <div className="dynamic-section-header">
              <div className="dynamic-section-tag">Tech Stack</div>
              <h2 className="dynamic-section-title">Technologies & Capabilities</h2>
              <p className="dynamic-section-description">
                Modern tools, robust frameworks, and scalable cloud stacks we leverage for this domain.
              </p>
            </div>

            <div className="dynamic-tech-grid">
              {data.technologies.map((tech, idx) => (
                <div key={idx} className="dynamic-tech-pill">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Why Choose Us */}
      {data.whyChooseUs && data.whyChooseUs.length > 0 && (
        <section className="dynamic-section">
          <div className="dynamic-section-header">
            <div className="dynamic-section-tag">Why Us</div>
            <h2 className="dynamic-section-title">Why Choose Infinite Wave Tech</h2>
            <p className="dynamic-section-description">
              We blend engineering rigor with strategic insights to deliver sustainable software value.
            </p>
          </div>

          <div className="dynamic-why-grid">
            {data.whyChooseUs.map((item, idx) => (
              <div key={idx} className="dynamic-why-card">
                <div className="dynamic-why-number">0{idx + 1}</div>
                <h3 className="dynamic-why-title">{item.title}</h3>
                <p className="dynamic-why-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 7. Call To Action Banner */}
      <section className="px-4">
        <div className="dynamic-cta-section">
          <div className="dynamic-cta-glow"></div>
          <div className="dynamic-cta-content">
            <h2 className="dynamic-cta-title">Let's Build Something Together</h2>
            <p className="dynamic-cta-desc">
              Have a project or need strategic IT leadership? Connect with our team today and transform your vision into reality.
            </p>
            <div className="dynamic-cta-buttons">
              <a href="#contact" className="dynamic-btn-primary">
                Get In Touch <HiOutlineArrowRight />
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

      {/* 8. Existing Contact Section */}
      <Contact />
    </div>
  );
};

export default DynamicPageLayout;
