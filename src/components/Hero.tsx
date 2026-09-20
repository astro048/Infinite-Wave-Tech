import { motion, Variants } from 'framer-motion';
import '../Styles/Hero.css';
import HeroImage from "../../public/image/Hero Background2.png"

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const Hero: React.FC = () => {
    const stats = [
        {
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
            ),
            value: '50+',
            label: 'Projects Done',
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
            ),
            value: '30+',
            label: 'Happy Clients',
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                </svg>
            ),
            value: '4+',
            label: 'Years Experience',
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            value: '24/7',
            label: 'Support',
        },
    ];

    return (
        <section
            id="home"
            className="relative flex items-center min-h-screen overflow-hidden"
        >
            {/* Full-width background image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={HeroImage}
                    alt="Hero Background"
                    className="object-cover object-[75%_center] md:object-center w-full h-full"
                />
                {/* Dark overlay — stronger on left/top, lighter on right/bottom */}
                <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#0d0f1e]/95 via-[#0d0f1e]/80 md:via-[#0d0f1e]/70 to-[#0d0f1e]/40 md:to-[#0d0f1e]/30" />
                {/* Extra subtle purple/indigo tint */}
                <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-br from-indigo-900/40 md:from-indigo-900/20 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-32">
                <motion.div
                    className="max-w-xl lg:max-w-2xl"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    {/* Badge */}
                    <motion.div variants={itemVariants} className="mb-6">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white/80 text-xs font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                            Professional Services
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[3.75rem] font-extrabold text-white leading-[1.1] mb-6 tracking-tight"
                    >
                        Build. Design.
                        <br />
                        Grow{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                            Your Brand.
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="max-w-md mb-10 text-base leading-relaxed text-white/60 sm:text-lg"
                    >
                        We provide professional digital services to help businesses grow, stand out and succeed online.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div variants={itemVariants} className="mb-16">
                        <a
                            href="#services"
                            className="inline-flex items-center gap-2.5 bg-indigo-600 hover:bg-indigo-500 text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all shadow-lg shadow-indigo-600/30 hover:shadow-xl hover:shadow-indigo-500/40 group"
                        >
                            Explore Services
                            <svg
                                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap items-center gap-6 sm:gap-8"
                    >
                        {stats.map((stat, i) => (
                            <div key={i} className="flex items-center gap-3 group">
                                <div className="flex items-center justify-center w-10 h-10 transition-colors border rounded-xl text-white/50 group-hover:text-indigo-400 bg-white/10 border-white/10 backdrop-blur-sm">
                                    {stat.icon}
                                </div>
                                <div>
                                    <p className="text-lg font-bold text-white sm:text-xl">{stat.value}</p>
                                    <p className="text-[11px] text-white/50 font-medium">{stat.label}</p>
                                </div>
                                {i < stats.length - 1 && (
                                    <div className="hidden w-px h-8 ml-3 sm:block bg-white/10" />
                                )}
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 z-10 h-24 pointer-events-none bg-gradient-to-t from-white/5 to-transparent" />
        </section>
    );
};

export default Hero;
