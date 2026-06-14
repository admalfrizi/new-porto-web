"use client";

import { Card, CardContent } from '@/components/ui/card';
import { experiences, skillsData } from '@/data/list_data';
import { prefixPath } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Image from 'next/image';
import { useRef, useState } from 'react';
import myLoader from './../../lib/image-loader';
import { Section } from '@/components/ui/section';
import WorkExperience from '@/components/section/about-me/WorkExperience';
import SectionTitle from '@/components/elements/SectionTitle';
import SkillsTechStack from '@/components/section/about-me/SkillsandTechStack';
import WhoAmI from '@/components/section/about-me/WhoAmI';
import AboutMeHero from '@/components/section/about-me/HeroSection';
import Education from '@/components/section/about-me/Education';

const aboutmePage = () => {
    const [selectedSkills, setSelectedSkills] = useState(0);
    const lastIdx = experiences.length - 1;
    const nextSection = useRef<HTMLDivElement>(null);
    const mainContainer = useRef(null);

    const handleScrollDown = () => {
        nextSection.current?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger, SplitText)

        const mm = gsap.matchMedia();

        const experienceWorks = gsap.timeline({
            scrollTrigger: {
                trigger: ".experienceSection", 
                scroller: mainContainer.current,
                start: 'top 90%', 
                end: 'bottom 6%',
                toggleActions: "restart none restart none",
            }
        })

        mm.add(
            {
                isDesktop: `(min-width: 768px)`,
                isMobile: `(max-width: 768px)`,
            },
            (context) => {
                
                const checkIf = context.conditions;

                const lineinXp = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".experienceSection", 
                        scroller: mainContainer.current,
                        start: 'top 90%', 
                        end: 'bottom 6%',
                        toggleActions: "restart none restart none",
                    }
                })

                lineinXp.from(".line-timeline",{
                    scaleX: checkIf?.isMobile ? 1 : 0,
                    scaleY: checkIf?.isMobile ? 0 : 1,
                    transformOrigin: checkIf?.isMobile ? "top" : "left",
                    duration: 1,
                    delay: 0.4,
                    ease: "power2.inOut"
                })
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
            ).from(".dot",{
                scale: 0,
                duration: 1,
                transformOrigin: "center center",
                ease: "power2.inOut"
            },0)
            .from(".experienceCard",{
                scale: 0,
                duration: 1,
                transformOrigin: "center center",
                ease: "power2.inOut"
            },0)
        
    })

    return (
        <div ref={mainContainer} className="h-screen overflow-y-scroll scrollbar-hide scroll-smooth">
            <div
                className="topSection relative h-screen snap-center flex items-center justify-space-between bg-cover bg-brand-100 bg-center"
            >
                <AboutMeHero handleScrollDown={handleScrollDown}/>
            </div>
            <div ref={nextSection} className='whoamiSection h-fit pt-20 bg-cover bg-brand-50 bg-center'>
                <Section className='flex flex-col items-center justify-space-between pb-10'>
                    <SectionTitle classTitle='whoamiTitle' title={'Who am I?'} width={'line-animated w-43'} />
                    <WhoAmI 
                        firstImgClass={'whoami-first-image'} 
                        secondImgClass={'whoami-second-image'} 
                        thirdImgClass={'whoami-third-image'} 
                        whoAmIAboutMe={'whoami-about-me'} 
                        whoAmIDesc={'whoami-desc'}                    
                    />
                </Section>
            </div>
            <div className='skillsTechSection h-fit py-20 bg-cover bg-brand-50 bg-center'>
                <Section className='flex flex-col items-center'>
                    <SectionTitle classTitle='title-st' width='w-84' title="Skills and Tech Stack"/>
                    <SkillsTechStack 
                        skillsData={skillsData}
                        selectedSkills={selectedSkills}
                        setSelectedSkills={setSelectedSkills}
                    />
                </Section>
            </div>
            <div className='experienceSection h-fit max-[768px]:h-fit py-8 max-[768px]:py-0 max-[768px]:pt-8 bg-cover bg-brand-50 bg-center'>
                <Section className='flex flex-col items-center'>
                    <SectionTitle classTitle="title-xp" width='w-69' title="Work Experience"/>
                    <WorkExperience data={experiences} lastIdx={lastIdx}/>
                </Section>
            </div>
            <div className='h-fit px-5 md:px-24 py-10 bg-cover bg-brand-50 bg-center'>
                <Section className='flex flex-col items-center'>
                    <SectionTitle title={'Education'} width={'w-41'} classTitle={''} />
                    <Education />
                </Section>
            </div>
        </div>
    )
}

export default aboutmePage;