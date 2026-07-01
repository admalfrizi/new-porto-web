"use client"

import Link from "next/link";
import Image from "next/image"
import { useEffect, useState } from "react";
import { Mail, X } from "lucide-react";
import LinkIcon from "./LinkIcon";
import { Button } from "../ui/button";
import { GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL, YOUTUBE_URL } from "@/lib/const";
import { prefixPath } from "@/lib/utils";
import myLoader from "@/lib/image-loader";

interface NavItemViewProps {
    isNavOpen: boolean;
    setIsNavOpen: () => void;
}

const NavItemView = ({isNavOpen, setIsNavOpen }: NavItemViewProps) => {
    const handleBackdropClick = (e: React.MouseEvent<HTMLElement>) => {
        // If the click is on the backdrop (self), close the menu
        if (e.target === e.currentTarget) {
            setIsNavOpen();
        }
    };
    
    return (
        <nav
            id="fullscreen-menu"
            onClick={handleBackdropClick}
            className={`
                fixed inset-0 z-70 bg-black/30 backdrop-blur-md
                flex items-center justify-center
                transition-all duration-300 ease-in-out
                ${isNavOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
            `}
        >
            <Link href="/" onClick={setIsNavOpen} className="absolute top-6 left-0 z-50 ms-5 md:ms-24">
                <h1 className={`font-main font-bold text-2xl ml-2 md:ml-0 transition-colors ease duration-500 text-white`}>
                    AAI
                </h1>
            </Link>

            <button
                onClick={setIsNavOpen}
                className="absolute top-6 right-0 z-50 text-white me-5 md:me-24 rounded-full hover:bg-white/20 transition-all"
                aria-label="Close navigation menu"
            >
                <X size={30}/>
            </button>

            {/* Navigation Links */}
            <ul
                className={`
                    flex flex-wrap justify-center items-center gap-8
                    transition-transform duration-300 ease-in-out
                    ${isNavOpen ? 'scale-100' : 'scale-95'}
                `}
            >
                <li>
                    <Link href="/" onClick={setIsNavOpen} className="text-4xl md:text-5xl max-[580px]:text-2xl font-bold text-white hover:text-brand-900 transition-colors">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about-me" onClick={setIsNavOpen} className="text-4xl md:text-5xl max-[580px]:text-2xl font-bold text-white hover:text-brand-900 transition-colors">
                        About Me
                    </Link>
                </li>
                <li>
                    <Link href="/projects" onClick={setIsNavOpen} className="text-4xl md:text-5xl max-[580px]:text-2xl font-bold text-white hover:text-brand-900 transition-colors">
                        Projects
                    </Link>
                </li>
                <li>
                    <Link href="/certificates" onClick={setIsNavOpen} className="text-4xl md:text-5xl max-[580px]:text-2xl font-bold text-white hover:text-brand-900 transition-colors">
                        Certificates
                    </Link>
                </li>
            </ul>
            <div className="absolute w-screen px-5 md:px-24 py-10 bottom-0 left-0 flex flex-row max-[517px]:flex-col justify-between">
                <div className="flex items-center justify-center max-[517px]:pb-5">
                    <button
                        className="
                        flex
                        text-center
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
                        w-fit
                        max-[517px]:w-full
                        max-[517px]:justify-center
                        md:w-63.75
                        "
                    >
                        <a className="flex items-center" href="mailto:adam.alfarizi.2002@gmail.com"> 
                            <Mail className="me-3"/>
                            Contact with Me 
                        </a>
                    </button>
                </div>
                <div className="flex max-[1024px]:flex-col max-[1024px]:items-start items-center">
                    <p className="font-light text-brand-900 max-[580px]:w-full max-[580px]:text-center max-[500px]:text-sm max-[1024px]:mb-4 md:me-10">Go to My Account in Here :</p>
                    <div className="flex flex-row max-[580px]:justify-center max-[580px]:w-full">
                        <Button size="icon-lg" asChild>
                            <a href={LINKEDIN_URL} target="_blank" className="w-[71px] h-[71px] max-[1138px]:w-[61px] max-[1138px]:h-[61px] max-[580px]:w-[51px] max-[580px]:h-[51px] max-[580px]:p-1">
                                <Image 
                                    loader={myLoader}
                                    src={prefixPath("/icons/linkedin-ic.svg")}
                                    alt="Blurred background"
                                    width={60}
                                    height={60}
                                    className="object-cover"
                                />
                            </a>
                        </Button>
                        <Button size="icon-lg" asChild>
                            <a href={GITHUB_URL} target="_blank" className="w-[71px] h-[71px] p-3 ms-3 max-[1138px]:w-[61px] max-[1138px]:h-[61px] max-[580px]:w-[51px] max-[580px]:h-[51px] max-[580px]:p-1">
                                <Image 
                                    loader={myLoader}
                                    src={prefixPath("/icons/github_ic.svg")}
                                    alt="Blurred background"
                                    width={60}
                                    height={60}
                                    className="object-cover"
                                />
                            </a>
                        </Button>
                        <Button size="icon-lg" asChild>
                            <a href={INSTAGRAM_URL} target="_blank" className="w-[71px] h-[71px] p-3 ms-3 max-[1138px]:w-[61px] max-[1138px]:h-[61px] max-[580px]:w-[51px] max-[580px]:h-[51px] max-[580px]:p-2">
                                <Image 
                                    loader={myLoader}
                                    src={prefixPath("/icons/ig_ic.svg")}
                                    alt="Blurred background"
                                    width={60}
                                    height={60}
                                    className="object-cover"
                                />
                            </a>
                            
                        </Button>
                        <Button size="icon-lg" asChild>
                            <a href={YOUTUBE_URL} target="_blank" className="w-17.75 h-17.75 p-3 ms-3 max-[1138px]:w-15.25 max-[1138px]:h-15.25 max-[580px]:w-12.75 max-[580px]:h-12.75 max-[580px]:p-2">
                                <Image 
                                    loader={myLoader}
                                    src={prefixPath("/icons/yt_ic.svg")}
                                    alt="Blurred background"
                                    width={60}
                                    height={60}
                                    className="object-cover"
                                />
                            </a>
                            
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isMenuOpen]);

    const openMenu = () => setIsMenuOpen(true);
    const closeMenu = () => setIsMenuOpen(false);
    
    return (
        <>
            <nav className={`w-full fixed backdrop-blur-md transition-colors ease duration-500 inset-0 h-16 z-50 `}>
                <div className="container mx-auto px-5 py-2.5 lg:py-3 lg:px-24 w-screen flex flex-row justify-between items-center ">
                    <Link href="/" >
                        <h1 className={`font-main font-bold text-2xl ml-2 md:ml-0 transition-colors ease duration-500 text-white`}>
                            AAI
                        </h1>
                    </Link>
                    <div 
                        className={`relative w-10 h-10 rounded-full ${isMenuOpen ? 'opacity-0 invisible' : 'opacity-100 visible'} hover:bg-white/20 transition-all cursor-pointer`}
                        onClick={openMenu}
                        aria-disabled={isMenuOpen}
                    >
                        <Image
                            loader={myLoader}
                            src={prefixPath("/icons/menu_ic.svg") }
                            alt=""
                            fill
                        />
                    </div>
                </div>  
            </nav>
            <NavItemView isNavOpen={isMenuOpen} setIsNavOpen={closeMenu} />
        </>
    )
}
export default Navbar