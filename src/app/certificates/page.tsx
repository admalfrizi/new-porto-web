"use client";

import { certificate } from "@/data/list_data";
import Image from "next/image"
import { useRef } from "react";
import { div } from 'framer-motion/client';

interface ModalPopupProps {
    img: string
}

const ModalDetailCertificates = ({img}: ModalPopupProps) => {
    return (
        <div className={`fixed inset-0 z-50 flex items-center bg-black/30 justify-center p-4 transition-opacity duration-300 backdrop-blur-sm`}>
            <div className={`relative w-full max-lg:max-w-xl lg:max-w-2xl transform-gpu overflow-hidden rounded-xl 
                bg-brand-100 shadow-2xl transition-all duration-300 `}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    //onClick={handleClose}
                    className="absolute top-2 right-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-700 text-white shadow-lg transition-transform hover:bg-gray-800 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    aria-label="Close modal"
                >
                    &times;
                </button>
                <div>
                    <Image
                        src={img}
                        alt={`Screenshot of `}
                        className="max-[395px]:h-48 max-[480px]:h-56 max-[1024px]:h-72 lg:h-96 w-full object-cover"
                        width={650}
                        height={500}
                        //onError={(e) => e.target.src = 'https://placehold.co/600x400/ef4444/white?text=Image+Error'}
                    />
                </div>

            </div>
        </div>
    )
}

export default function Certificates() {
    const mainContainer = useRef(null);
    const toMainSection = useRef<HTMLDivElement>(null);

    const handleScrollDown = () => {
        toMainSection.current?.scrollIntoView({
            behavior: 'smooth'
        });
    };
    
    return (
         <div className="h-screen overflow-y-scroll scrollbar-hide scroll-smooth">
            <section
                className="topSection relative h-screen snap-center flex items-center justify-space-between bg-cover bg-brand-100 bg-center"
            >
                <div className="flex flex-col-reverse max-[360px]:mt-0 max-[768px]:pt-10 lg:flex-row justify-between w-full px-5 md:px-24 ">
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
                            List of Certificates
                        </h1>
                        <div className="max-w-2xl max-[1380px]:max-w-lg my-5 lg:my-8">
                            <p className="
                                subtitle-hero
                                leading-relaxed max-xl:text-lg min-xl:text-2xl 
                                max-[380px]:text-[14px] max-[360px]:text-[12px] 
                                font-light"
                            >
                                To demonstrate my proficiency, I've earned certifications in key areas of development. Feel free to explore my qualifications.
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
                        className="object-contain rounded-[20px] mb-5 w-120 lg:w-150"
                        src="/icons/certificate_ic.svg"
                        alt={""}
                        width={500}
                        height={900}                
                    />
                </div>
            </section>
            <div ref={toMainSection} className='mainSection h-fit pt-20 pb-10 px-5 md:px-24 flex flex-col justify-space-between bg-brand-50 bg-cover bg-center'>
                <div className='flex flex-col w-full pb-10'>
                    <h1 className='title-main mb-3 font-semibold text-4xl text-brand-900'>My Certificates</h1>
                    <div className="line-title-main w-62 h-1 bg-brand-900 rounded-full"></div>
                </div>
                <div className="grid grid-cols-4 max-[1024px]:grid-cols-2 max-[1280px]:grid-cols-3 gap-4 w-full">
                    {
                        certificate.map((dta,idx) => (
                            <div key={idx} className="group relative overflow-hidden cursor-pointer rounded-lg shadow-lg ">
                                <Image
                                    src={dta.imgLinks}
                                    alt="title"
                                    width={500}
                                    height={400}
                                    className="h-72 w-full object-cover group-hover:blur-sm"
                                />
                                <div 
                                    className="absolute bottom-0 left-0 w-full h-full p-4 
                                          bg-black/30 backdrop-blur-sm bg-opacity-70 text-white
                                            opacity-0 translate-y-full content-center
                                            group-hover:opacity-100 group-hover:translate-y-0
                                            transition-opacity duration-300 ease-in-out"
                                >
                                    <h3 className="text-xl font-medium text-center">{dta.nameCertificates}</h3>
                                    <p className="text-sm text-center font-light pt-4">{dta.years}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
         </div>
    )
}