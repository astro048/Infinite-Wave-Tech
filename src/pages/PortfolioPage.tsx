import Portfolio from '../components/Portfolio';

const PortfolioPage: React.FC = () => {
    return (
        <div>
            {/* Page Header */}
            <div className="bg-gradient-to-br from-purple-600 to-indigo-700 py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
                        My Portfolio
                    </h1>
                    <p className="text-indigo-200 text-sm sm:text-base max-w-lg mx-auto">
                        A showcase of my best work across web development, design, and marketing.
                    </p>
                </div>
            </div>

            {/* Portfolio Section */}
            <Portfolio />
        </div>
    );
};

export default PortfolioPage;
