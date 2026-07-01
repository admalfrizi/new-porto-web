"use client";

import { certificate } from "@/data/list_data";
import Image from "next/image"
import { useEffect, useRef, useState } from "react";
import gsap from 'gsap';
import { AnimatePresence, motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { prefixPath } from "@/lib/utils";
import myLoader from "@/lib/image-loader";
import CertificatesHero from "@/components/section/certificates/HeroSection";
import SectionTitle from "@/components/elements/SectionTitle";
import { Section } from "@/components/ui/section";

interface ModalPopupProps {
    img: string
    onClose: () => void;
}

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
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
    transition: { duration: 0.2 }
};

const ModalDetailCertificates = ({img, onClose}: ModalPopupProps) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
        setShow(true);
        }, 10); // A small delay to allow mounting

        // Cleanup function
        return () => clearTimeout(timeoutId);
    }, []);

    const handleClose = () => {
        setShow(false);
        
        setTimeout(() => {
            onClose();
        }, 300);
    };

    return (
        <div className={`fixed inset-0 z-50 flex items-center bg-black/30 justify-center p-4 transition-opacity duration-300 backdrop-blur-sm`}>
            <div className={`relative w-full transform-gpu overflow-hidden transition-all duration-300 `}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={handleClose}
                    className="absolute top-2 right-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-700 text-white shadow-lg transition-transform hover:bg-gray-800 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    aria-label="Close modal"
                >
                    <p className="text-2xl">
                        &times;
                    </p>
                </button>
                <div className="relative w-full h-screen">
                    <Image
                        loader={myLoader}
                        src={prefixPath(img)}
                        alt={`Screenshot of `}
                        className="object-contain"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
    const [selectedData, setSelectedData] = useState<Certificates | null>(null);

    const handleScrollDown = () => {
        toMainSection.current?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    const openModal = (dataCertif: Certificates) => {
        setSelectedData(dataCertif);
    };


    const closeModal = () => {
        setSelectedData(null);
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

        heroSection.from(".title-hero",{
            opacity: 0,
            y: -60,
            duration: 1.5,
            ease: 'power3.out',
            stagger: 0.5,
        })
        .from(".icon-ic", {
            opacity: 0,
            y: -60,
            duration: 1.5,
            ease: 'power3.out',
            stagger: 0.5,
        },0.3)
        .from(".btn-scroll-hero", {
            opacity: 0,
            y: -60,
            duration: 1.5,
            ease: 'power3.out',
            stagger: 0.5,
        },0.8)
    })
    
    return (
         <div ref={mainContainer} className="h-screen overflow-y-scroll scrollbar-hide scroll-smooth">
            <div
                className="heroSection relative h-screen snap-center flex items-center justify-space-between bg-cover bg-brand-100 bg-center"
            >
                <CertificatesHero handleScrollDown={handleScrollDown} />
            </div>
            <div ref={toMainSection} className='mainSection h-fit pt-20 pb-10 bg-brand-50 bg-cover bg-center'>
                <Section className="flex flex-col justify-space-between">
                    <SectionTitle title={"My Certificates"} width={"line-title-main w-62"} classTitle={"title-main"}  />
                    <div className="pb-10"/>
                    <AnimatePresence mode='wait'>
                        <motion.div
                            variants={containerVariants}
                            initial="initial"
                            exit="exit"
                            whileInView="animate"
                            className="grid grid-cols-4 max-[1024px]:grid-cols-2 max-[1280px]:grid-cols-3 gap-4 w-full"
                        >
                            {
                                certificate.map((dta,idx) => (
                                    <motion.div 
                                        key={idx} 
                                        variants={cardAnimation}
                                        initial="initial"
                                        exit="exit"
                                        whileInView="animate"
                                        onClick={() => openModal(dta)} 
                                        className="group relative overflow-hidden cursor-pointer rounded-lg shadow-lg "
                                    >
                                        <Image
                                            loader={myLoader}
                                            src={prefixPath(dta.imgLinks)}
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
                                            <h3 className="text-xl font-semibold     text-center">{dta.nameCertificates}</h3>
                                            <p className="text-sm text-center font-light pt-4">{dta.years}</p>
                                            <p className="text-sm text-center font-medium pt-4">- {dta.publisher} -</p>
                                        </div>
                                    </motion.div>
                                ))
                            }
                        </motion.div>
                    </AnimatePresence>
                </Section>
               
        
            </div>
            {
                selectedData && (
                    <ModalDetailCertificates img={selectedData.imgLinks} onClose={closeModal}  />
                )
            }
        </div>
    )
}