import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLaptopMedical, FaUmbrellaBeach, FaUtensils, FaSmileBeam } from 'react-icons/fa';
import '../Styles/Careers.css';

const jobOpenings = [
  {
    title: 'Android / Flutter Developers',
    experience: 'Experience: 0-2 Years',
    description: 'Android/Flutter Developers design and maintain mobile apps for both platforms, working closely with designers and backend teams.',
    location: 'Madurai',
    type: 'Full Time',
  },
  {
    title: 'MERN Stack Developer',
    experience: 'Experience: 0-2 Years',
    description: 'MERN Stack Developers build and maintain web applications using MongoDB, Express.js, React, and Node.js to create responsive, high-performance, and user-friendly interfaces.',
    location: 'Madurai',
    type: 'Full Time',
  },
  {
    title: 'Technical Lead',
    experience: 'Experience: 3 Years',
    description: 'Technical Leads guide development teams, oversee project execution, and ensure high quality software delivery. They collaborate with stakeholders, mentor team members, and make key technical decisions to achieve project goals.',
    location: 'Bangalore',
    type: 'Full Time',
  },
  {
    title: 'Junior Web Developer/Internship',
    experience: 'Experience: Freshers',
    description: 'Junior Web Developers assist in building and maintaining websites, fixing bugs, adding features, and improving performance while learning modern web technologies.',
    location: 'Madurai',
    type: 'Full Time',
  },
  {
    title: 'Business Development Executive',
    experience: 'Experience: 0-2 Years',
    description: 'Business Development Executives identify opportunities, build client relationships, and drive growth through effective communication and strategic planning.',
    location: 'Madurai',
    type: 'Full Time',
  },
];

const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<typeof jobOpenings[0] | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleApplyClick = (job: typeof jobOpenings[0]) => {
    setSelectedJob(job);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
  };

  return (
    <div className="careers-page-container">
      {/* 1. Hero Section */}
      <section className="careers-hero-section">
        <div className="careers-hero-overlay"></div>
        <div className="careers-hero-content">
          <div className="careers-tag">Careers</div>
          <h1 className="careers-hero-title">Work With Us</h1>
          <p className="careers-hero-text">
            Explore exciting career opportunities with us, where innovation and growth converge. Join our dynamic team and embark on a rewarding journey to shape the future of your career! We help companies reach their full potential. Are you ready to reach yours? Come join us.
          </p>
        </div>
      </section>

      {/* 2. Intro Section */}
      <section className="careers-intro-section">
        <div className="careers-container careers-intro-split">
          <div className="careers-intro-left">
            <h2 className="careers-section-title">It's a pleasure to connect regarding the job application!</h2>
            <p className="careers-intro-desc">
              There are many IT companies in UK, but none quite like Notasco Technologies. We've been around for over 20 years, but you wouldn't know it from the energy in the place. Our passions. Along the way, we have picked up plenty of awards, we currently are listed in to Great Place to Work's Best Workplaces, and have been a Deloitte Best Managed Company for over 10 years. Careers
            </p>
            <p className="careers-intro-desc">
              We are a team of certified experts with immense talent to secure web design, development, and marketing which walk with you all through.
            </p>
            <Link to="/contact" className="careers-btn-primary">
              Contact Us
            </Link>
          </div>
          <div className="careers-intro-right">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60"
              alt="Team collaborating"
              className="careers-intro-img"
            />
          </div>
        </div>
      </section>

      {/* 3. Perks / Solutions Section */}
      <section className="careers-perks-section">
        <div className="careers-container">
          <div className="careers-tag careers-tag-light">Solutions</div>
          <h2 className="careers-section-title text-white">Comprehensive IT services include</h2>
          <p className="careers-perks-subtitle">
            From healthcare to education, we provide adaptable, secure, and cost-efficient IT solutions to help your business thrive.
          </p>

          <div className="careers-perks-grid">
            <div className="careers-perk-card">
              <div className="careers-perk-icon-wrapper">
                <FaLaptopMedical className="careers-perk-icon" />
              </div>
              <h3 className="careers-perk-title">Health Care</h3>
              <p className="careers-perk-desc">
                Comprehensive programs in health, dental, and vision along with 401k matching and flexible spending accounts (FSAs) to support your financial and medical well being.
              </p>
            </div>
            <div className="careers-perk-card">
              <div className="careers-perk-icon-wrapper">
                <FaUmbrellaBeach className="careers-perk-icon" />
              </div>
              <h3 className="careers-perk-title">Flexibility</h3>
              <p className="careers-perk-desc">
                Generous allowance, lifestyle with flexible working hours and remote options, plus generous paid parental leave for both mothers and fathers.
              </p>
            </div>
            <div className="careers-perk-card">
              <div className="careers-perk-icon-wrapper">
                <FaUtensils className="careers-perk-icon" />
              </div>
              <h3 className="careers-perk-title">Meals</h3>
              <p className="careers-perk-desc">
                Nutritious and delicious catered meals are not only including lunches, dinners and a variety of beverages, available right at the workplace.
              </p>
            </div>
            <div className="careers-perk-card">
              <div className="careers-perk-icon-wrapper">
                <FaSmileBeam className="careers-perk-icon" />
              </div>
              <h3 className="careers-perk-title">Fun</h3>
              <p className="careers-perk-desc">
                Engaging events to keep our team energized and learning, from team outings, learning, networking and sessions to foster teamwork.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Openings Section */}
      <section className="careers-openings-section">
        <div className="careers-container">
          <h2 className="careers-section-title">Current Openings</h2>
          <p className="careers-openings-subtitle">
            Managed IT Services means understanding your business inside out. A reliable company delivering unlimited support and strategic management of your IT infrastructure for a flat fee.
          </p>

          <div className="careers-openings-grid">
            {jobOpenings.map((job, idx) => (
              <div key={idx} className="careers-job-card">
                <div className="careers-job-card-header">
                  <h3 className="careers-job-title">{job.title}</h3>
                  <span className="careers-job-exp">{job.experience}</span>
                </div>
                <p className="careers-job-desc">{job.description}</p>
                <div className="careers-job-tags">
                  <span className="careers-job-tag">{job.location}</span>
                  <span className="careers-job-tag">{job.type}</span>
                </div>
                <button className="careers-job-apply-btn" onClick={() => handleApplyClick(job)}>
                  Apply Now <span className="arrow">↗</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Application Modal */}
      {selectedJob && (
        <div className="careers-modal-overlay" onClick={handleCloseModal}>
          <div className="careers-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="careers-modal-close" onClick={handleCloseModal}>&times;</button>
            <h3 className="careers-modal-title">Apply for {selectedJob.title}</h3>
            <form className="careers-modal-form" onSubmit={(e) => { e.preventDefault(); alert('Application submitted successfully!'); handleCloseModal(); }}>
              <div className="careers-form-group">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div className="careers-form-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" required />
              </div>
              <div className="careers-form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+1 234 567 8900" required />
              </div>
              <div className="careers-form-group">
                <label>Resume Link / Portfolio</label>
                <input type="url" placeholder="https://linkedin.com/in/..." required />
              </div>
              <div className="careers-form-group">
                <label>Cover Letter</label>
                <textarea rows={4} placeholder="Why are you a good fit for this role?" required></textarea>
              </div>
              <button type="submit" className="careers-btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;
