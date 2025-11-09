"use client";

import SkillsType from '@/components/SkillsType';
import { Card, CardContent } from '@/components/ui/card';
import { experiences, skillsData } from '@/data/list_data';
import { useGSAP } from '@gsap/react';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Image from 'next/image';
import { useRef, useState } from 'react';

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

const pillAnimation = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
    transition: { duration: 0.2 }
};

const aboutmePage = () => {
    const [selectedSkills, setSelectedSkills] = useState(0);
    const lastIdx = experiences.length - 1;
    const nextSection = useRef<HTMLDivElement>(null);
    const mainContainer = useRef(null);

    const handleScrollDown = () => {
        nextSection.current?.scrollIntoView({
            behavior: 'smooth' // This creates the animation
        });
    };

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger, SplitText)

        const mm = gsap.matchMedia();

        mm.add(
            {
                // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
                isDesktop: `(min-width: 1024px)`,
                isTablet: `(max-width: 1024px)`,
                isMobile: `(max-width: 500px)`,
                reduceMotion: "(prefers-reduced-motion: reduce)",
            },
            (context) => {
                // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
                let ctxCheck = context.conditions;

                gsap.to(".box", {
                    rotation: ctxCheck.isDesktop ? 360 : 180, // spin further if desktop
                    duration: reduceMotion ? 0 : 2, // skip to the end if prefers-reduced-motion
                });
            }
        );
        
        const topSection = gsap.timeline({
            scrollTrigger: {
                trigger: ".topSection", 
                scroller: mainContainer.current,
                start: "top 50%",
                end: "bottom top",
                toggleActions: "restart none restart none"
            }
        })

        const whoamiSection = gsap.timeline({
            scrollTrigger: {
                trigger: ".whoamiSection", 
                scroller: mainContainer.current,
                start: "top 100%",
                end: "bottom 0%",
                toggleActions: "restart none restart reset",
                onEnter: () => { new SplitText(".whoami-desc", { 
                    type: "words,lines",
                    autoSplit: true,
                    linesClass: "line",
                    mask: "words",
                    onSplit: (self) => {
                        gsap.from(self.lines, {
                            duration: 2,
                            yPercent: 100,
                            opacity: 0,
                            stagger: 0.1,
                            ease: "expo.out",
                        });
                    }
                })},
                onEnterBack: () => { new SplitText(".whoami-desc", { 
                    type: "words,lines",
                    linesClass: "line",
                    autoSplit: true,
                    mask: "words",
                    onSplit: (self) => {
                        gsap.from(self.lines, {
                            duration: 2,
                            yPercent: 100,
                            opacity: 0,
                            stagger: 0.1,
                            ease: "expo.out",
                        });
                    }
                }) }
            }
        })

        const skillsTechSection = gsap.timeline({
            scrollTrigger: {
                trigger: ".skillsTechSection", 
                scroller: mainContainer.current,
                start: 'top 90%', 
                end: 'bottom 6%',
                toggleActions: "restart none restart none",
            }
        })

        const experienceWorks = gsap.timeline({
            scrollTrigger: {
                trigger: ".experienceSection", 
                scroller: mainContainer.current,
                start: 'top 90%', 
                end: 'bottom 6%',
                toggleActions: "restart none restart none",
            }
        })

        topSection
            .from(".title-am",{
                opacity: 0,
                y: -60,
                duration: 1,
                ease: 'power3.in',
                stagger: 0.2,
            },0)
            .from(".subtitle-am", {
                opacity: 0,
                x: -100,
                duration: 1,
                ease: 'power3.inOut',
                stagger: 0.2,
            },0.5)
            .from(".scrolldown-btn-am",{
                opacity: 0,
                x: -100,
                duration: 1,
                ease: 'power3.inOut',
                stagger: 0.2,
            },0.7)
            .from(".image-am",{
                opacity: 0,
                x: 100,
                duration: 1,
                ease: 'power3.inOut',
                stagger: 0.2,
            },0)
        
        whoamiSection
            .from(".whoamiTitle", 
                {
                    opacity: 0,
                    y: -60,
                    duration: 1.4,
                    delay: 0.2,
                    ease: 'power3.out',
                    stagger: 0.2,
                },0
            )
            .from(".line-animated",
                {
                    scaleX: 0,
                    duration: 1.5,
                    ease: 'power3.out',
                    transformOrigin: 'left center',
                },0
            )
            .from(".whoami-about-me", {
                opacity: 0,
                x: 60,
                duration: 1,
                delay: 0.2,
                ease: 'power3.inOut',
                stagger: 0.2,
            },0)
            // .from(descWhoami.lines, {
            //     duration: 0.4,
            //     opacity: 0,
            //     y: 60,
            //     ease: 'power3.out',
            //     stagger: 0.2
            // },0)
            .from(".whoami-first-image", {
                opacity: 0,
                x: -60,
                duration: 1,
                delay: 0.2,
                ease: 'power3.inOut',
                stagger: 0.2,
            },0)
            .from(".whoami-second-image", {
                scale: 0,
                duration: 1,
                transformOrigin: "center center",
                ease: "power2.inOut"
            },0.5)
            .from(".whoami-third-image", {
                scale: 0,
                duration: 1,
                transformOrigin: "center center",
                ease: "power4.inOut"
            },0.5)
    
        skillsTechSection
            .from(".title-st", {
                opacity: 0,
                y: -60,
                duration: 1.4,
                delay: 0.2,
                ease: 'power3.out',
                stagger: 0.2,
            })
        
        experienceWorks.from(".title-xp", 
                {
                    opacity: 0,
                    y: -60,
                    duration: 1.4,
                    delay: 0.2,
                    ease: 'power3.out',
                    stagger: 0.2,
                },0
            )
            .from(".line-animated",
                {
                    scaleX: 0,
                    duration: 1.5,
                    ease: 'power3.out',
                    transformOrigin: 'left center',
                },0
            ) .from(".dot",{
                scale: 0,
                duration: 1,
                transformOrigin: "center center",
                ease: "power2.inOut"
            },0).from(".line-timeline",{
                scaleX: 0,
                duration: 1.5,
                ease: 'power3.out',
                delay: 1,
                transformOrigin: 'left center',
            },0)
           
    })

    return (
        <div ref={mainContainer} className="h-screen overflow-y-scroll scrollbar-hide scroll-smooth">
            <section
                className="topSection relative h-screen snap-center flex items-center justify-space-between bg-cover bg-brand-100 bg-center"
            >
                <div className="flex flex-col-reverse max-[360px]:mt-0 max-[768px]:pt-10 md:flex-row justify-between w-full px-5 md:px-24 ">
                    <div className="z-10 text-start text-brand-900 content-center mr-15 max-[380px]:mr-0 sm:mr-20 xl:mr-0">
                        <h1 className="title-am text-3xl max-[360px]:line-clamp-2 max-[380px]:text-[28px] md:text-6xl font-bold font-main">
                            Want to more about me ?
                        </h1>
                        <div className="max-w-xl my-5 lg:my-8">
                            <p className="subtitle-am leading-relaxed text-[16px] md:text-[20px] max-[380px]:text-[14px] max-[360px]:text-[12px] max-[360px]:line-clamp-2 font-main">
                                Curious about my work and experience? My full introduction and project portfolio are just a scroll away
                            </p>
                        </div>
                        <button
                            type='button'
                            onClick={() => handleScrollDown() }
                            className="
                                scrolldown-btn-am
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
                        className="image-am rounded-[20px] mb-5 xl:mb-0 w-75 max-[360px]:w-45 max-[512px]:w-60 max-[768px]:w-65 lg:w-auto"
                        src="/images/profile_1.jpg"
                        alt={""}  
                        width={400}  
                        height={600}                
                    />
                </div>
            </section>
            <div ref={nextSection} className='whoamiSection h-fit pt-20 px-5 md:px-24 flex flex-col items-center justify-space-between bg-cover bg-brand-50 bg-center'>
                <div className='flex flex-col w-full pb-10'>
                    <h1 className='whoamiTitle mb-3 font-semibold text-4xl text-brand-900'>Who am I?</h1>
                    <div className="line-animated w-43 h-1 bg-brand-900 rounded-full"></div>
                </div>
                <div className='flex flex-col lg:flex-row justify-between pb-9 w-full'>
                    <div className="relative w-full h-96 md:w-136 md:h-80 lg:w-136 lg:h-126 md:me-10">
                        <div className="whoami-first-image absolute top-0 left-0 w-3/4 h-3/5 max-[375px]:w-4/5 max-[375px]:h-2/5">
                            <Image 
                                src="/images/first.png" 
                                alt="Adam Alfirizi Ismail 1"
                                className="object-cover rounded-lg w-full h-full shadow-lg"
                                fill
                            />
                        </div>
                        <div className="whoami-second-image absolute top-4 md:top-8 right-0 w-2/5 h-3/5 max-[375px]:h-2/4 max-[375px]:top-8">
                            <Image 
                                src="/images/second.JPG"  
                                alt="Adam Alfirizi Ismail 2"
                                className="object-cover rounded-lg w-full h-full shadow-lg"
                                fill
                            />
                        </div>
                        <div className="whoami-third-image absolute bottom-0 left-0 ms-3 sm:ms-6 w-1/3 h-3/5 max-[375px]:h-2/4 max-[375px]:bottom-18">
                            <Image 
                                src="/images/third.JPG"  
                                alt="Adam Alfirizi Ismail 3"
                                className="object-cover rounded-xl w-full h-full shadow-lg"
                                fill
                            />
                        </div>
                        
                    </div>
                    <div className='max-w-2xl mt-20 lg:mt-0  max-[375px]:mt-0'>
                        <div className='mb-8'>
                            <h4 className='whoami-about-me font-semibold text-4xl text-brand-900'>Adam Alfarizi Ismail</h4>
                        </div>
                        <p className="whoami-desc text-base font-light md:text-lg lg:text-xl lg:max-w-3xl text-brand-900 leading-6 space-y-4">
                            <span> Hey, I'm Adam Alfarizi Ismail, an <span className="font-semibold">Software Developer</span> or <span className="font-semibold">Engineer</span> with
                            1.5 years experience built from internship work which provided a
                            strong fundamentals and analytical thinking to practice a problem
                            solving in a different scope area of industry. </span>
                            <span>
                            My work is specialize in <span className="font-semibold">Mobile Apps</span> with
                            different tech stack such as <span className="font-semibold">native</span> and <span className="font-semibold">multiplatform</span>.
                            In every project, I am responsible for implementing robust and
                            scalable solutions, applying my knowledge of <span className="font-semibold">clean architecture</span> and <span className="font-semibold">SOLID principles</span>.
                            </span>
                            <span> Beyond that, I also skilled in <span className="font-semibold">Web Development</span> for both <span className="font-semibold">Frontend</span> and <span className="font-semibold">Backend</span> in
                            order to fulfill the basic strategy when doing work with API and
                            Website. Being a tech learner not just improve my skills to adapt
                            with industry standard, but also respect the value of the
                            learning itself, so don't stop learning until you think it.
                            </span>
                        </p>
                    </div>
                    
                </div>
            </div>
            <div className='skillsTechSection h-fit px-5 md:px-24 py-20 flex flex-col items-center bg-cover bg-brand-50 bg-center'>
                <div className='flex flex-col w-full'>
                    <h1 className='title-st mb-3 font-semibold text-4xl max-[380px]:text-3xl text-brand-900'>Skills and Tech Stack</h1>
                    <div className="w-84 max-[380px]:w-70 h-1 bg-brand-900 rounded-full"/>
                </div>
                <div className='w-full mx-auto flex justify-center mt-15 max-[447px]:mx-3'>
                    <div className='flex flex-row space-x-20 max-[380px]:space-x-4 max-[473px]:space-x-10 max-[430px]:space-x-4'>
                        {
                            skillsData.map((data, index) => (
                                <SkillsType 
                                    key={index} 
                                    icons={data.icons} 
                                    skillName={data.type} 
                                    skillDesc={data.description} 
                                    isSelected={selectedSkills === index}
                                    onClick={() => setSelectedSkills(index)}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className='w-full mx-auto pt-20'>
                    <h6 className='mb-3 font-medium text-center text-3xl max-[380px]:text-3xl text-brand-900'>Language and Frameworks</h6>
                    <AnimatePresence mode='wait'>
                        <motion.div 
                            key={selectedSkills} 
                            className='max-w-full mx-auto flex flex-wrap justify-center gap-x-3 gap-y-6 mt-8'
                            variants={containerVariants}
                            initial="initial"
                            exit="exit"
                            whileInView="animate"
                        >
                            {
                                skillsData[selectedSkills].langFramerwork.map((lang, idx) => (
                                    <motion.span 
                                        key={lang} 
                                        variants={pillAnimation}
                                        className='bg-brand-100 px-3 py-3 rounded-lg border-1 border-span text-white'
                                    >
                                        {lang}
                                    </motion.span>
                                ))
                            }
                        </motion.div>
                    </AnimatePresence>
                    
                </div>
                <div className='w-full mx-auto pt-10'>
                    <h6 className='mb-3 font-medium text-center text-3xl max-[380px]:text-3xl text-brand-900'>Tools Apps</h6>
                    <AnimatePresence mode='wait'>
                        <motion.div 
                            key={selectedSkills} 
                            variants={containerVariants}
                            initial="initial"
                            exit="exit"
                            whileInView="animate"
                            className='max-w-full mx-auto flex flex-wrap justify-center gap-3 mt-8'
                        >
                            {
                                skillsData[selectedSkills].tools.map((lang, idx) => (
                                    <motion.span 
                                        key={idx}  
                                        variants={pillAnimation}
                                        className='span-ts bg-brand-100 px-3 py-3 rounded-lg border-1 border-span text-white'
                                    >
                                        {lang}
                                    </motion.span >
                                ))
                            }
                        </motion.div >
                    </AnimatePresence>
                    
                </div>
            </div>
            <div className='experienceSection h-130 max-[480px]:h-fit px-5 md:px-24 py-8 max-[480px]:py-0 max-[480px]:pt-8 flex flex-col items-center bg-cover bg-brand-50 bg-center'>
                <div className='flex flex-col w-full'>
                    <h1 className='title-xp mb-3 font-semibold text-4xl max-[380px]:text-3xl text-brand-900'>Work Experience</h1>
                    <div className="w-69 max-[380px]:w-58 h-1 bg-brand-900 rounded-full"/>
                </div>
                <div className='w-full overflow-x-auto max-[480px]:overflow-y-auto scrollbar-hide py-5 h-full'>
                    <div className="relative inline-flex flex-nowrap min-w-full py-4">
                        <div className="line-timeline absolute top-4/4 max-[480px]:top-4 max-[480px]:left-2.5 left-0 w-full h-2 max-[480px]:w-2 max-[480px]:h-6/8 bg-brand-900 rounded-full z-0"></div>
                        <div className="relative flex max-[480px]:flex-col justify-between w-fit max-[480px]:w-screen max-[480px]:h-fit z-10">
                            {
                                experiences.map((exp, index) => (
                                    <div key={index} className="relative top-8.5 max-[480px]:top-0 w-120 max-[480px]:h-80 flex flex-col items-left">
                                        <div className="dot w-7 h-7 bg-inside-dot dark:bg-blue-500 rounded-full border-5 border-brand-900"></div>
                                        <div className={`absolute top-10 max-[480px]:top-0 max-[480px]:left-12 ${lastIdx === index ? 'max-[480px]:h-fit min-[480px]:w-8/8' : 'max-[480px]:h-fit min-[480px]:w-7/8'} cursor-pointer text-left text-brand-900 p-5 bg-card-experience rounded-lg shadow-lg`}>
                                            <div className='flex flex-row justify-between content-center'>
                                                <span className="text-lg font-bold ">{exp.company}</span>
                                                <p className='text-[14px] content-center'>{exp.period}</p>
                                            </div>
                                            <div className='flex flex-row space-x-1.5 w-full text-left pt-2 pb-3'>
                                                <p className='text-[14px]'><span className="font-semibold">{exp.position}</span></p>
                                                <p className='text-[14px]'>|</p>
                                                <p className='text-[14px]'>{exp.location}</p>
                                            </div>
                                            <div className='max-w-md  line-clamp-4'>
                                                <p className='max-[480px]:text-[14px] text-md font-light'>
                                                    {exp.description}
                                                </p>
                                                
                                            </div>
                                            <div className='flex flex-row max-[480px]:flex-wrap max-[480px]:gap-y-3 space-x-3 overflow-x-scroll scrollbar-hide w-full pt-5'>
                                                {
                                                    exp.technologies.map((tech, techIndex) => (
                                                        <span key={techIndex} className='bg-span-experience content-center py-1.5 w-fit px-3 max-[480px]:text-[10px] text-[12px] rounded-lg text-white'>
                                                            {tech}
                                                        </span>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-fit px-5 md:px-24 py-10 flex flex-col items-center bg-cover bg-brand-50 bg-center'>
                <div className='flex flex-col w-full'>
                    <h1 className='mb-3 font-semibold text-4xl max-[380px]:text-3xl text-brand-900'>Education</h1>
                    <div className="w-41 max-[380px]:w-34 h-1 bg-brand-900 rounded-full"/>
                </div>
                <div className='flex justify-center w-full'>
                    <Card className="mt-10 p-0 bg-brand-100 backdrop-blur-sm border-white/10 content-center">
                        <CardContent className='px-0'>
                            <div className="flex flex-col lg:flex-row w-full rounded-lg min-h-100 text-white overflow-hidden">
                                <div className="flex flex-row rounded-lg w-full">
                                    <div className="flex w-1/3 md:mb-0">
                                        <Image
                                            src="/images/first_image.jpg"
                                            alt="Main image description"
                                            width={350}
                                            height={300}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex w-1/3">
                                        <Image
                                            src="/images/second_image.jpg"
                                            alt="Secondary image description"
                                            width={300}
                                            height={300}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex w-1/3">
                                        <Image
                                            src="/images/third_image.jpg"
                                            alt="Secondary image description"
                                            width={300}
                                            height={300}
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col content-center w-full max-[360px]:p-3 max-[512px]:p-3 max-[512px]:ms-0 max-md:py-3 ms-6 md:pe-6 md:py-6">
                                    <div className="font-light pb-3 text-brand-900">
                                        <p className='text-lg max-[360px]:text-[13px]'>Aug 2020 - Apr 2025</p>
                                    </div>
                                    <div className="font-bold pb-3 text-brand-900">
                                        <h1 className='text-2xl max-[360px]:text-lg lg:text-4xl'>
                                            Universitas Dian Nuswantoro
                                        </h1>
                                    </div>
                                    <div className='max-w-xl text-brand-900'>
                                        <p className='text-lg max-[360px]:text-[13px]'>S1 Teknik Informatika - Computer Science</p>
                                    </div>
                                    <div className='flex flex-row space-x-4 py-3 w-full text-left text-brand-900'>
                                        <p className='text-lg max-[360px]:text-[13px]'>Semarang, Jawa Tengah</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default aboutmePage;