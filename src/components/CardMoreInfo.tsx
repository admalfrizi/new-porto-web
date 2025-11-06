"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";

export default function CardMoreInfo()
{
    return (
        <Card className="content-center relative h-full overflow-hidden p-0 rounded-3xl border-0 bg-brand-100">
            <CardContent className="p-8 bg-gray-900/40 backdrop-blur-sm border-white/10 max-[400px]:h-100 h-full content-center">
                <div
                    className={`
                        content-center
                        w-full   
                        rounded-lg 
                        text-white
                        overflow-hidden
                    `}
                >
                    <div className="flex flex-col lg:flex-row items-center">
                        <Image
                            className="rounded-[20px] w-100 lg:w-120"
                            src="/icons/my_project_ic.svg"
                            alt={""}  
                            objectFit='contain'
                            width={500}
                            height={900}                
                        />
                        <div className="flex flex-col max-w-full ms-0 max-[380px]:mt-5 lg:ms-20 content-center">
                            <h3 className="text-lg max-[380px]:text-sm lg:text-4xl font-bold text-brand-900 ">Wan't See More About My Project ?</h3>
                            <p className="text-lg max-[512px]:text-sm lg:text-xl font-light text-brand-900 mt-4 mb-8 max-w-xl">
                                You can visit the projects page to see all of my projects there, including the details and technologies used.
                            </p>
                            <Link
                                href="/projects"
                                className="
                                flex
                                items-center
                                max-[380px]:w-full
                                w-40
                                px-8
                                py-3
                                border border-transparent
                                max-[380px]:text-xs
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
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}