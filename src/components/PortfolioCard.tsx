import type { PortfolioType } from '../types/portfolio';
import '../Styles/PortfolioCard.css';

interface PortfolioCardProps {
    project: PortfolioType;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project }) => {
    return (
        <div className="group relative rounded-2xl overflow-hidden cursor-pointer">
            {/* Gradient Background (placeholder for project image) */}
            <div
                className={`aspect-[4/3] bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
            >
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-6 right-6 w-20 h-20 border-2 border-white rounded-full" />
                    <div className="absolute bottom-8 left-8 w-14 h-14 border-2 border-white rounded-lg rotate-12" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white rounded-full" />
                </div>

                {/* Center label */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/80 text-xl sm:text-2xl font-bold tracking-tight text-center px-4">
                        {project.title}
                    </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gray-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6">
                    <p className="text-white/70 text-xs sm:text-sm text-center mb-4 leading-relaxed">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 bg-white/15 backdrop-blur-sm text-white text-[10px] sm:text-xs rounded-full font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <button className="px-5 py-2 bg-white text-gray-900 rounded-full text-xs font-semibold hover:bg-indigo-50 transition-colors">
                        View Project
                    </button>
                </div>
            </div>

            {/* Card Info */}
            <div className="p-4 sm:p-5 bg-white border border-t-0 border-gray-100 rounded-b-2xl">
                <span className="text-indigo-600 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                    {project.category}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mt-1 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                </h3>
            </div>
        </div>
    );
};

export default PortfolioCard;
