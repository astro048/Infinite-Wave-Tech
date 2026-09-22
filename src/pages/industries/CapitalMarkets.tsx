import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Contact from '../../components/Contact';
import '../../Styles/CapitalMarkets.css';
import {
  HiOutlineTrendingUp,
  HiOutlineCurrencyDollar,
  HiOutlineChartBar,
  HiOutlineGlobeAlt,
  HiOutlineCash,
  HiOutlineUsers,
  HiOutlineDatabase,
  HiOutlineShieldCheck,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineOfficeBuilding
} from 'react-icons/hi';

const CapitalMarkets: React.FC = () => {
  return (
    <div className="capital-markets-page">
      {/* 1. Hero Section */}
      <section className="cm-hero">
        <img
          src="/image/Hero Background2.png"
          alt="Capital Markets Corporate Buildings"
          className="cm-hero-bg"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        <div className="cm-hero-overlay"></div>

        <div className="cm-container">
          <div className="cm-hero-content">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="cm-pill-badge">Industries</span>
            </motion.div>

            <motion.h1
              className="cm-hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Capital Markets
            </motion.h1>

            <motion.p
              className="cm-hero-desc"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              We empower capital market institutions with secure, high-performance technology solutions that drive smarter trading, better compliance, and real-time decision-making.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Overview Section (4 Cards Grid) */}
      <section className="cm-overview-section">
        <div className="cm-container">
          <div className="cm-overview-header">
            <span className="cm-pill-badge cm-pill-badge-light">Overview</span>
            <h2 className="cm-overview-title">
              Expert IT services for the Capital Market Industry
            </h2>
            <p className="cm-overview-lead">
              Empowering capital market firms with agile, secure, and scalable technology solutions to drive innovation, broaden market access, and accelerate global growth.
            </p>
          </div>

          <div className="cm-grid-4">
            <div className="cm-overview-card">
              <h3 className="cm-card-title">Talent & Execution</h3>
              <p className="cm-card-desc">
                Specialized software solutions, quantitative research architectures, and modern engineering platforms built to keep trading desks ahead in fast-moving markets.
              </p>
            </div>

            <div className="cm-overview-card">
              <h3 className="cm-card-title">Global Reach</h3>
              <p className="cm-card-desc">
                Publicly traded software companies gain exposure to a vast investor base, including institutional and retail investors, facilitating global expansion and partnerships.
              </p>
            </div>

            <div className="cm-overview-card">
              <h3 className="cm-card-title">Liquidity and Valuation</h3>
              <p className="cm-card-desc">
                Publicly traded shares provide liquidity for stakeholders, establishing dynamic market valuations and institutional credibility across global exchange books.
              </p>
            </div>

            <div className="cm-overview-card">
              <h3 className="cm-card-title">Strategic Opportunities</h3>
              <p className="cm-card-desc">
                Capital markets enable software enterprises to seize strategic opportunities, such as mergers, acquisitions, and partnerships, fostering long-term diversification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Industry Sectors We Served (Dark Section with Side-by-Side Layout) */}
      <section className="cm-sectors-section">
        <div className="cm-container">
          {/* Top navigation arrows top right */}
          <div className="cm-sectors-top-controls">
            <button className="cm-nav-arrow-btn" aria-label="Previous Sector">
              <HiOutlineChevronLeft />
            </button>
            <button className="cm-nav-arrow-btn" aria-label="Next Sector">
              <HiOutlineChevronRight />
            </button>
          </div>

          <div className="cm-sectors-row-layout">
            {/* Left Column: Title, Description, and CTA Buttons */}
            <div className="cm-sectors-left-col">
              <span className="cm-pill-badge">Sectors</span>
              <h2 className="cm-sectors-title">
                The industry sectors we served include
              </h2>
              <p className="cm-sectors-lead">
                From retail to investment banking, we deliver secure, scalable software solutions tailored to every facet of the banking ecosystem — enabling innovation, compliance, and growth.
              </p>
              
              <div className="cm-sectors-actions">
                <Link to="/services/custom-software" className="cm-btn-dark-outline">
                  View All Industries
                </Link>
                <a href="#contact" className="cm-btn-accent">
                  Contact Us
                </a>
              </div>
            </div>

            {/* Right Column: 3 Sector Cards side-by-side */}
            <div className="cm-sectors-cards-row">
              {/* Card 1: Equity Trading */}
              <div className="cm-sector-card">
                <img
                  src="/image/banking_hero.jpg"
                  alt="Equity Trading"
                  className="cm-sector-bg-img"
                />
                <div className="cm-sector-overlay"></div>
                <div className="cm-sector-icon-floating">
                  <HiOutlineTrendingUp />
                </div>
                <div className="cm-sector-card-content">
                  <h3 className="cm-sector-card-title">Equity Trading</h3>
                  <p className="cm-sector-card-desc">
                    Robust trading platforms and algorithms that ensure swift, secure, and efficient equity trade execution.
                  </p>
                </div>
              </div>

              {/* Card 2: Forex & Currency Markets */}
              <div className="cm-sector-card">
                <img
                  src="/image/Hero Background2.png"
                  alt="Forex & Currency Markets"
                  className="cm-sector-bg-img"
                />
                <div className="cm-sector-overlay"></div>
                <div className="cm-sector-icon-floating">
                  <HiOutlineCurrencyDollar />
                </div>
                <div className="cm-sector-card-content">
                  <h3 className="cm-sector-card-title">Forex & Currency Markets</h3>
                  <p className="cm-sector-card-desc">
                    Comprehensive Forex solutions for seamless global currency exchange and risk mitigation.
                  </p>
                </div>
              </div>

              {/* Card 3: Commodities Trading */}
              <div className="cm-sector-card">
                <img
                  src="/image/Hero Background.png"
                  alt="Commodities Trading"
                  className="cm-sector-bg-img"
                />
                <div className="cm-sector-overlay"></div>
                <div className="cm-sector-icon-floating">
                  <HiOutlineChartBar />
                </div>
                <div className="cm-sector-card-content">
                  <h3 className="cm-sector-card-title">Commodities Trading</h3>
                  <p className="cm-sector-card-desc">
                    Powerful tools that support real-time trading, data analysis, and execution in commodity markets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Benefits Section (4 Cards with Green/Theme Accent Circle Icons) */}
      <section className="cm-benefits-section">
        <div className="cm-container">
          <div className="cm-benefits-header">
            <span className="cm-pill-badge cm-pill-badge-light">Benefits to capital markets on</span>
            <h2 className="cm-benefits-title">
              Our clients are able to increase end-user productivity without sacrificing usability.
            </h2>
          </div>

          <div className="cm-benefits-grid">
            <div className="cm-benefit-card">
              <div className="cm-benefit-icon-box">
                <HiOutlineCash />
              </div>
              <h3 className="cm-benefit-title">Retirement Planning</h3>
              <p className="cm-benefit-desc">
                Individual investors use capital markets to save for retirement, ensuring financial security in their later years.
              </p>
            </div>

            <div className="cm-benefit-card">
              <div className="cm-benefit-icon-box">
                <HiOutlineUsers />
              </div>
              <h3 className="cm-benefit-title">Job Creation</h3>
              <p className="cm-benefit-desc">
                As companies grow and expand with capital market support, they often hire additional talent, contributing to economic health.
              </p>
            </div>

            <div className="cm-benefit-card">
              <div className="cm-benefit-icon-box">
                <HiOutlineGlobeAlt />
              </div>
              <h3 className="cm-benefit-title">Global Expansion</h3>
              <p className="cm-benefit-desc">
                Capital markets enable businesses to access international assets, facilitating global expansion and diversification.
              </p>
            </div>

            <div className="cm-benefit-card">
              <div className="cm-benefit-icon-box">
                <HiOutlineChartBar />
              </div>
              <h3 className="cm-benefit-title">Data Analytics</h3>
              <p className="cm-benefit-desc">
                Harnessing big data & analytics provides a competitive advantage. Real-time data insights enable better decision-making and trading strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Delivery / 3 Key Areas Section */}
      <section className="cm-advisory-section">
        <div className="cm-container">
          <div className="cm-advisory-grid">
            <div className="cm-advisory-left">
              <span className="cm-pill-badge cm-pill-badge-light">Delivery</span>
              <h2 className="cm-advisory-title">
                Transform your technology by focusing on 3 key areas
              </h2>
              <p className="cm-advisory-desc">
                From execution to data intelligence, we provide scalable, secure, and cost-efficient IT solutions to help your business thrive.
              </p>
            </div>

            <div className="cm-advisory-list">
              <div className="cm-advisory-item">
                <div className="cm-advisory-icon-circle">
                  <HiOutlineOfficeBuilding />
                </div>
                <div>
                  <h3 className="cm-advisory-item-title">Digitalization of Trading and Operations</h3>
                  <p className="cm-advisory-item-desc">
                    We offer advanced trading solutions to boost execution speed and precision in capital markets.
                  </p>
                </div>
              </div>

              <div className="cm-advisory-item">
                <div className="cm-advisory-icon-circle">
                  <HiOutlineShieldCheck />
                </div>
                <div>
                  <h3 className="cm-advisory-item-title">Risk Management and Compliance</h3>
                  <p className="cm-advisory-item-desc">
                    We provide comprehensive risk monitoring and regulatory technology to streamline compliance efforts for capital market participants.
                  </p>
                </div>
              </div>

              <div className="cm-advisory-item">
                <div className="cm-advisory-icon-circle">
                  <HiOutlineDatabase />
                </div>
                <div>
                  <h3 className="cm-advisory-item-title">Data Management and Analytics</h3>
                  <p className="cm-advisory-item-desc">
                    We empower capital market players with robust data governance, analytics, and AI-driven insights for informed decision-making.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Expertise & Stats Banner (Dark Half / Image Half) */}
      <section className="px-4">
        <div className="cm-expertise-banner">
          <div className="cm-expertise-inner">
            <div className="cm-expertise-text">
              <span className="cm-pill-badge">Capital Markets Expertise</span>
              <h2 className="cm-expertise-title">Our capital markets expertise</h2>
              <p className="cm-expertise-desc">
                We empower investment institutions, trading desks, and asset managers with agile, ultra-resilient financial technology, delivering efficiency, cost-effectiveness, and real-time execution.
              </p>

              <div className="cm-expertise-stats-row">
                <div>
                  <div className="cm-stat-number">300+</div>
                  <div className="cm-stat-sublabel">Financial services firms worldwide</div>
                </div>

                <div>
                  <div className="cm-stat-number">7/10</div>
                  <div className="cm-stat-sublabel">The top largest banks worldwide</div>
                </div>
              </div>
            </div>

            <div className="cm-expertise-image-wrap">
              <img
                src="/image/hero-person.png"
                alt="Capital Markets Stock Analysis"
                className="cm-expertise-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Contact Section */}
      <Contact />
    </div>
  );
};

export default CapitalMarkets;
