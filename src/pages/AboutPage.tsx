import About from '../components/About';

const AboutPage: React.FC = () => {
    return (
        <div>
            {/* Page Header */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
                        About Me
                    </h1>
                    <p className="text-emerald-200 text-sm sm:text-base max-w-lg mx-auto">
                        Learn more about my journey, skills, and passion for creating digital experiences.
                    </p>
                </div>
            </div>

            {/* About Section */}
            <About />
        </div>
    );
};

export default AboutPage;
