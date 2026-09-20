import { useRef, useState } from "react";
import ServiceCard from "./ServiceCard";
import { services } from "../data/services";
import { motion, Variants } from "framer-motion";
import TechnologyUsed from "./TechnologyUsed";
import '../Styles/Services.css';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const Services: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToCard = (direction: "prev" | "next") => {
    const container = scrollContainerRef.current;

    if (!container) return;

    const cards = container.querySelectorAll<HTMLElement>(
      "[data-service-card]"
    );

    if (!cards.length) return;

    let newIndex =
      direction === "next"
        ? currentIndex + 1
        : currentIndex - 1;

    newIndex = Math.max(0, Math.min(newIndex, cards.length - 1));

    const card = cards[newIndex];

    container.scrollTo({
      left: card.offsetLeft,
      behavior: "smooth",
    });

    setCurrentIndex(newIndex);
  };

  const handlePrev = () => {
    scrollToCard("prev");
  };

  const handleNext = () => {
    scrollToCard("next");
  };

  return (
    <>
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <div className="services-title-block">
            <p className="bg-white text-black inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Solutions</p>
            <h2 className="services-heading">Our Development Process</h2>
            <p className="services-description">We build smart, scalable web applications through proven methodologies, ensuring performance, security, and business alignment.</p>
          </div>

          <div className="services-nav">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous service"
              className="services-nav-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={currentIndex >= services.length - 1}
              aria-label="Next service"
              className="services-nav-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>

        {/* Horizontal Services Slider */}
        <motion.div
          ref={scrollContainerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex gap-6 pb-2 overflow-x-auto  scroll-smooth scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              data-service-card
              variants={itemVariants}
              className="
                min-w-[85%]
                sm:min-w-[48%]
                lg:min-w-[32%]
                xl:min-w-[32%]
              "
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
      <TechnologyUsed />
    </>
  );
};

export default Services;