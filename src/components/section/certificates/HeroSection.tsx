import { Section } from "@/components/ui/section";
import myLoader from "@/lib/image-loader";
import { prefixPath } from "@/lib/utils";
import Image from "next/image";

interface HeroSectionProps {
    handleScrollDown: () => void;
}

export default function CertificatesHero({
    handleScrollDown
}: HeroSectionProps) {
    return (
        <Section className="flex flex-col-reverse max-[360px]:mt-0 max-[768px]:pt-10 lg:flex-row justify-between w-full px-5 md:px-24 ">
            <div className="z-10 text-start text-brand-900 content-center max-[400px]:mr-0 lg:mr-15">
                <h1 className="
                    title-hero
                    text-6xl 
                    leading-18
                    max-[360px]:line-clamp-2 max-[380px]:text-[28px] 
                    max-[496px]:text-3xl max-[496px]:leading-13
                    max-[1380px]:max-w-lg max-[768px]:text-4xl 
                    max-[1280px]:text-5xl font-bold font-main"
                >
                    List of Certificates
                </h1>
                <div className="max-w-2xl max-[1380px]:max-w-lg max-[1024px]:w-full my-5 lg:my-8">
                    <p className="
                        subtitle-hero
                        leading-relaxed max-[500px]:text-md max-[1280px]:text-lg xl:text-2xl 
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
                        btn-scroll-hero
                        flex
                        items-center
                        px-8
                        py-3
                        border border-transparent
                        font-bold
                        rounded-full
                        text-white
                        md:py-4 max-[768px]:text-sm max-[1024px]:text-md lg:text-lg md:px-10
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
                className="icon-ic object-contain rounded-[20px] mb-5 max-[500px]:w-65 max-[768px]:w-90 max-[1024px]:w-100 lg:w-150"
                src={prefixPath("/icons/certificate_ic.svg")}
                alt={""}
                width={500}
                height={900}                
            />
        </Section>
    )
}