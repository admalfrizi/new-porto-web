"use client";

import SkillsType from '@/components/SkillsType';
import { skillsData } from '@/data/list_data';
import Image from 'next/image';
import { useState } from 'react';

const aboutmePage = () => {
    const [selectedSkills, setSelectedSkills] = useState(0);

    return (
        <div className="h-screen overflow-y-scroll scrollbar-hide">
            <section
                id="aboutme"
                className="relative h-screen snap-center flex items-center justify-space-between bg-cover bg-brand-100 bg-center"
            >
                <div className="flex flex-col-reverse max-[360px]:mt-0 max-[768px]:pt-10 md:flex-row justify-between w-full px-5 md:px-24 ">
                    <div className="z-10 text-start text-brand-900 content-center mr-15 max-[380px]:mr-0 sm:mr-20 xl:mr-0">
                        <h1 className="text-3xl max-[360px]:line-clamp-2 max-[380px]:text-[28px] md:text-6xl font-bold font-main">
                            Want to more about me ?
                        </h1>
                        <div className="max-w-xl my-5 lg:my-8">
                            <p className="leading-relaxed text-[16px] md:text-[20px] max-[380px]:text-[14px] max-[360px]:text-[12px] max-[360px]:line-clamp-2 font-main">
                            Interested in my background? You can find my full introduction, project portfolio, and more about me in here.
                            </p>
                        </div>
                        <button
                            className="
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
                            <a> Scroll Down </a>
                        </button>      
                    </div>
                    <Image
                        className="rounded-[20px] mb-5 xl:mb-0 w-75 max-[360px]:w-45 max-[512px]:w-60 max-[768px]:w-65 lg:w-auto"
                        src="/images/profile_1.jpg"
                        alt={""}  
                        width={400}  
                        height={600}                
                    />
                </div>
            </section>
            <div className='h-fit py-10 px-5 md:px-24 flex flex-col items-center justify-space-between bg-cover bg-brand-50 bg-center'>
                <div className='flex flex-col w-full pb-10'>
                    <h1 className='mb-3 font-semibold text-4xl text-brand-900'>Who am I?</h1>
                    <div className="w-43 h-1 bg-brand-900 rounded-full"></div>
                </div>
                <div className='flex flex-col lg:flex-row justify-between pb-9 w-full'>
                    <div className="relative w-full h-96 md:w-136 md:h-80 lg:w-136 lg:h-126 md:me-10">
                        <div className="absolute top-0 left-0 w-3/4 h-3/5 max-[375px]:w-4/5 max-[375px]:h-2/5">
                            <Image 
                                src="/images/first.png" 
                                alt="Adam Alfirizi Ismail 1"
                                className="rounded-lg w-full h-full shadow-lg"
                                objectFit='cover'
                                fill
                            />
                        </div>
                        <div className="absolute top-4 md:top-8 right-0 w-2/5 h-3/5 max-[375px]:h-2/4 max-[375px]:top-8">
                            <Image 
                                src="/images/second.JPG"  
                                alt="Adam Alfirizi Ismail 3"
                                className="rounded-lg w-full h-full shadow-lg"
                                objectFit='cover'
                                fill
                            />
                        </div>
                        <div className="absolute bottom-0 left-0 ms-3 sm:ms-6 w-1/3 h-3/5 max-[375px]:h-2/4 max-[375px]:bottom-18">
                            <Image 
                                src="/images/third.JPG"  
                                alt="Adam Alfirizi Ismail 3"
                                className="rounded-xl w-full h-full shadow-lg"
                                objectFit='cover'
                                fill
                            />
                        </div>
                        
                    </div>
                    <div className='max-w-2xl mt-20 lg:mt-0  max-[375px]:mt-0'>
                        <div className='mb-8'>
                            <h4 className='font-semibold text-4xl text-brand-900'>Adam Alfarizi Ismail</h4>
                        </div>
                        <p className="text-base font-light md:text-lg lg:max-w-3xl text-brand-900 leading-relaxed space-y-4">
                            <span>
                            Hey, I'm Adam Alfarizi Ismail, an <span className="font-semibold">Software Developer</span> or <span className="font-semibold">Engineer</span> with
                            1.5 years experience built from internship work which provided a
                            strong fundamentals and analytical thinking to practice a problem
                            solving in a different scope area of industry.
                            </span>
                            <span>
                            My work is specialize in <span className="font-semibold">Mobile Apps</span> with
                            different tech stack such as <span className="font-semibold">native</span> and <span className="font-semibold">multiplatform</span>.
                            In every project, I am responsible for implementing robust and
                            scalable solutions, applying my knowledge of <span className="font-semibold">clean architecture</span> and <span className="font-semibold">SOLID principles</span>.
                            </span>
                            <span>
                            Beyond that, I also skilled in <span className="font-semibold">Web Development</span> for both <span className="font-semibold">Frontend</span> and <span className="font-semibold">Backend</span> in
                            order to fulfill the basic strategy when doing work with API and
                            Website. Being a tech learner not just improve my skills to adapt
                            with industry standard, but also respect the value of the
                            learning itself, so don't stop learning until you think it.
                            </span>
                        </p>
                    </div>
                    
                </div>
            </div>
            <div className='h-fit px-5 md:px-24 py-5 flex flex-col items-center bg-cover bg-brand-50 bg-center'>
                <div className='flex flex-col w-full'>
                    <h1 className='mb-3 font-semibold text-4xl max-[380px]:text-3xl text-brand-900'>Skills and Tech Stack</h1>
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
                    <div className='max-w-full mx-auto flex flex-wrap justify-center gap-3 mt-8'>
                        {
                            skillsData[selectedSkills].langFramerwork.map((lang, idx) => (
                                <span key={idx} className='bg-brand-100 px-3 py-3 rounded-lg border-1 border-span text-white'>
                                    {lang}
                                </span>
                            ))
                        }
                    </div>
                </div>
                <div className='w-full mx-auto pt-10'>
                    <h6 className='mb-3 font-medium text-center text-3xl max-[380px]:text-3xl text-brand-900'>Tools Apps</h6>
                    <div className='max-w-full mx-auto flex flex-wrap justify-center gap-3 mt-8'>
                        {
                            skillsData[selectedSkills].tools.map((lang, idx) => (
                                <span key={idx} className='bg-brand-100 px-3 py-3 rounded-lg border-1 border-span text-white'>
                                    {lang}
                                </span>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='h-fit px-5 md:px-24 py-10 flex flex-col items-center bg-cover bg-brand-50 bg-center'>
                <div className='flex flex-col w-full'>
                    <h1 className='mb-3 font-semibold text-4xl max-[380px]:text-3xl text-brand-900'>Work Experience</h1>
                    <div className="w-69 max-[380px]:w-70 h-1 bg-brand-900 rounded-full"/>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default aboutmePage;