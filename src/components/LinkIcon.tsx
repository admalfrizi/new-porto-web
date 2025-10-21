import Image from "next/image";
import { Button } from "./ui/button";

export default function LinkIcon() {
    return (
        <>
            <Button size="icon-lg" className="w-[71px] h-[71px]">
                <Image 
                    src="/icons/linkedin-ic.svg"
                    alt="Blurred background"
                    width={60}
                    height={60}
                    objectFit="cover"
                />
            </Button>
            <Button size="icon-lg" className="w-[71px] h-[71px] p-3 ms-3">
                <Image 
                    src="/icons/github_ic.svg"
                    alt="Blurred background"
                    width={60}
                    height={60}
                    objectFit="cover"
                />
            </Button>
            <Button size="icon-lg" className="w-[71px] h-[71px] p-3 ms-3">
                <Image 
                    src="/icons/ig_ic.svg"
                    alt="Blurred background"
                    width={60}
                    height={60}
                    objectFit="cover"
                />
            </Button>
            <Button size="icon-lg" className="w-[71px] h-[71px] p-3 ms-3">
                <Image 
                    src="/icons/yt_ic.svg"
                    alt="Blurred background"
                    width={60}
                    height={60}
                    objectFit="cover"
                />
            </Button>
        </>
        
    )
}