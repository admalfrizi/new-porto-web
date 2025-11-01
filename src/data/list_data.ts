export const projects : Project[] = [
    {
        name: 'Biro SDM Web Profile',
        desc: "This is the official portal for the Human Resources Bureau (BSDM) at Universitas Dian Nuswantoro (UDINUS), serving all lecturers and staff. It provides comprehensive information on recruitment, compensation, benefits, performance, and university policies. Access all administrative services and professional development resources in one central hub.",
        imgBackground: "/images/porto/web_1.png",
        imgForeground: "",
        isMobile: false,
        techStack: [
            {
                name: "Wordpress",
                icons: "/icons/wordpress_ic.svg"
            },
            {
                name: "PHP",
                icons: "/icons/php_ic.svg"
            }
        ],
        linkGithub: ""
    },
    {
        name: 'Simpeg UDINUS',
        desc: "Dashboard system admininstration for lecturer data management in Dian Nuswantoro University and It’s consist of information or lecturer such as Publication, Profile Data and Qualification Data.",
        imgBackground: "/images/porto/web_2.jpg",
        imgForeground: "",
        isMobile: false,
        techStack: [
            {
                name: "Codeigniter 4",
                icons: "/icons/ci_ic.svg"
            },
            {
                name: "PHP",
                icons: "/icons/php_ic.svg"
            }
        ],
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