import { Section } from "@/components/ui/section";
import myLoader from "@/lib/image-loader";
import { prefixPath } from "@/lib/utils";
import Image from "next/image";

interface HeroSectionProps {
    handleScrollDown: () => void;
}

export default function HeroSection({
    handleScrollDown
}: HeroSectionProps) {
    return (
        <Section className="flex flex-col-reverse max-[360px]:mt-0 max-[920px]:pt-10 min-[920px]:flex-row justify-between">
            <div className="z-10 text-start text-brand-900 content-center mr-15 max-[380px]:mr-0 sm:mr-20 xl:mr-0">
                <h1 className="title-am max-[1281px]:max-w-sm text-3xl max-[360px]:line-clamp-2 max-[380px]:text-[28px] min-[920px]:text-6xl font-bold font-main">
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
                loader={myLoader}
                className="image-am rounded-[20px] mb-5 xl:mb-0 w-75 max-[360px]:w-45 max-[512px]:w-60 max-[920px]:w-65 lg:w-100"
                src={prefixPath("/images/profile_1.jpg")}
                alt={""}  
                width={400}  
                height={600}                
            />
        </Section>
    )
}