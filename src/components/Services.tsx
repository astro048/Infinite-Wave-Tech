import ServiceCard from './ServiceCard';
import { services } from '../data/services';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    },
};

const Services: React.FC = () => {
    return (
        <section id="services" className="bg-[#020b14] py-16 text-white sm:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 flex flex-col gap-8 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-2xl">
                        <p className="mb-4 inline-flex rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-sm">
                            What We Offer
                        </p>
                        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                            Our Services
                        </h2>
                        <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                            High quality services to take your business to the next level.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 self-center lg:self-end">
                        <button
                            type="button"
                            aria-label="Previous services"
                            className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-transparent text-xl text-white/80 transition hover:border-white/30 hover:bg-white/5"
                        >
                            &lt;
                        </button>
                        <button
                            type="button"
                            aria-label="Next services"
                            className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-transparent text-xl text-white/80 transition hover:border-white/30 hover:bg-white/5"
                        >
                            &gt;
                        </button>
                    </div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex gap-5 overflow-x-auto pb-2"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={itemVariants}
                            className="min-w-[260px] flex-1"
                        >
                            <ServiceCard service={service} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
