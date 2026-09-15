import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
    return (
        <div>
            {/* Page Header */}
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
                        Contact Me
                    </h1>
                    <p className="text-amber-100 text-sm sm:text-base max-w-lg mx-auto">
                        Ready to start your project? Get in touch and let's make something amazing together.
                    </p>
                </div>
            </div>

            {/* Contact Section */}
            <Contact />
        </div>
    );
};

export default ContactPage;
