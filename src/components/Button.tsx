import type { ReactNode } from 'react';
import '../Styles/Button.css';

interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    onClick?: () => void;
    className?: string;
    fullWidth?: boolean;
}

const variants = {
    primary:
        'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/25 hover:shadow-xl hover:shadow-indigo-600/30',
    secondary:
        'bg-gray-900 hover:bg-gray-800 text-white shadow-lg shadow-gray-900/25',
    outline:
        'border-2 border-gray-200 hover:border-indigo-400 text-gray-700 hover:text-indigo-600 bg-transparent',
};

const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-7 py-3.5 text-sm',
};

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    href,
    onClick,
    className = '',
    fullWidth = false,
}) => {
    const baseClasses = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 group ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

    if (href) {
        return (
            <a href={href} className={baseClasses}>
                {children}
                <svg
                    className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </a>
        );
    }

    return (
        <button type="button" className={baseClasses} onClick={onClick}>
            {children}
            <svg
                className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </button>
    );
};

export default Button;
