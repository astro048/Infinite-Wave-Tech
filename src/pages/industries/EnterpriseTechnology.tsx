import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/EnterpriseTechnology.css';

const EnterpriseTechnology: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="et-page-container">
      {/* 1. Hero Section */}
      <section className="et-hero-section-new">
        <div className="et-hero-overlay-new"></div>
        <div className="et-hero-content-new">
          <div className="et-tag et-tag-dark">Industries</div>
          <h1 className="et-hero-title-new">Enterprise Technology</h1>
          <p className="et-hero-text-new">
            We deliver enterprise technology solutions that empower businesses to scale, innovate, and stay ahead — backed by robust, agile, and future-ready digital infrastructure.
          </p>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="et-overview-section">
        <div className="et-container">
          <div className="et-tag">Overview</div>
          <h2 className="et-section-title">
            Expert IT services for the Enterprise Technology Industry
          </h2>
          <p className="et-overview-desc">
            We provide enterprise grade IT solutions tailored to meet the dynamic needs of the enterprise technology space — ensuring seamless integration, scalable infrastructure, robust security, and data-driven growth.
          </p>

          <div className="et-overview-grid">
            <div className="et-overview-card">
              <h4 className="et-overview-card-title">CX</h4>
              <p className="et-overview-card-text">
                Improve the user experience and customer satisfaction by leveraging AI, automation, and intuitive design to create personalized, user-centric interfaces.
              </p>
            </div>
            <div className="et-overview-card">
              <h4 className="et-overview-card-title">Scalability</h4>
              <p className="et-overview-card-text">
                Develop robust applications that can effortlessly adapt and expand in response to increasing user demands and evolving business needs.
              </p>
            </div>
            <div className="et-overview-card">
              <h4 className="et-overview-card-title">Security</h4>
              <p className="et-overview-card-text">
                Implement multi-layered security measures and compliance protocols (e.g., GDPR, HIPAA) to protect sensitive data and prevent unauthorized access.
              </p>
            </div>
            <div className="et-overview-card">
              <h4 className="et-overview-card-title">Data Analytics</h4>
              <p className="et-overview-card-text">
                Capitalize on data-driven insights to uncover new revenue opportunities, optimize operational efficiency, and identify strategic market trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Industries Served Section */}
      <section className="et-industries-served-section">
        <div className="et-container">
          <div className="et-industries-served-split">
            <div className="et-industries-served-left">
              <div className="et-tag et-tag-dark">Industries</div>
              <h2 className="et-section-title et-text-white">
                The industry sectors we served include
              </h2>
              <p className="et-industries-served-desc">
                From retail to investment banking, we deliver secure, scalable software solutions tailored to every facet of the banking ecosystem — enabling innovation, compliance, and growth.
              </p>
              <div className="et-hero-actions">
                <Link to="/industries" className="et-btn-outline">View All Industries</Link>
                <Link to="/contact" className="et-btn-primary">Contact Us</Link>
              </div>
            </div>
            <div className="et-industries-served-right">
              <div className="et-carousel-controls">
                <button className="et-carousel-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="et-carousel-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="et-hero-cards">
                {/* Card 1 */}
                <div className="et-hero-card">
                  <div className="et-hero-card-overlay"></div>
                  <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" alt="Finance and Banking" className="et-hero-card-img" />
                  <div className="et-hero-card-content">
                    <div className="et-hero-card-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <h3>Finance and Banking</h3>
                    <p>Secure and scalable systems for smarter transactions, compliance, and real-time decision-making.</p>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="et-hero-card">
                  <div className="et-hero-card-overlay"></div>
                  <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" alt="Healthcare & Life Sciences" className="et-hero-card-img" />
                  <div className="et-hero-card-content">
                    <div className="et-hero-card-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3>Healthcare & Life Sciences</h3>
                    <p>Tech-driven care solutions that enhance patient outcomes and ensure regulatory compliance.</p>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="et-hero-card">
                  <div className="et-hero-card-overlay"></div>
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" alt="Manufacturing & Supply Chain" className="et-hero-card-img" />
                  <div className="et-hero-card-content">
                    <div className="et-hero-card-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <h3>Manufacturing & Supply Chain</h3>
                    <p>Smart systems to streamline production, inventory, and logistics for maximum efficiency.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Benefits Section */}
      <section className="et-benefits-section">
        <div className="et-container">
          <div className="et-tag">Benefits to enterprise technology on</div>
          <h2 className="et-section-title">
            Our clients are able to increase end-user productivity without sacrificing usability.
          </h2>

          <div className="et-benefits-grid">
            {/* Benefit 1 */}
            <div className="et-benefit-card">
              <div className="et-icon-container">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </div>
              <h4 className="et-card-title">Efficiency</h4>
              <p className="et-card-text">
                Streamline operations, reduce manual tasks, and optimize workflows to achieve greater efficiency and productivity.
              </p>
            </div>
            {/* Benefit 2 */}
            <div className="et-benefit-card">
              <div className="et-icon-container">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="et-card-title">Cost Savings</h4>
              <p className="et-card-text">
                Reduce operational costs through automation, improved resource allocation, and enhanced decision-making.
              </p>
            </div>
            {/* Benefit 3 */}
            <div className="et-benefit-card">
              <div className="et-icon-container">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h4 className="et-card-title">Competitive Advantage</h4>
              <p className="et-card-text">
                Stay ahead of the competition with innovative solutions that enable quicker responses to market changes.
              </p>
            </div>
            {/* Benefit 4 */}
            <div className="et-benefit-card">
              <div className="et-icon-container">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h4 className="et-card-title">Scalability</h4>
              <p className="et-card-text">
                Adapt to growth or changes in demand seamlessly with scalable software solutions that evolve with your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Delivery Section */}
      <section className="et-delivery-section">
        <div className="et-container et-delivery-split">
          <div className="et-delivery-left">
            <div className="et-tag">Delivery</div>
            <h2 className="et-section-title">
              Transform your technology by focusing on 3 key areas
            </h2>
            <p className="et-delivery-desc">
              From healthcare to education, we provide scalable, secure, and cost-efficient IT solutions to help your business thrive.
            </p>
          </div>
          <div className="et-delivery-right">
            <div className="et-timeline">
              
              {/* Item 1 */}
              <div className="et-timeline-item">
                <div className="et-timeline-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <div className="et-timeline-content">
                  <h4 className="et-timeline-title">Scalable Solutions</h4>
                  <p className="et-timeline-text">
                    Opt for adaptable software and infrastructure that can effortlessly grow with your enterprise, ensuring long-term cost-efficiency and reduced downtime.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="et-timeline-item">
                <div className="et-timeline-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div className="et-timeline-content">
                  <h4 className="et-timeline-title">Seamless Integration</h4>
                  <p className="et-timeline-text">
                    Prioritize the integration of systems and software for streamlined operations, enhanced data flow, and improved communication across your organization.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="et-timeline-item">
                <div className="et-timeline-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="et-timeline-content">
                  <h4 className="et-timeline-title">User-Centric Design</h4>
                  <p className="et-timeline-text">
                    Empower your workforce with user-friendly software and interfaces, minimizing training time and maximizing productivity for sustainable technology transformation.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 6. Expertise Section */}
      <section className="et-expertise-section">
        <div className="et-expertise-left">
          <div className="et-tag et-tag-dark">Expertise</div>
          <h2 className="et-section-title et-text-white">
            Our Enterprise Technology expertise
          </h2>
          <p className="et-expertise-desc">
            We are the catalyst for innovation and efficiency in the enterprise technology landscape. With our expertise, organizations gain a competitive edge, navigate digital transformations, and achieve sustainable growth in a dynamic market.
          </p>
          <div className="et-stats-container">
            <div className="et-stat">
              <div className="et-stat-value">300+</div>
              <div className="et-stat-label">Financial services firms<br/>worldwide</div>
            </div>
            <div className="et-stat">
              <div className="et-stat-value">7/10</div>
              <div className="et-stat-label">The top largest banks<br/>worldwide.</div>
            </div>
          </div>
        </div>
        <div className="et-expertise-right">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" alt="Enterprise Expertise" className="et-expertise-img" />
        </div>
      </section>
    </div>
  );
};

export default EnterpriseTechnology;

