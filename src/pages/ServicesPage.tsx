import Services from '../components/Services';
import Button from '../components/Button';

const ServicesPage: React.FC = () => {
    return (
        <div>
            {/* Page Header */}
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
                        Our Services
                    </h1>
                    <p className="text-indigo-200 text-sm sm:text-base max-w-lg mx-auto mb-6">
                        Comprehensive digital solutions to help your business thrive in the modern world.
                    </p>
                    <Button href="#contact" variant="secondary" className="!bg-white !text-indigo-600 hover:!bg-indigo-50">
                        Get Started
                    </Button>
                </div>
            </div>

            {/* Services Section */}
            <Services />
        </div>
    );
};

export default ServicesPage;
