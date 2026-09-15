import { useState } from 'react';
import { HiStar, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { testimonials } from '../data/testimonials';

const Testimonials: React.FC = () => {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-14">
                    <p className="text-indigo-600 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                        Testimonials
                    </p>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
                        What Clients Say
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto">
                        Don't just take my word for it — hear from satisfied clients.
                    </p>
                </div>

                {/* Testimonials Grid - Desktop */}
                <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-5">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white border border-gray-100 hover:border-indigo-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-100/40 hover:-translate-y-1"
                        >
                            {/* Stars */}
                            <div className="flex gap-0.5 mb-4">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <HiStar key={i} className="w-4 h-4 text-amber-400" />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-4">
                                "{testimonial.content}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">{testimonial.name}</p>
                                    <p className="text-xs text-gray-400">
                                        {testimonial.role}, {testimonial.company}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Testimonials Carousel - Mobile */}
                <div className="md:hidden">
                    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                        {/* Stars */}
                        <div className="flex gap-0.5 mb-4">
                            {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                                <HiStar key={i} className="w-4 h-4 text-amber-400" />
                            ))}
                        </div>

                        {/* Quote */}
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            "{testimonials[current].content}"
                        </p>

                        {/* Author */}
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                                {testimonials[current].initials}
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-900">{testimonials[current].name}</p>
                                <p className="text-xs text-gray-400">
                                    {testimonials[current].role}, {testimonials[current].company}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Carousel Controls */}
                    <div className="flex items-center justify-center gap-4 mt-6">
                        <button
                            onClick={prev}
                            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-indigo-50 hover:border-indigo-300 transition-colors"
                        >
                            <HiChevronLeft className="w-5 h-5 text-gray-600" />
                        </button>
                        <div className="flex gap-1.5">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-indigo-600 w-6' : 'bg-gray-300'
                                        }`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={next}
                            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-indigo-50 hover:border-indigo-300 transition-colors"
                        >
                            <HiChevronRight className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
