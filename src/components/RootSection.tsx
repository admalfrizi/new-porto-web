"use client";

import Image from "next/image";
import Link from "next/link";
import LinkIcon from "./LinkIcon";
import { projects, techStack } from "@/data/list_data";
import PortofolioCard from "./PortofolioCard";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselApi } from "./ui/carousel";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function RootSection() 
{
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
    const mainContainer = useRef(null);

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
        gsap.registerPlugin(ScrollTrigger);

        const heroTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#main", 
                scroller: mainContainer.current,
                start: "top 50%",
                end: "bottom top",
                toggleActions: "restart none restart none",
            }
        });

        heroTimeline.from(".title-hero", { 
            opacity: 0,
            x: -100,
            duration: 1,
            ease: 'power3.in',
            stagger: 0.2,
        }, 0)
        .from(".subtitle-hero", {
            opacity: 0,
            y: 60, 
            duration: 1,
            ease: 'power3.inOut',
            stagger: 0.2,
        }, 0)
        .from(".desc-hero", {
            opacity: 0,
            x: 100,
            duration: 1,
            ease: 'elastic',
            stagger: 0.2,
        }, 0)
        .from(".btn-hero", {
            opacity: 0,
            y: 60,
            duration: 1,
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
                        <div className="max-w-xl mb-5">
                            <p className="subtitle-hero font-main text-lg sm:text-2xl my-6 max-[380px]:mb-3">
                                My Name is <span className="font-semibold">Adam Alfarizi Ismail</span>
                            </p>
                            <p className="desc-hero leading-relaxed font-main max-[380px]:text-sm text-lg">
                                Hey, thanks for reaching my website and let me introduce myself. <span className="font-main"> I’m a tech learner</span>, exploring many things
                                in the tech industry, especially in 
                                <span className="font-main font-semibold"> Software Development</span>. My skills
                                include maintaining Web and Mobile apps with great fundamentals in
                                engineering code to enhance <span className="font-main font-semibold"> analytical and logical thinking</span>.
                                I’m doing problem-solving based on specific scenarios on software used
                                to be. I also learn other things to stay <span className="font-main font-semibold"> curious and connected</span> with others.
                                Let’s connect for better networking and great relationships.
                            </p>
                        </div>
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
                                hover:bg-gray-800
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
                    </div>
                </div>
            </section>
            <section
                id="aboutme"
                className="relative h-screen snap-start flex items-center justify-space-between bg-cover bg-brand-100 bg-center"
            >
                <div className="flex flex-col-reverse md:flex-row py-20 xl:py-0 justify-between w-full px-5 md:px-24 ">
                    <div className="z-10 text-start text-brand-900 content-center mr-15 sm:mr-20 xl:mr-0">
                        <h1 className="about-animation max-lg:text-5xl max-lg:leading-16 lg:text-6xl font-bold font-main line-clamp-2">
                            Want to more about me ?
                        </h1>
                        <div className="about-animation max-w-xl my-5 lg:my-8">
                            <p className="leading-relaxed text-[16px] md:text-[20px] max-[380px]:text-[14px] font-main">
                            Interested in my background? You can find my full introduction, project portfolio, and more about me in here.
                            </p>
                        </div>
                        <Link
                            href="/about-me"
                            className="
                            about-animation
                            flex
                            items-center
                            w-40
                            px-8
                            py-3
                            border border-transparent
                            text-sm
                            font-bold
                            rounded-full
                            text-white
                            md:py-4 md:text-lg md:px-10
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
                    </div>
                    <Image
                        className="about-animation rounded-[20px] mb-5 xl:mb-0 max-[890px]:w-70 max-[1024px]:w-80 lg:w-auto"
                        src="/images/profile_1.jpg"
                        alt={""}  
                        width={400}  
                        height={600}                
                    />
                </div>
                 
            </section>
            <section
                id="projects"
                className="relative h-screen pt-15 snap-start flex items-center justify-space-between bg-cover bg-brand-50 bg-center"
            >
                <div className="px-20 md:my-10 md:px-24 mx-auto flex flex-col w-full">
                    <div className="content-center pb-8">
                        <h1 className="text-3xl text-center text-white md:text-5xl font-semibold font-main">
                            My Projects
                        </h1>
                    </div>
                    <Carousel className="w-full mx-auto">
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
                    <div className="w-full mt-5">
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
                    </div>
                </div>    
            </section>
            <section
                id="techstack"
                className="relative h-screen snap-start flex items-center justify-space-between bg-cover bg-brand-100 bg-center"
            >
                <div className="px-5 md:px-24 w-full max-[1024px]:pt-20">
                    <div className="content-center pb-10 lg:pb-30">
                        <h1 className="text-3xl text-center text-white md:text-5xl font-semibold font-main">
                             Tech Stack
                        </h1>
                    </div>
                    <div className="max-w-full mx-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-10 gap-x-6">
                        {
                            techStack.map((data, idx) => (
                                <div key={idx} className="flex flex-col items-center justify-center gap-2">
                                    <div className="relative w-12 h-12 max-[440px]:w-10 max-[440px]:h-10 md:w-16 md:h-16 rounded-lg flex items-center justify-center text-2xl font-bold text-gray-400">
                                        <Image src={data.icons} alt="fwfqw" fill objectFit="contain"/>
                                    </div>
                                    <span className="text-sm text-center text-white md:text-base">{data.name}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>    
            </section>
            <section
                id="letsConnect"
                className="relative h-screen snap-start flex items-center justify-space-between bg-cover bg-brand-50 bg-center"
            >
                <div className="flex flex-col-reverse lg:flex-row pt-0 max-[1024px]:pt-20 justify-between w-full px-5 md:px-24 ">
                    <div className="z-10 text-start text-brand-900 content-center me-0 lg:me-15">
                        <h1 className="text-4xl lg:text-6xl font-semibold mb-0 lg:mb-2 font-main text-brand-900 max-w-md xl:max-w-xl">
                            Let’s connect with me.
                        </h1>
                        <div className="max-w-full lg:max-w-2xl mt-10">
                            <p className="leading-relaxed font-main font-light text-md lg:text-xl">
                                Let me know if you want to connect with me for business and network purposes, 
                                or you want to contact to me for work purposes in my email down here :
                            </p>
                        </div>
                        <div className="max-w-md xl:max-w-xl mt-4">
                            <p className="leading-relaxed font-main font-semibold text-lg lg:text-lg">
                                adam.alfarizi.2002@gmail.com
                            </p>
                        </div>
                        <div className="max-w-md xl:max-w-xl my-4">
                            <p className="leading-relaxed font-main font-light text-md lg:text-xl">
                                Link For My Contacts :
                            </p>
                        </div>
                        <div className="flex flex-row">
                            <LinkIcon/>
                        </div>
                        
                    </div> 
                    <Image
                        className="rounded-[20px] mb-5 xl:mb-0 w-75 max-[512px]:w-65 lg:w-auto"
                        src="/images/let's_connect.jpg"
                        alt={""}  
                        objectFit="contain"
                        width={400}  
                        height={600}                
                    />
                </div>
                 
            </section>
        </div>
        
    )
}