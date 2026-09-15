import { HiOutlineCheckCircle } from 'react-icons/hi';

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
        <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-14">
                    <p className="text-indigo-600 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                        Get to Know Us
                    </p>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
                        About Us
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto">
                        Passionate about creating digital experiences that make an impact.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    {/* Left - About Image / Info Card */}
                    <div className="relative">
                        {/* Profile card */}
                        <div className="relative rounded-3xl p-[2px] overflow-hidden shadow-2xl shadow-indigo-600/30 group">
                            {/* Animated Border Lines */}
                            <div
                                className="absolute inset-[-100%] animate-spin bg-[conic-gradient(from_90deg,transparent_0_70%,#38bdf8_85%,#818cf8_100%)]"
                                style={{ animationDuration: '4s' }}
                            />
                            <div
                                className="absolute inset-[-100%] animate-spin bg-[conic-gradient(from_270deg,transparent_0_70%,#e879f9_85%,#c084fc_100%)]"
                                style={{ animationDuration: '4s', animationDelay: '-2s' }}
                            />

                            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-[calc(1.5rem-2px)] p-8 sm:p-10 text-white relative overflow-hidden h-full z-10 w-full">
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                                <div className="relative z-10">
                                    {/* Avatar */}
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-white/20 p-2">
                                        <img src="/image/Infinite-2.png" alt="INFINITE WAVE TECH Logo" className="w-full h-full object-contain filter drop-shadow-md" />
                                    </div>

                                    <h3 className="text-xl sm:text-2xl font-bold mb-2">INFINITE WAVE TECH</h3>
                                    <p className="text-indigo-200 text-sm mb-6">Full-Stack Development & Design</p>

                                    <p className="text-white/80 text-sm leading-relaxed mb-4">
                                        We are a technology and creative solutions company focused on helping businesses build a strong and professional digital presence. We combine technology, creativity, and innovative ideas to deliver solutions tailored to each client's needs.
                                    </p>

                                    <p className="text-white/80 text-sm leading-relaxed mb-6">
                                        Our goal is simple — to understand your requirements, create the right solution, and help your business grow in the digital world.
                                    </p>

                                    <h4 className="text-lg font-semibold text-white mb-2 tracking-wide">Our Approach</h4>

                                    <p className="text-white/80 text-sm leading-relaxed mb-4">
                                        Every business is different. We focus on understanding your goals and delivering solutions that are practical, visually appealing, reliable, and built for growth.
                                    </p>

                                    <p className="text-white/80 text-sm leading-relaxed">
                                        We aim to be more than just a service provider — we aim to be your technology and digital growth partner.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Floating stats */}
                        {/* <div className="absolute -bottom-10 -right-3 sm:right-4 bg-white rounded-xl shadow-xl shadow-gray-200/60 p-4 border border-gray-100 z-20">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center">
                                    <span className="text-indigo-600 font-bold text-sm">4+</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-900">Years</p>
                                    <p className="text-[10px] text-gray-400">Experience</p>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    {/* Right - Skills & Info */}
                    <div>
                        {/* Highlights */}
                        <div className="mb-8">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Why Choose Us</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {highlights.map((item, i) => (
                                    <div key={i} className="flex items-start gap-2.5">
                                        <HiOutlineCheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm text-gray-600">{item}</span>
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
