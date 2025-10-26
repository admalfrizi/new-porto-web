interface Project {
    name: string;
    desc: string;
    imgBackground: string;
    imgForeground: string;
    isMobile: boolean;
    techStack: TechStacks[];
    linkGithub: string;
}

interface TechStacks {
    name: string;
    icons: string;
}