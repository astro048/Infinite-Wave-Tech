import { useState } from 'react';
import PortfolioCard from './PortfolioCard';
import { portfolioItems, portfolioCategories } from '../data/portfolio';

const Portfolio: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredItems =
        activeCategory === 'All'
            ? portfolioItems
            : portfolioItems.filter((item) => item.category === activeCategory);

    return (
        <section id="portfolio" className="py-16 sm:py-20 lg:py-24 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-10 sm:mb-12">
                    <p className="text-indigo-600 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                        Recent Work
                    </p>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
                        My Portfolio
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto">
                        Check out some of my recent projects and creative work.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {portfolioCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${activeCategory === category
                                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                                    : 'bg-white text-gray-500 hover:text-indigo-600 border border-gray-200 hover:border-indigo-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {filteredItems.map((project) => (
                        <PortfolioCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
