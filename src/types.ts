export enum Availability {
    Available = "Available",
    Reserved = "Reserved",
    Sold = "Sold",
}

export interface SiteConfig {
    user: {
        name: string; bio: string; profileImage: string;
    };
    background: {
        color: string; image: string;
    };
    socialLinks: Array<{
        icon: string; url: string; title: string;
    }>;
    links: Array<{
        title: string; url: string; icon: string; description: string;
    }>;
    products: Array<{
        title: string; description: string; url: string; price: number; includePriceOnSite: boolean; image: string; availability: String;
    }>;
}