import { useState } from 'react';
import PortfolioCard from './PortfolioCard';
import { portfolioItems, portfolioCategories } from '../data/portfolio';
import '../Styles/Portfolio.css';

const Portfolio: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredItems =
        activeCategory === 'All'
            ? portfolioItems
            : portfolioItems.filter((item) => item.category === activeCategory);

    return (
        <section id="portfolio" className="portfolio-section">
            <div className="portfolio-container">
                <div className="portfolio-header">
                    <p className="portfolio-subtitle">Recent Work</p>
                    <h2 className="portfolio-title">My Portfolio</h2>
                    <p className="portfolio-description">Check out some of my recent projects and creative work.</p>
                </div>

                <div className="portfolio-filters">
                    {portfolioCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`portfolio-filter ${activeCategory === category
                                ? 'portfolio-filter-active'
                                : 'portfolio-filter-inactive'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="portfolio-grid">
                    {filteredItems.map((project) => (
                        <PortfolioCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;