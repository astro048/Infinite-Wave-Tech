export interface DynamicPageData {
    id: string;
    slug: string;
    type: 'industry' | 'service';
    category: string;
    title: string;
    subtitle: string;
    tagline: string;
    description: string;
    highlights: string[];
    overview: {
        heading: string;
        text: string[];
        stats?: { label: string; value: string }[];
    };
    whatWeProvide: {
        title: string;
        description: string;
        iconName?: string;
        points?: string[];
    }[];
    approach: {
        step: string;
        title: string;
        description: string;
    }[];
    technologies: string[];
    whyChooseUs: {
        title: string;
        description: string;
    }[];
}
