"use client";

import CardProjects from '@/components/CardProjects';
import { mobileApps, webApps } from '@/data/projects_data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PortoDetailModal from '@/components/PortoDetailModal';

const projectCategory = [
    "Mobile Apps",
    "Website"
]

const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const cardAnimation = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.2 }
};

export default function ProjectsPage() 
{
    const nextSection = useRef<HTMLDivElement>(null);
    const mainContainer = useRef(null);
    const [activeCategory, setActiveCategory] = useState(0);
    const [selectedUser, setSelectedUser] = useState<MyProjects | null>(null);

    const handleScrollDown = () => {
        nextSection.current?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    const openModal = (user: MyProjects) => {
        setSelectedUser(user);
    };


    const closeModal = () => {
        setSelectedUser(null);
    };

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger, SplitText)

        const subtitleHero = () => {
            new SplitText(".subtitle-hero", { 
                type: "words,lines",
                autoSplit: true,
                linesClass: "line",
                mask: "words",
                onSplit: (self) => {
                    gsap.from(self.lines, {
                        duration: 1.5,
                        delay : 0.3,
                        yPercent: -100,
                        opacity: 0,
                        stagger: 0.1,
                        ease: "expo.out",
                    });
                }
            })
        }

        const heroSection = gsap.timeline({
            scrollTrigger: {
                trigger: ".heroSection", 
                scroller: mainContainer.current,
                start: "top 5%",
                end: "bottom 30%",
                toggleActions: "restart none restart none",
                onEnter: subtitleHero,
                onEnterBack: subtitleHero
            }
        })

        const mainSection = gsap.timeline({
            scrollTrigger: {
                trigger: ".mainSection", 
                scroller: mainContainer.current,
                start: "top 100%",
                toggleActions: "restart none restart none",
                
            }
        })

        heroSection
            .from(".title-projects",{
                opacity: 0,
                y: -60,
                duration: 1.5,
                ease: 'power3.out',
                stagger: 0.5,
            })
             .from(".icon_ic", {
                opacity: 0,
                y: -60,
                duration: 1.5,
                ease: 'power3.out',
                stagger: 0.5,
            },0.2)
            .from(".btn-scroll-projects", {
                opacity: 0,
                y: -60,
                duration: 1.5,
                ease: 'power3.out',
                stagger: 0.5,
            },0.8)
           
        
        mainSection
            .from(".title-main", 
                {
                    opacity: 0,
                    y: -60,
                    duration: 1.4,
                    delay: 0.2,
                    ease: 'power3.out',
                    stagger: 0.2,
                }
            )
            .from(".line-title-main", {
                scaleX: 0,
                duration: 1.5,
                ease: 'power3.out',
                transformOrigin: 'left center',
            },0)
    })
        
    return (
        <div ref={mainContainer} className="h-screen overflow-y-scroll scrollbar-hide scroll-smooth">
            <section
                className="heroSection relative h-screen snap-center flex items-center justify-space-between bg-cover bg-brand-100 bg-center"
            >
                <div className="flex flex-col-reverse max-[360px]:mt-0 max-[768px]:pt-10 md:flex-row justify-between w-full px-5 md:px-24 ">
                    <div className="z-10 text-start text-brand-900 content-center mr-15 max-[380px]:mr-0 sm:mr-20 xl:mr-0">
                        <h1 className="
                            title-projects
                            text-6xl 
                            leading-18
                            max-[360px]:line-clamp-2 max-[380px]:text-[28px] 
                            max-[496px]:text-3xl max-[496px]:leading-13
                            max-[1380px]:max-w-lg max-[768px]:text-4xl 
                            max-[1280px]:text-5xl font-bold font-main"
                        >
                            Welcome to My Project !
                        </h1>
                        <div className="max-w-2xl max-[1380px]:max-w-lg my-5 lg:my-8">
                            <p className="
                                subtitle-hero
                                leading-relaxed max-xl:text-lg min-xl:text-2xl 
                                max-[380px]:text-[14px] max-[360px]:text-[12px] 
                                font-light"
                            >
                                Curious about my technical skills? My projects are the best proof. Take a look at my work to see how I approach complex problems, use modern technologies, and turn ideas into reality.
                            </p>
                        </div>
                        <button
                            type='button'
                            onClick={() => handleScrollDown() }
                            className="
                                btn-scroll-projects
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
                            "
                        >
                            <p className='text-center'>Scroll Down</p>
                        </button>      
                    </div>
                    <Image
                        className="icon_ic object-contain rounded-[20px] mb-5 w-120 md:w-150"
                        src="/icons/my_project_ic.svg"
                        alt={""}
                        width={500}
                        height={900}                
                    />
                </div>
            </section>
            <div ref={nextSection} className='mainSection h-fit pt-20 pb-10 px-5 md:px-24 flex flex-col justify-space-between bg-cover bg-center'>
                <div className='flex flex-col w-full pb-10'>
                    <h1 className='title-main mb-3 font-semibold text-4xl text-brand-900'>My Projects</h1>
                    <div className="line-title-main w-47 h-1 bg-brand-900 rounded-full"></div>
                </div>
                <div className='flex flex-wrap max-[474px]:flex-col justify-between'>
                    <div className='max-w-full flex justify-start gap-3'>
                        {
                            projectCategory.map((catData, idx) => (
                                <span 
                                    onClick={() => setActiveCategory(idx)}
                                    key={idx} 
                                    className={`${ activeCategory === idx ? 'bg-span-experience' : 'bg-brand-100 ' }
                                    px-3 py-3 rounded-lg border-1 
                                    border-span text-white cursor-pointer transition-colors duration-300 ease-in-out`}
                                >
                                    {catData}
                                </span>
                            ))
                        }
                    </div>
                    <div className='max-w-lg content-center max-[474px]:mt-6'>
                        <h2 className='mb-3 font-main text-2xl text-brand-900'>{ activeCategory === 0 ? mobileApps.length : webApps.length } Project</h2>
                    </div>
                </div>
                <AnimatePresence>
                    <motion.div 
                        key={activeCategory}
                        variants={containerVariants}
                        initial="initial"
                        exit="exit"
                        whileInView="animate"
                        className='flex flex-col space-y-8 w-full mt-10 max-[474px]:mt-4'
                    >
                        {
                            activeCategory === 0 
                                ?  
                                mobileApps.map((data, index) => (
                                    <motion.div
                                        key={index}
                                        variants={cardAnimation}
                                        initial="initial"
                                        exit="exit"
                                        whileInView="animate"
                                    >
                                        <CardProjects data={data} clickMore={() => openModal(data)}/>
                                    </motion.div>
                                ))
                                :
                                webApps.map((data, index) => (
                                    <motion.div 
                                        key={index}
                                        variants={cardAnimation}
                                        initial="initial"
                                        exit="exit"
                                        whileInView="animate"
                                    >
                                        <CardProjects data={data} clickMore={() => openModal(data)}/>
                                    </motion.div>
                                ))
                        }
                    </motion.div>
                </AnimatePresence>
            </div>
            {
                selectedUser && (
                    <PortoDetailModal data={selectedUser} onClose={closeModal} />
                )
            }
        </div>
    );
}