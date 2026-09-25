import { useState, useRef, useEffect } from 'react';
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
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                className={`dropdown-toggle ${isOpen || isItemActive ? 'active' : ''}`}
                onClick={(e) => {
                    e.preventDefault();
                    if (window.innerWidth < 1024) setIsOpen(!isOpen);
                }}
            >
                {item.label}
                <HiChevronDown className={`dropdown-icon ${isOpen ? 'rotate' : ''}`} />
            </button>

            <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
                <div className="dropdown-menu-inner">
                    {item.dropdown?.map((subItem) => (
                        <Link
                            key={subItem.label}
                            to={subItem.href}
                            className={`dropdown-item ${currentPath === subItem.href ? 'active' : ''}`}
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
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;
    const isHome = currentPath === '/';

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (link: any) => {
        setMobileOpen(false);
        setMobileDropdownOpen(null);

        if (isHome && link.section) {
            const el = document.getElementById(link.section);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
                return;
            }
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>

            <div className="navbar-container">
                <div className='logo-wrapper'>
                    {/* Logo */}
                    <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
                        <div className="navbar-logo-container">
                            <img src="/image/Infinite-2.png" alt="INFINITE WAVE TECH Logo" className="navbar-logo" />
                        </div>
                        <div className="navbar-brand">
                            <div className="navbar-brand-text">
                                <span className="navbar-brand-title">
                                    INFINITE WAVE TECH
                                </span>
                                <p className="navbar-brand-subtitle">Innovate. Connect. Elevate</p>
                            </div>
                        </div>

                    </Link>
                </div>


                {/* Desktop Nav Links */}
                <div className="navbar-menu">
                    {navLinks.map((link) => {
                        if (link.dropdown) {
                            return <DropdownMenu key={link.label} item={link} currentPath={currentPath} handleNavClick={handleNavClick} />;
                        }

                        const isLinkActive = currentPath === link.href;

                        return (
                            <Link
                                key={link.label}
                                to={link.href}
                                className={`navbar-link ${isLinkActive ? 'active' : ''}`}
                                onClick={() => handleNavClick(link)}
                            >
                                {link.label}
                            </Link>
                        );
                    })}

                    {/* CTA Button */}
                    <div className="navbar-actions">
                        <a
                            href="https://wa.me/917558163869/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-contact-us"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>

                {/* Mobile menu toggle */}
                <div className="navbar-toggle-container">
                    <button
                        className="navbar-toggle"
                        onClick={() => {
                            setMobileOpen(!mobileOpen);
                            if (mobileOpen) setMobileDropdownOpen(null);
                        }}
                    >
                        {mobileOpen ? <HiX className="navbar-toggle-icon" /> : <HiMenuAlt3 className="navbar-toggle-icon" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="navbar-mobile navbar-mobile-open">
                    <div className="navbar-mobile-content">
                        {navLinks.map((link) => (
                            <div key={link.label}>
                                {link.dropdown ? (
                                    <div className="navbar-mobile-dropdown">
                                        <div 
                                            className="navbar-mobile-dropdown-header"
                                            onClick={() => setMobileDropdownOpen(prev => prev === link.label ? null : link.label)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            {link.label}
                                            <HiChevronDown className={`dropdown-icon ${mobileDropdownOpen === link.label ? 'rotate' : ''}`} />
                                        </div>
                                        {mobileDropdownOpen === link.label && (
                                            <div className="navbar-mobile-dropdown-menu">
                                                {link.dropdown.map(subItem => (
                                                    <Link
                                                        key={subItem.label}
                                                        to={subItem.href}
                                                        className={`navbar-mobile-sublink ${currentPath === subItem.href ? 'active' : ''}`}
                                                        onClick={() => handleNavClick(subItem)}
                                                    >
                                                        {subItem.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        to={link.href}
                                        className={`navbar-mobile-link ${currentPath === link.href ? 'active' : ''}`}
                                        onClick={() => handleNavClick(link)}
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <div className="navbar-mobile-actions">
                            <a
                                href="https://wa.me/917558163869/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-contact-us-mobile"
                                onClick={() => setMobileOpen(false)}
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
