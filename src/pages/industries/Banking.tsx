import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Contact from '../../components/Contact';
import '../../styles/Banking.css';
import {
  HiOutlineCreditCard,
  HiOutlineShieldCheck,
  HiOutlineOfficeBuilding,
  HiOutlineLightningBolt,
  HiOutlineLockClosed,
  HiOutlineDeviceMobile,
  HiOutlineCode,
  HiOutlineDatabase,
  HiOutlineSparkles,
  HiOutlineChartPie,
  HiOutlineUserGroup
} from 'react-icons/hi';

const Banking: React.FC = () => {
  return (
    <div className="banking-page-layout">
      {/* 1. Hero Section */}
      <section className="b-hero">
        <img
          src="https://www.jurisiti.com/wp-content/uploads/2025/05/Banking-and-Financial-Services.jpeg"
          alt="Banking and Financial Executives"
          className="b-hero-bg"
          onError={(e) => {
            // graceful fallback if image fails to render
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        <div className="b-hero-overlay"></div>

        <div className="b-container">
          <div className="b-hero-content">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="b-pill-badge">Industries</span>
            </motion.div>

            <motion.h1
              className="b-hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Banking and Financial
            </motion.h1>

            <motion.p
              className="b-hero-desc"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              We help banking institutions modernize their technology infrastructure with secure, scalable, and compliant financial solutions built for today's digital economy.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Overview Section (4 Cards Grid) */}
      <section className="b-overview-section">
        <div className="b-container">
          <div className="b-overview-header">
            <span className="b-pill-badge b-pill-badge-light">Overview</span>
            <h2 className="b-overview-title">
              Transforming Banking with Scalable, Secure IT Solutions
            </h2>
            <p className="b-overview-lead">
              Our IT and consulting services for the financial sector modernize core systems, bolster cybersecurity, and build future-proof infrastructure so institutions stay compliant and securely scale their services.
            </p>
          </div>

          <div className="b-grid-4">
            <div className="b-overview-card">
              <h3 className="b-card-title">Core Banking Systems</h3>
              <p className="b-card-desc">
                Modernize core software platforms with robust microservices architectures, reliable real-time transaction processing, and automated ledger balancing.
              </p>
            </div>

            <div className="b-overview-card">
              <h3 className="b-card-title">Mobile Banking Applications</h3>
              <p className="b-card-desc">
                Deliver seamless, intuitive, and responsive customer-facing portals with biometrics, instant payments, and round-the-clock financial services.
              </p>
            </div>

            <div className="b-overview-card">
              <h3 className="b-card-title">Cybersecurity Solutions</h3>
              <p className="b-card-desc">
                Implement banking-grade security with multi-factor authentication, encryption, continuous zero-trust monitoring, and regulatory compliance protocols.
              </p>
            </div>

            <div className="b-overview-card">
              <h3 className="b-card-title">Data Management</h3>
              <p className="b-card-desc">
                Harness financial data into centralized pipelines and lakes for real-time reporting, predictive auditing, and automated reconciliations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Industry Sectors We Served (Dark Section with 3 Sector Image Cards) */}
      <section className="b-sectors-section">
        <div className="b-container">
          <div className="b-sectors-header-row">
            <div className="b-sectors-title-block">
              <span className="b-pill-badge">Sectors</span>
              <h2 className="b-sectors-title">
                The industry sectors we served include
              </h2>
              <p className="b-sectors-lead">
                From retail to investment banking, we deliver secure, scalable software solutions tailored to every level of the banking ecosystem—strengthening operations, compliance, and growth.
              </p>
            </div>

            <div className="b-sectors-actions">
              <Link to="/services/custom-software" className="b-btn-dark-outline">
                View All Solutions
              </Link>
              <a href="#contact" className="b-btn-accent">
                Contact Us
              </a>
            </div>
          </div>

          <div className="b-sectors-grid">
            {/* Sector 1: Retail Banking */}
            <div className="b-sector-card">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800"
                alt="Retail Banking"
                className="b-sector-bg-img"
              />
              <div className="b-sector-overlay"></div>
              <div className="b-sector-icon-floating">
                <HiOutlineDeviceMobile />
              </div>
              <div className="b-sector-card-content">
                <h3 className="b-sector-card-title">Retail Banking</h3>
                <p className="b-sector-card-desc">
                  Enhance customer experiences and streamline branch operations with modern, user-centric next-gen banking platforms.
                </p>
              </div>
            </div>

            {/* Sector 2: Cards and Payments */}
            <div className="b-sector-card">
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800"
                alt="Cards and Payments"
                className="b-sector-bg-img"
              />
              <div className="b-sector-overlay"></div>
              <div className="b-sector-icon-floating">
                <HiOutlineCreditCard />
              </div>
              <div className="b-sector-card-content">
                <h3 className="b-sector-card-title">Cards and Payments</h3>
                <p className="b-sector-card-desc">
                  Enable secure transactions, mobile wallet integration, and real-time fraud detection with agile payment infrastructure.
                </p>
              </div>
            </div>

            {/* Sector 3: Corporate Banking */}
            <div className="b-sector-card">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
                alt="Corporate Banking"
                className="b-sector-bg-img"
              />
              <div className="b-sector-overlay"></div>
              <div className="b-sector-icon-floating">
                <HiOutlineOfficeBuilding />
              </div>
              <div className="b-sector-card-content">
                <h3 className="b-sector-card-title">Corporate Banking</h3>
                <p className="b-sector-card-desc">
                  Optimize cash management, trade finance, and corporate portals with intelligent, custom banking software.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Benefits / Services (4 Cards with Green/Theme Accent Circle Icons) */}
      <section className="b-benefits-section">
        <div className="b-container">
          <div className="b-benefits-header">
            <span className="b-pill-badge b-pill-badge-light">Benefits & Services</span>
            <h2 className="b-benefits-title">
              Our clients are able to increase end-user productivity without sacrificing usability.
            </h2>
          </div>

          <div className="b-benefits-grid">
            <div className="b-benefit-card">
              <div className="b-benefit-icon-box">
                <HiOutlineLightningBolt />
              </div>
              <h3 className="b-benefit-title">Business Agility</h3>
              <p className="b-benefit-desc">
                Help institutions adapt to rapid market changes through agile deployment, cloud scalability, and continuous integration.
              </p>
            </div>

            <div className="b-benefit-card">
              <div className="b-benefit-icon-box">
                <HiOutlineShieldCheck />
              </div>
              <h3 className="b-benefit-title">Security and Compliance</h3>
              <p className="b-benefit-desc">
                Protect customer financial data with advanced security layers that exceed strict regional regulatory standards.
              </p>
            </div>

            <div className="b-benefit-card">
              <div className="b-benefit-icon-box">
                <HiOutlineLockClosed />
              </div>
              <h3 className="b-benefit-title">Offline Usability</h3>
              <p className="b-benefit-desc">
                Enable secure, encrypted offline access to critical workflows with automatic synchronization when reconnected.
              </p>
            </div>

            <div className="b-benefit-card">
              <div className="b-benefit-icon-box">
                <HiOutlineCode />
              </div>
              <h3 className="b-benefit-title">Application Development</h3>
              <p className="b-benefit-desc">
                Build robust, compliant banking software through tailored, high-velocity engineering engineered for long-term scalability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Advisory / 3 Key Areas Section */}
      {/* <section className="b-advisory-section">
        <div className="b-container">
          <div className="b-advisory-grid">
            <div className="b-advisory-left">
              <span className="b-pill-badge b-pill-badge-light">Advisory</span>
              <h2 className="b-advisory-title">
                Transform your technology by focusing on 3 key areas
              </h2>
              <p className="b-advisory-desc">
                From cloud transition to automation, we provide holistic advisory and execution across core business drivers.
              </p>
            </div>

            <div className="b-advisory-list">
              <div className="b-advisory-item">
                <div className="b-advisory-icon-circle">
                  <HiOutlineDatabase />
                </div>
                <div>
                  <h3 className="b-advisory-item-title">Data Transformation</h3>
                  <p className="b-advisory-item-desc">
                    Connect software with enterprise financial intelligence, automated compliance checks, and real-time streaming pipelines.
                  </p>
                </div>
              </div>

              <div className="b-advisory-item">
                <div className="b-advisory-icon-circle">
                  <HiOutlineSparkles />
                </div>
                <div>
                  <h3 className="b-advisory-item-title">Digital Enablement</h3>
                  <p className="b-advisory-item-desc">
                    Modernize legacy banking processes to accelerate team productivity, empower front-office staff, and reduce friction for end users.
                  </p>
                </div>
              </div>

              <div className="b-advisory-item">
                <div className="b-advisory-icon-circle">
                  <HiOutlineChartPie />
                </div>
                <div>
                  <h3 className="b-advisory-item-title">Innovation Partnership</h3>
                  <p className="b-advisory-item-desc">
                    Collaborate with dedicated technical teams that align engineering velocity, system reliability, and long-term business goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* 5. Advisory / Key Areas Section */}
      <section className="b-advisory-section">
        <div className="b-container">

          <div className="b-advisory-split">
            <div className="b-advisory-left">
              <span className="b-pill-badge b-pill-badge-light">
                Delivery
              </span>

              <h2 className="b-advisory-main-title">
                Transform your technology by focusing on 3 key areas
              </h2>

              <p className="b-advisory-main-desc">
                From healthcare to education, we provide scalable, secure, and cost-efficient IT solutions to help your business thrive.
              </p>
            </div>

            <div className="b-advisory-right">
              <div className="b-advisory-timeline">

            {/* Item 1 */}
            <div className="b-advisory-item">
              <div className="b-advisory-icon-wrapper">
                <div className="b-advisory-icon-circle">
                  <HiOutlineDatabase />
                </div>
                <span className="b-advisory-line"></span>
              </div>

              <div className="b-advisory-content">
                <h3 className="b-advisory-item-title">
                  Data Transformation
                </h3>

                <p className="b-advisory-item-desc">
                  Harness data's full potential through analytics, AI, and insights,
                  fuelling informed decisions and enhancing your software
                  capabilities.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="b-advisory-item">
              <div className="b-advisory-icon-wrapper">
                <div className="b-advisory-icon-circle">
                  <HiOutlineSparkles />
                </div>
                <span className="b-advisory-line"></span>
              </div>

              <div className="b-advisory-content">
                <h3 className="b-advisory-item-title">
                  Digital Enablement
                </h3>

                <p className="b-advisory-item-desc">
                  Modernize processes, streamline workflows, and elevate user
                  experiences by integrating cutting-edge digital technologies
                  into your software solutions.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="b-advisory-item b-advisory-last">
              <div className="b-advisory-icon-wrapper">
                <div className="b-advisory-icon-circle">
                  <HiOutlineUserGroup />
                </div>
              </div>

              <div className="b-advisory-content">
                <h3 className="b-advisory-item-title">
                  Innovation Partnership
                </h3>

                <p className="b-advisory-item-desc">
                  Collaborate with us to explore emerging technologies, co-create
                  innovative solutions, and drive sustained growth in a dynamic
                  software landscape.
                </p>
              </div>
            </div>

          </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Expertise & Stats Banner (Dark Half / Image Half) */}
      <section className="expertise">
        <div className="b-expertise-banner">
          <div className="b-expertise-inner">
            <div className="b-expertise-text">
              <span className="b-pill-badge-dark">Benefits to bank on</span>
              <h2 className="b-expertise-title">Our banking expertise</h2>
              <p className="b-expertise-desc">
                Notasco Technologies, a dynamic joint venture between Linethemes and Themeforest, harnesses extensive banking industry insight to revolutionize financial institutions through digital technology deployment.
              </p>

              <div className="b-expertise-stats-row">
                <div>
                  <div className="b-stat-number">300+</div>
                  <div className="b-stat-sublabel">Financial services firms worldwide</div>
                </div>

                <div>
                  <div className="b-stat-number">7/10</div>
                  <div className="b-stat-sublabel">The top largest banks worldwide.</div>
                </div>
              </div>
            </div>

            <div className="b-expertise-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&auto=format&fit=crop&q=80"
                alt="Financial Calculator and Documents"
                className="b-expertise-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Existing Contact Section */}
      <Contact />
    </div>
  );
};

export default Banking;
