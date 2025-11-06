"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card";

interface CardProjectsProps {
    data: MyProjects
}

const LinkGithub = ({linkGithub} : { linkGithub ?: string }) => {
    if (linkGithub) 
    {
        return (
            <>
                <span>|</span>
                <a className='flex flex-row space-x-3 items-center' href={linkGithub}>
                        <Image src={'/icons/github_ic.svg'} alt={''} className='w-10 h-10 max-sm:w-6 max-sm:h-6 max-[768px]:w-8 max-[768px]:h-8' width={40} height={40}/>
                    <p className='font-main max-sm:text-sm max-[768px]:text-md max-[1024px]:text-lg lg:text-xl'>Link Github</p>
                </a>
            </>
        )
    } 
    else 
    {
        return (
            <>
            </>
        )

    }
    
}

export default function CardProjects({data} : CardProjectsProps)
{
    return (
        <Card className='bg-brand-100 rounded-xl border-0 p-0'>
            <CardContent className='px-0'>
                <div className='flex flex-col lg:flex-row'>
                    <div className="relative w-3/6 max-[1024px]:w-full aspect-video"> 
                        <Image
                            src={data.imgLink}
                            alt="A descriptive alt text"
                            fill
                            className="object-cover max-lg:rounded-t-xl lg:rounded-l-lg" // Fills the container, cropping if needed
                            sizes="(max-width: 768px) 100vw,
                                    (max-width: 1200px) 50vw,
                                    33vw"
                        />
                    </div>
                    <div className='flex flex-col p-8 max-[400px]:p-5'>
                        <div className='max-w-full'>
                            <h1 className='text-brand-900 font-semibold max-[400px]:text-lg max-[768px]:text-2xl max-[1024px]:text-3xl text-5xl line-clamp-2'>{data.projectName}</h1>
                        </div>
                        <div className='flex flex-row space-x-5 items-center max-lg:text-lg max-[400px]:mt-2 mt-4 text-brand-900'>
                            <p className='text-brand-900 font-main max-sm:text-sm max-[768px]:text-md max-[1024px]:text-lg lg:text-2xl '>{data.years}</p>
                            <LinkGithub linkGithub={data.linkGithub}/>
                            
                        </div>
                        <div className='max-w-xl mt-5 text-brand-900'>
                            <p className='max-[1024px]:line-clamp-5 max-[400px]:text-[14px] max-sm:text-[16px] max-[768px]:text-[18px] max-[1024px]:text-md lg:text-lg'>
                                {data.desc}
                            </p>
                        </div>
                        <div className={`max-w-xl flex flex-wrap space-x-3 gap-y-3 w-full pt-5`}>
                            {
                                data.techStack.map((tech, idx) => (
                                    <span key={idx} className='bg-span-experience content-center py-2 w-fit px-7 text-md rounded-lg text-white'>
                                        {tech}
                                    </span>
                                ))
                            }
                            
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}