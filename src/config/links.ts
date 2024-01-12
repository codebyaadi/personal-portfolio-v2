interface NavLink {
    id: number;
    title: string;
    href: string;
};

interface SocailLink {
    id: number;
    name: string;
    url: string;
};

export const navlinks: NavLink[] = [
    {
        id: 1,
        title: "home",
        href: "/",
    },
    {
        id: 2,
        title: "projects",
        href: "/projects",
    },
    {
        id: 3,
        title: "skills",
        href: "/skills",
    },
    {
        id: 4,
        title: "contact",
        href: "/contact",
    },
];

export const socialLinks: SocailLink[] = [
    {
        id: 1,
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/codebyaadi",
    },
    {
        id: 2,
        name: "GitHub",
        url: "https://github.com/codebyaadi",
    },
    {
        id: 3,
        name: "Behance",
        url: "https://www.behance.net/uixaadi",
    },
    {
        id: 4,
        name: "Twitter",
        url: "https://twitter.com/codebyaadi",
    },
    {
        id: 5,
        name: "Instagram",
        url: "https://www.instagram.com/codebyaadi",
    },
    {
        id: 6,
        name: "Dribble",
        url: "https://dribbble.com/uixaadi",
    },
];