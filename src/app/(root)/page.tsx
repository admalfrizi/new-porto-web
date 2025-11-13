"use client"
import LinkIcon from "@/components/LinkIcon";
import PortofolioCard from "@/components/PortofolioCard";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { projects, techStack } from "@/data/list_data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

export default function mainPage() {    
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
    const mainContainer = useRef(null);
    const toAboutMe = useRef<HTMLDivElement>(null);
    const toProjects = useRef<HTMLDivElement>(null);
    const toConnect = useRef<HTMLDivElement>(null);
    const toTechStack = useRef<HTMLDivElement>(null);

    const scrollToAboutMe = () => {
        toAboutMe.current?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    const scrollToProjects = () => {
        toProjects.current?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    const scrollToConnect = () => {
        toConnect.current?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    const scrollToTechStack = () => {
        toTechStack.current?.scrollIntoView({
            behavior: 'smooth'
        });
    };


    React.useEffect(() => {
        if (!api) {
            return
        }
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger, SplitText);

        const heroTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#main", 
                scroller: mainContainer.current,
                start: "top 50%",
                end: "bottom top",
                toggleActions: "restart none restart none",
                onEnter: () => {
                    SplitText.create(".desc-hero", { 
                        type: "words,lines",
                        linesClass: "line",
                        autoSplit: true,
                        mask: "lines",
                        onSplit: (self) => {
                            gsap.from(self.lines, {
                                duration: 0.6,
                                yPercent: 100,
                                opacity: 0,
                                stagger: 0.1,
                                ease: "expo.out",
                                onComplete: () => self.revert()
                            });
                        }
                    });
                },
                onEnterBack: () => {
                    SplitText.create(".desc-hero", { 
                        type: "words,lines",
                        linesClass: "line",
                        autoSplit: true,
                        mask: "lines",
                        onSplit: (self) => {
                            gsap.from(self.lines, {
                                duration: 0.6,
                                yPercent: 100,
                                opacity: 0,
                                stagger: 0.1,
                                ease: "expo.out",
                                onComplete: () => self.revert()
                            });
                        }
                    });
                }
            }
        });

        const techStackTl = gsap.timeline({
            scrollTrigger: {
                trigger: "#techstack", 
                scroller: mainContainer.current,
                start: 'top 80%', 
                end: 'bottom 20%',
                toggleActions: "restart none restart none",
            }
        });

        const letsConnectTl = gsap.timeline({
            scrollTrigger: {
                trigger: "#letsConnect", 
                scroller: mainContainer.current,
                start: 'top 80%', 
                end: 'bottom 20%',
                toggleActions: "restart none restart none",
            }
        });

        

        heroTimeline.from(".title-hero", { 
            opacity: 0,
            y: -60,
            duration: 1,
            ease: 'power3.in',
            stagger: 0.2,
        }, 0)
        .from(".subtitle-hero", {
            opacity: 0,
            y: -60,
            duration: 1,
            ease: 'power3.inOut',
            stagger: 0.2,
        }, 0)
        // .from(".desc-hero", {
        //     opacity: 0,
        //     x: 100,
        //     duration: 2,
        //     ease: 'elastic',
        //     stagger: 0.2,
        // }, 0)
        .from(".btn-hero", {
            opacity: 0,
            y: 60,
            duration: 1.5,
            ease: 'power2.out',
            stagger: 0.2,
        }, 0)

        gsap.from(".about-animation", {
            opacity: 0,
            x: -100,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.2,
            scrollTrigger: {
                trigger: "#aboutme",
                scroller: mainContainer.current,
                start: 'top 80%', 
                end: 'bottom 20%',
                toggleActions: "restart none restart none",
            }
        });

        gsap.from(".project-animation", {
            opacity: 0,
            y: -100,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.2,
            scrollTrigger: {
                trigger: "#projects",
                scroller: mainContainer.current,
                start: 'top 80%', 
                end: 'bottom 20%',
                toggleActions: "restart none restart none",
            }
        });

        techStackTl
            .from(".title-ts", {
                opacity: 0,
                y: -100,
                duration: 1,
                ease: 'power3.inOut',
                stagger: 0.2,
            })
            .from(".icon-ts", {
                opacity: 0,
                y: -60,
                duration: 1,
                ease: 'back.inOut',
                stagger: 0.2,
            },0)
        
        letsConnectTl
            .from(".title-lc",{
                opacity: 0,
                y: -100,
                duration: 1,
                ease: 'power3.inOut',
                stagger: 0.2,
            })
            .from(".desc-lc",{
                opacity: 0,
                x: -100,
                duration: 1,
                ease: 'power3.inOut',
                stagger: 0.2,
            },0)
             .from(".email-lc",{
                opacity: 0,
                y: 100,
                duration: 1,
                ease: 'power3.inOut',
                stagger: 0.2,
            },0)
             .from(".subtitle-lc",{
                opacity: 0,
                y: 100,
                duration: 1,
                ease: 'power3.inOut',
                stagger: 0.2,
            },0)
            .from(".icons-lc",{
                opacity: 0,
                y: 100,
                duration: 1,
                ease: 'power3.inOut',
                stagger: 0.2,
            },0)
            .from(".image-lc",{
                opacity: 0,
                x: 100,
                duration: 1,
                ease: 'power3.inOut',
                stagger: 0.2,
            },0)
        
        gsap.to(".scrollDown", {
            y: 10,
            duration: 0.8,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true,
        })

    }, { scope: mainContainer });
    
    return (
        <div ref={mainContainer} className="snap-y snap-mandatory h-screen overflow-y-scroll scrollbar-hide">
            <section
                id="main"
                className="section1 relative h-screen snap-start flex items-center justify-start bg-cover bg-home bg-center"
            >
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="flex flex-col justify-center z-10 text-start text-brand-900 w-full">
                    <div className="px-5 md:px-24">
                        <h1 className="title-hero text-3xl max-[380px]:text-2xl sm:text-6xl font-bold mb-2 font-main">
                            Welcome To My Home
                        </h1>
                        <div className="max-w-2xl mb-5">
                            <p className="subtitle-hero font-main text-lg sm:text-2xl my-6 max-[380px]:mb-3">
                                My Name is <span className="font-semibold">Adam Alfarizi Ismail</span>
                            </p>
                            <p className="desc-hero leading-relaxed font-main max-[380px]:text-sm lg:text-lg xl:text-xl">
                                Hey, thanks for reaching my website and let me introduce myself. <span className="font-main"> I’m a tech learner</span>, exploring many things
                                in the tech industry, especially in 
                                <span className="font-main font-semibold"> Software Development</span>. My skills
                                include maintaining Web and Mobile apps with great fundamentals in
                                engineering code to enhance <span className="font-main font-semibold"> analytical and logical thinking</span>.
                                I’m doing problem-solving based on specific scenarios on software used
                                to be. I also learn other things to stay <span className="font-main font-semibold"> curious and connected</span> with others.
                                I’m always open to discussing technology, new projects, or just connecting with fellow professionals. Want to know more about my background?.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-x-5 max-[416px]:gap-y-3 w-full">
                            <button
                                className="
                                    btn-hero
                                    flex
                                    items-center
                                    px-8
                                    py-3
                                    border border-transparent
                                    text-sm
                                    font-bold
                                    rounded-full
                                    text-white
                                    md:py-4 md:text-lg md:px-10
                                    bg-brand-50
                                    hover:bg-gray-700
                                    transition-colors 
                                    duration-300 
                                    ease-in-out
                                    cursor-pointer
                                    w-[178px]
                                    md:w-[225px]
                                "
                            >
                                <a> Download my CV </a>
                            </button>
                            <button
                                type="button"
                                onClick={scrollToAboutMe}
                                className="
                                    btn-hero
                                    flex
                                    items-center
                                    px-8
                                    py-3
                                    border border-transparent
                                    text-sm
                                    font-bold
                                    rounded-full
                                    text-white
                                    md:py-4 md:text-lg md:px-10
                                    bg-gray-600
                                    hover:bg-gray-500
                                    transition-colors 
                                    duration-300 
                                    ease-in-out
                                    cursor-pointer
                                    w-[178px]
                                    md:w-fit
                                "
                            >
                                <a> Explore Me </a>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="aboutme"
                ref={toAboutMe}
                className="relative h-screen snap-start flex items-center justify-space-between bg-cover bg-brand-100 bg-center"
            >
                <div className="flex flex-col-reverse md:flex-row py-20 xl:py-0 justify-between w-full px-5 md:px-24 ">
                    <div className="z-10 text-start text-brand-900 content-center mr-15 sm:mr-20 xl:mr-0">
                        <h1 className="about-animation max-sm:text-3xl max-sm:leading-10 max-md:text-4xl max-lg:text-5xl max-lg:leading-16 lg:text-6xl font-bold font-main line-clamp-2">
                            Want to more about me ?
                        </h1>
                        <div className="about-animation max-w-xl my-5 lg:my-8">
                            <p className="leading-relaxed max-sm:text-[16px] max-[1024px]:text-[18px] lg:text-[20px] max-[380px]:text-[14px] font-main">
                                Interested in my background? You can find my full introduction, project portfolio, and more about me on down here.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4 justify-start">
                            <Link
                                href="/about-me"
                                className="
                                about-animation
                                flex
                                items-center
                                w-fit
                                px-8
                                py-3
                                border border-transparent
                                font-bold
                                rounded-full
                                text-white
                                md:py-4 max-[950px]:text-md min-[950px]:text-lg md:px-10
                                bg-brand-50
                                hover:bg-gray-800
                                transition-colors 
                                duration-300 
                                ease-in-out
                                cursor-pointer
                                "
                            >
                                See More
                            </Link>
                            <Button
                                onClick={scrollToProjects}
                                className="
                                about-animation
                                flex
                                items-center
                                w-fit
                                px-8
                                py-3
                                h-fit
                                border border-transparent
                                font-bold
                                rounded-full
                                text-white
                                md:py-4 max-[950px]:text-md min-[950px]:text-lg md:px-10
                                bg-brand-50/50
                                hover:bg-gray-800
                                transition-colors 
                                duration-300 
                                ease-in-out
                                cursor-pointer
                                "
                            >
                                My Projects
                            </Button>
                        </div>    
                    </div>
                    <Image
                        className="about-animation rounded-[20px] mb-5 xl:mb-0 max-[400px]:w-45 max-[950px]:w-65 max-[1024px]:w-80 lg:w-auto"
                        src="/images/profile_1.jpg"
                        alt={""}  
                        width={400}  
                        height={600}                
                    />
                </div>
            </section>
            <section
                id="projects"
                ref={toProjects}
                className="relative h-screen pt-15 snap-start flex items-center justify-space-between bg-cover bg-brand-50 bg-center"
            >
                <div className="px-20 md:my-10 md:px-24 mx-auto flex flex-col w-full">
                    <div className="content-center pb-8">
                        <h1 className="project-animation text-3xl text-center text-white md:text-5xl font-semibold font-main">
                            My Projects
                        </h1>
                    </div>
                    <Carousel className="project-animation w-full mx-auto">
                        <CarouselContent className="h-full">
                            { projects.map((data,idx) => (
                                <CarouselItem key={idx} className="basis-full p-2 pl-4 py-2 pr-2">
                                    <PortofolioCard data={data} />
                                </CarouselItem>
                            )) }
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                    <div className="project-animation w-full flex flex-wrap gap-x-5 justify-start mt-5">
                         <Link
                            href="/projects"
                            className="
                                flex
                                items-center
                                w-fit
                                px-8
                                py-3
                                border border-transparent
                                max-[400px]:text-[12px]
                                text-sm
                                font-bold
                                rounded-full
                                text-white
                                md:py-4 md:text-lg md:px-10
                                bg-brand-100
                                hover:bg-gray-800
                                transition-colors 
                                duration-300 
                                ease-in-out
                                cursor-pointer
                            "
                        >
                            Find More My Projects...
                        </Link>   
                        <Button
                            onClick={scrollToTechStack}
                            className="
                                flex
                                items-center
                                w-fit
                                px-8
                                py-3
                                h-fit
                                border border-transparent
                                font-bold
                                rounded-full
                                text-white
                                md:py-4 max-[950px]:text-md min-[950px]:text-lg md:px-10
                                bg-brand-100/50
                                hover:bg-gray-800
                                transition-colors 
                                duration-300 
                                ease-in-out
                                cursor-pointer
                            "
                        >
                            To Tech Stacks
                        </Button>   
                    </div>
                </div>    
            </section>
            <section
                id="techstack"
                ref={toTechStack}
                className="relative h-screen snap-start flex items-center justify-space-between bg-cover bg-brand-100 bg-center"
            >
                <div className="px-5 md:px-24 w-full max-[1024px]:pt-20">
                    <div className="content-center pb-10 lg:pb-30">
                        <h1 className="title-ts text-3xl text-center text-white md:text-5xl font-semibold font-main">
                             Tech Stack
                        </h1>
                    </div>
                    <div className="max-w-full mx-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-10 gap-x-6">
                        {
                            techStack.map((data, idx) => (
                                <div key={idx} className="icon-ts flex flex-col items-center justify-center gap-2">
                                    <div className="relative w-12 h-12 max-[440px]:w-10 max-[440px]:h-10 md:w-16 md:h-16 rounded-lg flex items-center justify-center text-2xl font-bold text-gray-400">
                                        <Image src={data.icons} className="object-contain" alt="fwfqw" fill />
                                    </div>
                                    <span className="text-sm text-center text-white md:text-base">{data.name}</span>
                                </div>
                            ))
                        }
                    </div>
                </div> 
                <div className="absolute bottom-0 flex flex-col w-full py-4 z-20">
                    <div onClick={scrollToConnect} className="scrollDown cursor-pointer justify-items-center text-white">
                        <p className="text-sm">Let's Connect in Here</p>
                        <ChevronDown />
                    </div>
                </div>   
            </section>
            <section
                id="letsConnect"
                ref={toConnect}
                className="relative h-screen snap-start flex items-center justify-space-between bg-cover bg-brand-50 bg-center"
            >
                <div className="flex flex-col-reverse lg:flex-row pt-0 max-[1024px]:pt-20 justify-between w-full px-5 md:px-24 ">
                    <div className="z-10 text-start text-brand-900 content-center me-0 lg:me-15">
                        <h1 className="title-lc text-4xl lg:text-6xl font-semibold mb-0 lg:mb-2 font-main text-brand-900 max-w-md xl:max-w-xl">
                            Let’s connect with me.
                        </h1>
                        <div className="desc-lc max-w-full lg:max-w-2xl mt-10">
                            <p className="leading-relaxed font-main font-light text-md lg:text-xl">
                                Let me know if you want to connect with me for business and network purposes, 
                                or you want to contact to me for work purposes with my email down here :
                            </p>
                        </div>
                        <div className="email-lc max-w-md xl:max-w-xl mt-4">
                            <p className="leading-relaxed font-main font-semibold text-lg lg:text-lg">
                                adam.alfarizi.2002@gmail.com
                            </p>
                        </div>
                        <div className="subtitle-lc max-w-md xl:max-w-xl my-4">
                            <p className="leading-relaxed font-main font-light text-md lg:text-xl">
                                Link For My Contacts :
                            </p>
                        </div>
                        <div className="icons-lc flex flex-row">
                            <LinkIcon/>
                        </div>
                        
                    </div> 
                    <Image
                        className="image-lc object-contain rounded-[20px] mb-5 xl:mb-0 w-75 max-[512px]:w-65 lg:w-auto"
                        src="/images/let's_connect.jpg"
                        alt={""}
                        width={400}  
                        height={600}                
                    />
                </div>
            </section>
        </div>
        
    )
}

