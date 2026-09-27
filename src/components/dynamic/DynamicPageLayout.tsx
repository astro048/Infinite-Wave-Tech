import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DynamicPageData } from '../../types/dynamicPage';
import '../../Styles/EnterpriseTechnology.css';
import '../../Styles/ServiceLayout.css';

interface DynamicPageLayoutProps {
  data: DynamicPageData;
}

export const DynamicPageLayout: React.FC<DynamicPageLayoutProps> = ({ data }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  if (data.type === 'service') {
    // Dynamic image mapping for services
    const heroImgMap: Record<string, string> = {
      'managed-it': 'https://images.openai.com/static-rsc-4/l5pNLE98Z2jSSDbI2vj_s6PbA2xdaIdtU312T5_yzuu_PQxZimhDsoc4GF3e-5cjeOA-5IIJf1PdXeLrshPXjHUkoFX3R912Yx11MIbcFDLSvVtz2-6vN1bVwC0frgEgSGl2zwQUdvfnL3Y_aV6hGHk2zM_3eYNIe5XUWJjkpfA?purpose=inline',
      'it-support': 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&auto=format&fit=crop&q=80',
      'it-consultancy': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&auto=format&fit=crop&q=80',
      'cloud-computing': 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&auto=format&fit=crop&q=80',
      'cyber-security': 'https://images.openai.com/static-rsc-4/rLmwRezTtHulNpzbq_Q1vnwIAiecc0Il3pKO016WbatashdYa2cGoVdsD3leMmHpbcuDBIwLyB6zyOfZlDnqRgnWfwS8RLMG4eXsQtBHMr5R1bFmrDSnyfwHmNtJD7YCUpJsi5Cs1UjtZTw4Undw_z-41ibslFtG77nd4m04WuWzfRHrzQFRF7vhJpzeOGiw?purpose=fullsize',
      'custom-software': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&auto=format&fit=crop&q=80',
      'mobile-application': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1920&auto=format&fit=crop&q=80',
      'web-application': 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1920&auto=format&fit=crop&q=80',
      'ai-devops': 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&auto=format&fit=crop&q=80',
    };

    const benefitsImgMap: Record<string, string> = {
      'managed-it': 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60',
      'it-support': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60',
      'it-consultancy': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60',
      'cloud-computing': 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=60',
      'cyber-security': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=60',
      'custom-software': 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&auto=format&fit=crop&q=60',
      'mobile-application': 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=60',
      'web-application': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60',
      'ai-devops': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60',
    };

    const heroBg = heroImgMap[data.slug] || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&auto=format&fit=crop&q=80';
    const benefitImg = benefitsImgMap[data.slug] || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60';

    return (
      <div className="svc-page-container">
        {/* 1. Hero Section */}
        <section className="svc-hero-section" style={{ backgroundImage: `url('${heroBg}')` }}>
          <div className="svc-hero-overlay"></div>
          <div className="svc-hero-content">
            <div className="svc-tag">Our Solutions</div>
            <h1 className="svc-hero-title">{data.title}</h1>
            <p className="svc-hero-text">{data.description}</p>
          </div>
        </section>

        {/* 2. Overview / Stats Section */}
        <section className="svc-overview-section">
          <div className="svc-container">
            <h2 className="svc-section-title">{data.overview?.heading || `Reliable ${data.title} Operations`}</h2>
            <div className="svc-overview-desc">
              {data.overview?.text.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="svc-stats-grid">
              {data.overview?.stats?.map((stat, idx) => (
                <div key={idx} className="svc-stat-card">
                  <div className="svc-stat-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="svc-stat-value">{stat.value}</div>
                  <div className="svc-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Services / Solutions Section */}
        <section className="svc-solutions-section">
          <div className="svc-container">
            <div className="svc-solutions-header">
              <div className="svc-solutions-header-left">
                <div className="svc-tag svc-tag-light">Solutions</div>
                <h2 className="svc-section-title svc-text-white">
                  Comprehensive {data.title} include
                </h2>
                <p className="svc-solutions-desc">
                  {data.tagline || data.subtitle}
                </p>
              </div>
              <div className="svc-carousel-controls">
                <button className="svc-carousel-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="svc-carousel-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="svc-solutions-grid">
              {data.whatWeProvide?.slice(0, 4).map((item, idx) => (
                <div key={idx} className="svc-solution-card">
                  <div className="svc-solution-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h4 className="svc-solution-title">{item.title}</h4>
                  <p className="svc-solution-text">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Benefits Section */}
        <section className="svc-benefits-section">
          <div className="svc-container">
            <h2 className="svc-benefits-main-title">
              Our {data.title} provide a unique range of benefits
            </h2>

            <div className="svc-benefits-split">
              <div className="svc-benefits-left">
                {data.whyChooseUs?.map((item, idx) => (
                  <div key={idx} className="svc-benefit-item">
                    <h4 className="svc-benefit-title">{item.title}</h4>
                    <p className="svc-benefit-text">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="svc-benefits-right">
                <img src={benefitImg} alt="Benefits" className="svc-benefits-img" />
                <div className="svc-carousel-dots">
                  <span className="svc-dot active"></span>
                  <span className="svc-dot"></span>
                  <span className="svc-dot"></span>
                  <span className="svc-dot"></span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // --- Industry Layout ---
  const industryHeroImgMap: Record<string, string> = {
    'banking': 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=1920&auto=format&fit=crop&q=80',
    'capital-markets': 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&auto=format&fit=crop&q=80',
    'enterprise-technology': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&auto=format&fit=crop&q=80',
    'healthcare': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjVTRvsuHxUpR6D3c96KN-N0e5Hx1jg4xPy1M8FTpeTA&s=10',
    'logistics': 'https://etimg.etb2bimg.com/photo/118316548.cms',
    'manufacturing': 'https://www.quickbase.com/_next/image?url=https%3A%2F%2Fpayload-assets-us-west-2.marketing.quickbase.com%2FBlog%20Images%2Fblog-images-manufacturing-line.jpg&w=3840&q=75',
  };

  const industryExpertiseImgMap: Record<string, string> = {
    'banking': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=60',
    'capital-markets': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60',
    'enterprise-technology': 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&auto=format&fit=crop&q=60',
    'healthcare': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiNLUCz2olC_yVz7JM3oyJFvGsXz3B1VDMJugCqEwEC-3XiRSJ1j0Pbp12&s=10',
    'logistics': 'https://images.unsplash.com/photo-1586528116311-ad8ed7c663be?w=800&auto=format&fit=crop&q=60',
    'manufacturing': 'https://images.unsplash.com/photo-1565891741441-64926e441838?w=800&auto=format&fit=crop&q=60',
  };

  const fallbackImages = [
    'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1531297172864-822d1fe15fd1?w=800&auto=format&fit=crop&q=60',
  ];

  const industryCardImgMap: Record<string, Record<string, string>> = {
    'banking': {
      'Data Management & Governance': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60',
      'Automation & Security Infrastructure': 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=60',
    },
    'capital-markets': {
      'Digitalization of Trading and Operations': 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&auto=format&fit=crop&q=60',
      'Risk Management and Compliance': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=60',
    },
    'enterprise-technology': {
      'System Integration & Enterprise Service Bus': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60',
      'Enterprise Data Platforms': 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop&q=60',
    },
    'healthcare': {
      'Secure Health Systems': 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&auto=format&fit=crop&q=60',
      'Appointment Management & Reminders': 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&auto=format&fit=crop&q=60',
    },
    'logistics': {
      'Automation & Dispatch Engines': 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&auto=format&fit=crop&q=60',
      'Logistics Analytics & KPIs': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60',
    },
    'manufacturing': {
      'IoT Integration & Sensor Telemetry': 'https://images.unsplash.com/photo-1580893246395-52aead8960dc?w=800&auto=format&fit=crop&q=60',
      'Digital Operations & Predictive Maintenance': 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=60',
    }
  };

  const heroBgStyle = industryHeroImgMap[data.slug] ? { backgroundImage: `url('${industryHeroImgMap[data.slug]}')` } : {};
  const expertiseImg = industryExpertiseImgMap[data.slug] || fallbackImages[0];

  const getCardImg = (slug: string, title: string, fallbackIdx: number) => {
    if (industryCardImgMap[slug] && industryCardImgMap[slug][title]) {
      return industryCardImgMap[slug][title];
    }
    return fallbackImages[fallbackIdx % fallbackImages.length];
  };

  return (
    <div className="et-page-container">
      {/* 1. Hero Section */}
      <section className="et-hero-section-new" style={heroBgStyle}>
        <div className="et-hero-overlay-new"></div>
        <div className="et-hero-content-new">
          <div className="et-tag et-tag-dark">{data.category || 'Industries'}</div>
          <h1 className="et-hero-title-new">{data.title}</h1>
          <p className="et-hero-text-new">{data.description}</p>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="et-overview-section">
        <div className="et-container">
          <div className="et-tag">Overview</div>
          <h2 className="et-section-title">
            {data.overview?.heading || `Expert IT services for the ${data.title} Industry`}
          </h2>
          <div className="et-overview-desc">
            {data.overview?.text.map((p, idx) => (
              <p key={idx} style={{ marginBottom: '1rem' }}>{p}</p>
            ))}
          </div>

          <div className="et-overview-grid">
            {data.whatWeProvide?.slice(0, 4).map((item, idx) => (
              <div key={idx} className="et-overview-card">
                <h4 className="et-overview-card-title">{item.title}</h4>
                <p className="et-overview-card-text">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Industries Served / Sectors Section */}
      <section className="et-industries-served-section">
        <div className="et-container">
          <div className="et-industries-served-split">
            <div className="et-industries-served-left">
              <div className="et-tag et-tag-dark">Sectors</div>
              <h2 className="et-section-title et-text-white">
                The industry sectors we served include
              </h2>
              <p className="et-industries-served-desc">
                {data.tagline || data.subtitle}
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
                {/* Fallback to other array if whatWeProvide doesn't have enough items */}
                {(data.whatWeProvide?.length > 4 ? data.whatWeProvide.slice(4, 7) : data.approach?.slice(0, 3)).map((item, idx) => (
                  <div key={idx} className="et-hero-card">
                    <div className="et-hero-card-overlay"></div>
                    <img src={getCardImg(data.slug, item.title, idx)} alt={item.title} className="et-hero-card-img" />
                    <div className="et-hero-card-content">
                      <div className="et-hero-card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.description.substring(0, 80)}...</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Benefits Section */}
      <section className="et-benefits-section">
        <div className="et-container">
          <div className="et-tag">Benefits to {data.title.toLowerCase()} on</div>
          <h2 className="et-section-title">
            Our clients are able to increase end-user productivity without sacrificing usability.
          </h2>

          <div className="et-benefits-grid">
            {/* Using whyChooseUs or fallback to overview stats to fill 4 cards if needed */}
            {(data.whyChooseUs?.length >= 4 ? data.whyChooseUs : [...(data.whyChooseUs || []), ...(data.approach || [])]).slice(0, 4).map((item, idx) => (
              <div key={idx} className="et-benefit-card">
                <div className="et-icon-container">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h4 className="et-card-title">{item.title || (item as any).label}</h4>
                <p className="et-card-text">{item.description || (item as any).value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Delivery Section */}
      <section className="et-delivery-section">
        <div className="et-container et-delivery-split">
          <div className="et-delivery-left">
            <div className="et-tag">Delivery</div>
            <h2 className="et-section-title">
              Transform your technology by focusing on {data.approach?.length || 3} key areas
            </h2>
            <p className="et-delivery-desc">
              We provide scalable, secure, and cost-efficient IT solutions to help your business thrive.
            </p>
          </div>
          <div className="et-delivery-right">
            <div className="et-timeline">
              {data.approach?.map((step, idx) => {
                const renderIcon = () => {
                  if (idx === 0) return (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  );
                  if (idx === 1) return (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  );
                  return (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  );
                };

                return (
                  <div key={idx} className="et-timeline-item">
                    <div className="et-timeline-icon">
                      {renderIcon()}
                    </div>
                    <div className="et-timeline-content">
                      <h4 className="et-timeline-title">{step.title}</h4>
                      <p className="et-timeline-text">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Expertise Section */}
      <section className="et-expertise-section">
        <div className="et-expertise-left">
          <div className="et-tag et-tag-dark">Expertise</div>
          <h2 className="et-section-title et-text-white">
            Our {data.title.toLowerCase()} expertise
          </h2>
          <p className="et-expertise-desc">
            With our wealth of expertise, we are trusted in delivering cutting-edge software solutions that improve outcomes, streamline operations, and drive innovation in the industry.
          </p>
          <div className="et-stats-container">
            {data.overview?.stats?.slice(0, 2).map((stat, idx) => (
              <div key={idx} className="et-stat">
                <div className="et-stat-value">{stat.value}</div>
                <div className="et-stat-label">{stat.label}</div>
              </div>
            ))}
            {(!data.overview?.stats || data.overview.stats.length === 0) && (
              <>
                <div className="et-stat">
                  <div className="et-stat-value">300+</div>
                  <div className="et-stat-label">Happy Clients<br />Worldwide</div>
                </div>
                <div className="et-stat">
                  <div className="et-stat-value">7/10</div>
                  <div className="et-stat-label">Top industry leaders<br />trust us.</div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="et-expertise-right">
          <img src={expertiseImg} alt={`${data.title} Expertise`} className="et-expertise-img" />
        </div>
      </section>
    </div>
  );
};

export default DynamicPageLayout;
