"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL, YOUTUBE_URL } from "@/lib/const";

export default function LinkIcon() {
    return (
        <>
            <Button size="icon-lg" asChild>
                <a href={LINKEDIN_URL} target="_blank" className="w-[71px] h-[71px] max-[380px]:w-[51px] max-[380px]:h-[51px] max-[380px]:p-1">
                    <Image 
                        src="/icons/linkedin-ic.svg"
                        alt="Blurred background"
                        width={60}
                        height={60}
                        objectFit="cover"
                    />
                </a>
            </Button>
            <Button size="icon-lg" asChild>
                <a href={GITHUB_URL} target="_blank" className="w-[71px] h-[71px] p-3 ms-3 max-[380px]:w-[51px] max-[380px]:h-[51px] max-[380px]:p-1">
                    <Image 
                        src="/icons/github_ic.svg"
                        alt="Blurred background"
                        width={60}
                        height={60}
                        objectFit="cover"
                    />
                </a>
            </Button>
            <Button size="icon-lg" asChild>
                <a href={INSTAGRAM_URL} target="_blank" className="w-[71px] h-[71px] p-3 ms-3 max-[380px]:w-[51px] max-[380px]:h-[51px] max-[380px]:p-2">
                    <Image 
                        src="/icons/ig_ic.svg"
                        alt="Blurred background"
                        width={60}
                        height={60}
                        objectFit="cover"
                    />
                </a>
                
            </Button>
            <Button size="icon-lg" asChild>
                <a href={YOUTUBE_URL} target="_blank" className="w-[71px] h-[71px] p-3 ms-3 max-[380px]:w-[51px] max-[380px]:h-[51px] max-[380px]:p-2">
                    <Image 
                        src="/icons/yt_ic.svg"
                        alt="Blurred background"
                        width={60}
                        height={60}
                        objectFit="cover"
                    />
                </a>
                
            </Button>
        </>
        
    )
}