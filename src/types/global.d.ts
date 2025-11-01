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

interface SkillsData {
    type: string;
    icons: string;
    description: string;
    langFramerwork: string[];
    tools: string[];
}

interface Experience {
    position: string;
    period: string;
    location: string;
    company: string;
    title: string;
    description: string;
    technologies: string[];
}