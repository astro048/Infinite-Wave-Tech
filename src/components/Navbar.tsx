import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX, HiChevronDown } from 'react-icons/hi';
import '../Styles/Navbar.css';

const navLinks = [
    { label: 'Home', href: '/', section: 'home' },
    { label: 'About Us', href: '/#about', section: 'about' },
    {
        label: 'Industries',
        href: '#',
        dropdown: [
            { label: 'Banking', href: '/industries/banking' },
            { label: 'Capital Markets', href: '/industries/capital-markets' },
            { label: 'Enterprise Technology', href: '/industries/enterprise-technology' },
            { label: 'Healthcare', href: '/industries/healthcare' },
            { label: 'Logistics', href: '/industries/logistics' },
            { label: 'Manufacturing', href: '/industries/manufacturing' }
        ]
    },
    {
        label: 'Services',
        href: '#',
        dropdown: [
            { label: 'Managed IT', href: '/services/managed-it' },
            { label: 'IT Support', href: '/services/it-support' },
            { label: 'IT Consultancy', href: '/services/it-consultancy' },
            { label: 'Cloud Computing', href: '/services/cloud-computing' },
            { label: 'Cyber Security', href: '/services/cyber-security' },
            { label: 'Custom Software', href: '/services/custom-software' },
            { label: 'Mobile Application', href: '/services/mobile-application' },
            { label: 'Web Application', href: '/services/web-application' },
            { label: 'AI & DevOps', href: '/services/ai-devops' }
        ]
    },
    { label: 'Technology', href: '/technology' },
    { label: 'Careers', href: '/#careers', section: 'careers' },
];

const DropdownMenu = ({
    item,
    currentPath,
    handleNavClick
}: {
    item: typeof navLinks[0],
    currentPath: string,
    handleNavClick: (link: any) => void
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 200);
    };

    const isItemActive = item.dropdown?.some(sub => currentPath === sub.href);

    return (
        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                className={`flex items-center gap-1 relative px-3.5 py-2 text-[15px] font-medium transition-colors rounded-lg
                    ${isOpen || isItemActive ? 'text-[#6366F1]' : 'text-[#1F2937] hover:text-[#3416f2]'}
                `}
                onClick={(e) => {
                    e.preventDefault();
                    if (window.innerWidth < 1024) setIsOpen(!isOpen);
                }}
            >
                {item.label}
                <HiChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <div
                className={`absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-200 origin-top-left z-50
                    ${isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}
                `}
            >
                <div className="py-2">
                    {item.dropdown?.map((subItem) => (
                        <Link
                            key={subItem.label}
                            to={subItem.href}
                            className={`block px-5 py-2.5 text-[15px] font-medium transition-colors
                                ${currentPath === subItem.href ? 'text-[#6366F1] font-semibold bg-indigo-50/50' : 'text-[#374151] hover:text-[#3416f2] hover:bg-gray-50'}
                            `}
                            onClick={() => {
                                handleNavClick(subItem);
                                setIsOpen(false);
                            }}
                        >
                            {subItem.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Navbar: React.FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;
    const isHome = currentPath === '/';

    const handleNavClick = (link: any) => {
        setMobileOpen(false);

        if (isHome && link.section) {
            const el = document.getElementById(link.section);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
                return;
            }
        }
    };

    return (
        <nav className="w-full bg-[#f8f9fa]/90 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10">
                        <img src="/image/Infinite-2.png" alt="INFINITE WAVE TECH Logo" className="object-contain w-full h-full" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center mb-0.5">
                            <span className="text-[17px] font-bold text-[#111827] tracking-tight whitespace-nowrap">
                                INFINITE WAVE TECH
                            </span>
                        </div>
                        <p className="text-[10px] text-gray-400 font-medium tracking-wide leading-none">Innovate. Connect. Elevate</p>
                    </div>
                </Link>

                {/* Desktop Nav Links */}
                <div className="items-center hidden gap-2 lg:flex">
                    {navLinks.map((link) => {
                        if (link.dropdown) {
                            return <DropdownMenu key={link.label} item={link} currentPath={currentPath} handleNavClick={handleNavClick} />;
                        }

                        const isLinkActive = currentPath === link.href;

                        return (
                            <Link
                                key={link.label}
                                to={link.href}
                                className={`relative px-3.5 py-2 text-[15px] font-medium transition-colors rounded-lg ${isLinkActive
                                    ? 'text-[#6366F1] font-semibold'
                                    : 'text-[#1F2937] hover:text-[#3416f2]'
                                    }`}
                                onClick={() => handleNavClick(link)}
                            >
                                {link.label}
                            </Link>
                        );
                    })}

                    {/* CTA Button */}
                    <div className="flex items-center ml-4">
                        <a
                            href="https://wa.me/917558163869/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:flex border border-gray-300 bg-transparent hover:bg-gray-50 text-[#111827] px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-sm items-center gap-2"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>

                {/* Mobile menu toggle */}
                <div className="flex items-center gap-3 lg:hidden">
                    <button
                        className="p-2 transition-colors rounded-lg hover:bg-gray-100"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1 shadow-lg absolute w-full max-h-[80vh] overflow-y-auto">
                    {navLinks.map((link) => (
                        <div key={link.label}>
                            {link.dropdown ? (
                                <div className="space-y-1">
                                    <div className="px-4 py-2.5 text-sm font-semibold text-gray-900 border-b border-gray-50 flex justify-between items-center">
                                        {link.label}
                                        <HiChevronDown className="w-4 h-4" />
                                    </div>
                                    <div className="pb-2 pl-4 space-y-1 rounded-lg bg-gray-50">
                                        {link.dropdown.map(subItem => (
                                            <Link
                                                key={subItem.label}
                                                to={subItem.href}
                                                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${currentPath === subItem.href
                                                    ? 'text-[#6366F1] bg-indigo-50 font-semibold'
                                                    : 'text-gray-600 hover:text-gray-900'
                                                    }`}
                                                onClick={() => handleNavClick(subItem)}
                                            >
                                                {subItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    to={link.href}
                                    className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${currentPath === link.href
                                        ? 'text-[#6366F1] bg-indigo-50 font-semibold'
                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                        }`}
                                    onClick={() => handleNavClick(link)}
                                >
                                    {link.label}
                                </Link>
                            )}
                        </div>
                    ))}
                    <div className="pt-4 mt-2 border-t border-gray-100">
                        <a
                            href="https://wa.me/917558163869/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full border border-gray-300 bg-transparent text-[#111827] px-5 py-2.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2 hover:bg-gray-50"
                            onClick={() => setMobileOpen(false)}
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
