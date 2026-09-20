import { HiOutlineCheckCircle } from 'react-icons/hi';
import '../Styles/About.css';

const highlights = [
    '4+ years of professional experience',
    'Worked with 30+ clients worldwide',
    'Delivered 50+ successful projects',
    'Expert in modern web technologies',
    'Strong communication & collaboration',
    'Dedicated to ongoing learning',
];

const About: React.FC = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-header">
                    <p className="about-subtitle">Get to Know Us</p>
                    <h2 className="about-title">About Us</h2>
                    <p className="about-description">Passionate about creating digital experiences that make an impact.</p>
                </div>

                <div className="about-grid">
                    <div className="about-card">
                        <div className="about-card-border"></div>
                        <div className="about-card-border-2"></div>
                        <div className="about-card-content">
                            <div className="about-card-decoration-1"></div>
                            <div className="about-card-decoration-2"></div>
                            <div className="about-card-inner">
                                <div className="about-avatar">
                                    <img src="/image/Infinite-2.png" alt="INFINITE WAVE TECH Logo" className="about-avatar-image" />
                                </div>
                                <h3 className="about-name">INFINITE WAVE TECH</h3>
                                <p className="about-role">Full-Stack Development & Design</p>
                                <p className="about-text">We are a technology and creative solutions company focused on helping businesses build a strong and professional digital presence.</p>
                                <p className="about-text">Our goal is simple — to understand your requirements, create the right solution, and help your business grow in the digital world.</p>
                                <h4 className="about-approach">Our Approach</h4>
                                <p className="about-text">Every business is different. We focus on understanding your goals and delivering solutions that are practical, visually appealing, reliable, and built for growth.</p>
                                <p className="about-text">We aim to be more than just a service provider — we aim to be your technology and digital growth partner.</p>
                            </div>
                        </div>
                    </div>

                    <div className="about-right">
                        <div className="about-highlights">
                            <h3 className="about-highlights-title">Why Choose Us</h3>
                            <div className="about-highlights-grid">
                                {highlights.map((item, i) => (
                                    <div key={i} className="about-highlight">
                                        <HiOutlineCheckCircle className="about-highlight-icon" />
                                        <span className="about-highlight-text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;