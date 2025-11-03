export const projects : HighlightProject[] = [
    {
        name: 'Biro SDM Web Profile',
        desc: "This is the official portal for the Human Resources Bureau (BSDM) at Universitas Dian Nuswantoro (UDINUS), serving all lecturers and staff. It provides comprehensive information on recruitment, compensation, benefits, performance, and university policies. Access all administrative services and professional development resources in one central hub.",
        imgBackground: "/images/porto/web_1.png",
        imgForeground: "",
        isMobile: false,
        techStack: ["Wordpress", "Divi", "PHP"],
        linkGithub: ""
    },
    {
        name: 'Simpeg UDINUS',
        desc: "Dashboard system admininstration for lecturer data management in Dian Nuswantoro University and It’s consist of information or lecturer such as Publication, Profile Data and Qualification Data.",
        imgBackground: "/images/porto/web_2.jpg",
        imgForeground: "",
        isMobile: false,
        techStack: ["Codeigniter4", "PHP", "MySQL"],
        linkGithub: ""
    }
]

export const techStack: TechStacks[] = [
    {
        name: "Javascript",
        icons: "/icons/javascript_ic.svg"
    },
    {
        name: "PHP",
        icons: "/icons/php_ic.svg"
    },
    {
        name: "Kotlin",
        icons: "/icons/kotlin_ic.svg"
    },
    {
        name: "C#",
        icons: "/icons/csharp_ic.svg"
    },
    {
        name: "MySQL",
        icons: "/icons/mysql.svg"
    },
    {
        name: "PostgreSQL",
        icons: "/icons/postgresql_ic.svg"
    },
    {
        name: "ReactJS",
        icons: "/icons/react_ic.svg"
    },
    {
        name: "NextJS",
        icons: "/icons/nextjs_ic.svg"
    },
    {
        name: "VueJS",
        icons: "/icons/vuejs_ic.svg"
    },
    {
        name: ".NET",
        icons: "/icons/net_ic.svg"
    },
    {
        name: "Laravel",
        icons: "/icons/laravel_ic.svg"
    },
    {
        name: "Codeigniter4",
        icons: "/icons/ci_ic.svg"
    },
    {
        name: "Android Studio",
        icons: "/icons/android_studio_ic.svg"
    },
    {
        name: "Flutter",
        icons: "/icons/flutter_ic.svg"
    },
]

export const skillsData: SkillsData[] = 
[
    {
        type: "Mobile Apps", 
        icons: "/icons/mobile_ic.svg",
        description: "Build an Multiplatform Mobile Apps",
        langFramerwork: [
            "JavaScript",
            "Dart",
            "Kotlin", 
            "Flutter",
            "Android Native",
            "React Native",
            "Dagger2 Hilt",
            "Koin DI",
            "Ktor",
            "Jetpack Compose",
            "Kotlin Multiplatform"
        ],
        tools: ["VSCode","Android Studio","Git", "Gitlab"]
    },
    {    
        type: "Web Dev",
        icons: "/icons/website_ic.svg",
        description: "Build an Website with Modern UI Design",
        langFramerwork: [
            "JavaScript",
            "TypeScript",
            "PHP", 
            "C#", 
            "NodeJS", 
            "ReactJS", 
            "NextJS", 
            "Laravel", 
            "Codeigniter 4",
            "ASP.NET",
            "PostgreSQL",
            "MySQL",
            "TailwindCSS",
            "Bootstrap",
            "MongoDB",
            "HTML",
            "CSS"
        ],
        tools: ["VSCode", "PgAdmin4", "Visual Studio 2022", "Git", "Docker", "Postman"]
    }
];

export const experiences: Experience[] = [
    {
        position: "Software Engineer Intern",
        period: "Jun 2025 - Oct 2025",
        location: "Salatiga, Indonesia",
        company: "PT Formulatrix Indonesia",
        title: "Internship Program",
        description: "Proactively resolved critical bugs in a core ERP system by applying rapidly acquired expertise in ASP.NET and SQL. Within an Agile/Scrum framework, I managed the full issue lifecycle using GitLab and OpenProject for end-to-end tracking. This technical role was enhanced by strong liaison capabilities, performing root cause analysis to align solutions with business requirements and collaborating with developers and BAs to validate production-ready releases.",
        technologies: ["Javascript", "C#", "ASP.NET", "Git"]
    },
    {
        position: "Software Programmer Intern",
        period: "Nov 2023 - Oct 2024",
        location: "Semarang, Jawa Tengah",
        company: "UPT Data Informasi UDINUS",
        title: "Internship Program",
        description: "Spearheaded development and maintenance for the university's HR (WordPress/Divi) and SIMPEG employee data websites, managing lecturer data for KEMENDIKBUD compliance. I successfully optimized complex MySQL queries, significantly improving retrieval performance for thousands of records. I also provided key administrative support for new student registration (PDMK).",
        technologies: ["Wordpress", "Divi", "PHP", "Codeigniter4", "MySQL", "Git"]
    },
    {
        position: "Mobile Developer Intern",
        period: "Feb 2023 - Jul 2023",
        location: "Semarang, Jawa Tengah",
        company: "Center of Excellence UDINUS",
        title: "Internship Program",
        description: "Developed and maintained a reliable Flutter mobile application by collaborating with UI/UX teams to translate business requirements into functional code. I successfully integrated complex AI features via API, implementing a time-series prediction model for waste collection and an intelligent chatbot to answer waste management inquiries.",
        technologies: ["Flutter", "Firebase", "AI", "Chatbot", "Git"]
    },
     {
        position: "IT Helpdesk Support",
        period: "Jan 2019 - Mar 2019",
        location: "Jakarta, Indonesia",
        company: "PT. Hexaon Business Mitrasindo",
        title: "Internship Program",
        description: "Ensured the operational integrity of all computerized facilities by proactively monitoring IT infrastructure and performing rapid maintenance, especially during system outages. I also enhanced system security by identifying and cleansing the email server of suspicious data and potential malware threats to protect employee accounts.",
        technologies: ["IT Engineering", "Computer Hardware"]
    }
]