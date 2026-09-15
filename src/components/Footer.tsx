import { useEffect, useRef, useState } from 'react';
import { HiOutlineHeart } from 'react-icons/hi';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import GradientText from './GradientText';

const footerLinks = {
    services: [
        { label: 'Web Development', href: '#services' },
        { label: 'Graphic Design', href: '#services' },
        { label: 'Digital Marketing', href: '#services' },
        { label: 'Video Editing', href: '#services' },
    ],
    company: [
        { label: 'About Studio', href: '#about' },
    ],
    support: [
        { label: 'Contact Us', href: '#contact' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'FAQ', href: '#' },
    ],
};

const socialIcons = [
    { Icon: FaFacebookF, href: 'https://www.facebook.com/people/Infinite-wave-tech/61593959541578/', label: 'Facebook', hoverColor: 'hover:bg-[#1877F2]' },
    { Icon: FaInstagram, href: 'https://www.instagram.com/infinite_wave_tech?igsi=MWVmb3B3a3JpNnRrMQ==', label: 'Instagram', hoverColor: 'hover:bg-[#E4405F]' },
    { Icon: FaWhatsapp, href: 'https://wa.me/917558163869/', label: 'WhatsApp', hoverColor: 'hover:bg-[#25D366]' },
    { Icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/infinitewave-tech-526ba4430/', label: 'LinkedIn', hoverColor: 'hover:bg-[#0A66C2]' },
];

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const footerRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <footer ref={footerRef} className="bg-[#0a0a0a] text-gray-300 relative overflow-hidden font-sans">
            {/* Animated Ambient Glows */}
            <div
                className={`absolute -top-20 left-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl transition-all duration-[2000ms] pointer-events-none ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                    }`}
            />
            <div
                className={`absolute -bottom-20 right-1/4 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl transition-all duration-[2500ms] delay-300 pointer-events-none ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                    }`}
            />

            {/* Main Footer Layer */}
            <div className="relative z-10 px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-20">
                <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5 lg:gap-8">

                    {/* Links Columns */}
                    <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <h4 className="mb-6 text-sm font-semibold tracking-wider text-gray-100 uppercase">Services</h4>
                        <ul className="space-y-4">
                            {footerLinks.services.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-sm text-gray-400 transition-colors duration-300 hover:text-white">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <h4 className="mb-6 text-sm font-semibold tracking-wider text-gray-100 uppercase">Company</h4>
                        <ul className="space-y-4">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-sm text-gray-400 transition-colors duration-300 hover:text-white">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <h4 className="mb-6 text-sm font-semibold tracking-wider text-gray-100 uppercase">Support</h4>
                        <ul className="space-y-4">
                            {footerLinks.support.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-sm text-gray-400 transition-colors duration-300 hover:text-white">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Social Column */}
                    <div className={`col-span-2 md:col-span-3 lg:col-span-2 lg:pl-10 lg:border-l border-gray-800 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="mb-10">
                            <h4 className="mb-3 text-3xl font-bold tracking-tight">
                                <GradientText
                                    colors={["#4F46E5", "#EC4899", "#8B5CF6", "#38ce0a"]}
                                    animationSpeed={3}
                                >
                                    INFINITE WAVE TECH
                                </GradientText>
                            </h4>
                            <p className="max-w-sm mb-6 text-sm leading-relaxed text-gray-400">
                                Let's collaborate to build an incredible digital experience for your brand. Get in touch today.
                            </p>
                            <a href="mailto:hello@infinitewavetech.com" className="inline-block text-xl font-medium text-white transition-colors hover:text-fuchsia-400">
                                hello@infinitewavetech.com
                            </a>
                        </div>

                        <div>
                            <h4 className="mb-4 text-xs font-semibold tracking-widest text-gray-100 uppercase transition-colors cursor-default hover:text-indigo-400">Follow Us</h4>
                            <div className="flex flex-wrap gap-3">
                                {socialIcons.map(({ Icon, href, label, hoverColor }, i) => (
                                    <a
                                        key={label}
                                        href={href}
                                        aria-label={label}
                                        style={{ transitionDelay: isVisible ? `${400 + i * 50}ms` : '0ms' }}
                                        className={`w-10 h-10 rounded-full bg-[#141414] border border-gray-800 flex items-center justify-center text-gray-400 hover:border-transparent hover:text-white transition-all duration-300 ${hoverColor} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
                                    >
                                        <Icon className="w-[18px] h-[18px]" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar (Realme style) */}
            <div className="border-t border-gray-900 bg-[#050505]">
                <div className="flex flex-col items-center justify-between gap-4 px-4 py-5 mx-auto max-w-7xl sm:px-6 lg:px-8 md:flex-row">
                    <div className="flex items-center gap-2.5">
                        <div className="text-sm font-bold tracking-wide">
                            <GradientText
                                colors={["#4F46E5", "#EC4899", "#8B5CF6"]}
                                animationSpeed={3}
                            >
                                INFINITE WAVE TECH
                            </GradientText>
                        </div>
                        <span className="text-gray-800">|</span>
                        <span className="text-gray-500 text-sm flex items-center gap-1.5 hover:text-gray-300 transition-colors cursor-pointer">
                            India (English)
                        </span>
                    </div>

                    <p className="text-xs text-gray-500 sm:text-sm">
                        Copyright © {currentYear} INFINITE WAVE TECH. All rights reserved. Made with <HiOutlineHeart className="w-4 h-4 text-red-500 inline mx-0.5 animate-pulse" />
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
