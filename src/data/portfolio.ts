import type { PortfolioType } from '../types/portfolio';

export const portfolioItems: PortfolioType[] = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        category: 'Web Development',
        description: 'A full-featured online store with payment integration, inventory management, and responsive design.',
        gradient: 'from-indigo-500 to-purple-600',
        tags: ['React', 'Node.js', 'Stripe'],
    },
    {
        id: 2,
        title: 'Brand Identity Suite',
        category: 'Branding',
        description: 'Complete brand identity including logo, color palette, typography, and brand guidelines.',
        gradient: 'from-orange-400 to-pink-500',
        tags: ['Illustrator', 'Photoshop', 'Branding'],
    },
    {
        id: 3,
        title: 'Marketing Dashboard',
        category: 'UI/UX Design',
        description: 'Interactive analytics dashboard with real-time data visualization and reporting tools.',
        gradient: 'from-emerald-400 to-cyan-500',
        tags: ['Figma', 'React', 'D3.js'],
    },
    {
        id: 4,
        title: 'Social Media Campaign',
        category: 'Digital Marketing',
        description: 'Multi-platform social media campaign that increased engagement by 300% in 3 months.',
        gradient: 'from-violet-500 to-indigo-600',
        tags: ['Strategy', 'Content', 'Ads'],
    },
    {
        id: 5,
        title: 'Restaurant App',
        category: 'Mobile App',
        description: 'Food ordering app with real-time tracking, reviews, and seamless payment integration.',
        gradient: 'from-rose-400 to-red-500',
        tags: ['React Native', 'Firebase', 'UX'],
    },
    {
        id: 6,
        title: 'Corporate Website',
        category: 'Web Development',
        description: 'Professional corporate website with CMS, blog, and multi-language support.',
        gradient: 'from-blue-500 to-sky-400',
        tags: ['Next.js', 'CMS', 'SEO'],
    },
];

export const portfolioCategories = [
    'All',
    'Web Development',
    'Branding',
    'UI/UX Design',
    'Digital Marketing',
    'Mobile App',
];
