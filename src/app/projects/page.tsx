"use client";

import CardProjects from '@/components/elements/CardProjects';
import { mobileApps, webApps } from '@/data/projects_data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PortoDetailModal from '@/components/elements/PortoDetailModal';
import { prefixPath } from '@/lib/utils';
import myLoader from '@/lib/image-loader';
import { Section } from '@/components/ui/section';
import ProjectHero from '@/components/section/projects/HeroSection';

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
            <div
                className="heroSection relative h-screen snap-center flex items-center justify-space-between bg-cover bg-brand-100 bg-center"
            >
                <ProjectHero handleScrollDown={handleScrollDown}/>
            </div>
            <div ref={nextSection} className='mainSection h-fit pt-20 pb-10 bg-cover bg-center'>
                <Section className='flex flex-col justify-space-between'>
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
                                        px-3 py-3 rounded-lg border 
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
                </Section>
            </div>
            {
                selectedUser && (
                    <PortoDetailModal data={selectedUser} onClose={closeModal} />
                )
            }
        </div>
    );
}