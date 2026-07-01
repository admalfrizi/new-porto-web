import myLoader from "@/lib/image-loader";
import { prefixPath } from "@/lib/utils";
import Image from "next/image";

interface WhoAmIProps {
    firstImgClass: string
    secondImgClass: string
    thirdImgClass: string
    whoAmIAboutMe: string
    whoAmIDesc: string
}

export default function WhoAmI({
    firstImgClass,
    secondImgClass,
    thirdImgClass,
    whoAmIAboutMe,
    whoAmIDesc
}: WhoAmIProps) {
    return (
        <div className='flex flex-col lg:flex-row justify-between pb-9 pt-10 w-full'>
            <div className="relative w-full h-96 md:w-136 md:h-80 lg:w-136 lg:h-126 md:me-10">
                <div className={`${firstImgClass} absolute top-0 left-0 w-3/4 h-3/5 max-[375px]:w-4/5 max-[375px]:h-2/5`}>
                    <Image 
                        loader={myLoader}
                        src={prefixPath("/images/first.png")} 
                        alt="Adam Alfirizi Ismail 1"
                        className="object-cover rounded-lg w-full h-full shadow-lg"
                        fill
                    />
                </div>
                <div className={`${secondImgClass} absolute top-4 md:top-8 right-0 w-2/5 h-3/5 max-[375px]:h-2/4 max-[375px]:top-8`}>
                    <Image 
                        loader={myLoader}
                        src={prefixPath("/images/second.JPG")}  
                        alt="Adam Alfirizi Ismail 2"
                        className="object-cover rounded-lg w-full h-full shadow-lg"
                        fill
                    />
                </div>
                <div className={`${thirdImgClass} absolute bottom-0 left-0 ms-3 sm:ms-6 w-1/3 h-3/5 max-[375px]:h-2/4 max-[375px]:bottom-18`}>
                    <Image 
                        loader={myLoader}
                        src={prefixPath("/images/third.JPG")}  
                        alt="Adam Alfirizi Ismail 3"
                        className="object-cover rounded-xl w-full h-full shadow-lg"
                        fill
                    />
                </div>
            </div>
            <div className='max-w-2xl mt-20 lg:mt-0  max-[375px]:mt-0'>
                <div className='mb-8'>
                    <h4 className={`${whoAmIAboutMe} font-semibold text-4xl text-brand-900`}>Adam Alfarizi Ismail</h4>
                </div>
                <p className={`${whoAmIDesc} text-base font-light md:text-lg lg:text-xl lg:max-w-3xl text-brand-900 leading-6 space-y-4`}>
                    <span> Hey, I'm Adam Alfarizi Ismail, an <span className="font-semibold">Software Developer</span> or <span className="font-semibold">Engineer</span> with
                    1.5 years experience built from internship work which provided a
                    strong fundamentals and analytical thinking to practice a problem
                    solving in a different scope area of industry. </span>
                    <span>
                    My work is specialize in <span className="font-semibold">Mobile Apps</span> with
                    different tech stack such as <span className="font-semibold">native</span> and <span className="font-semibold">multiplatform</span>.
                    In every project, I am responsible for implementing robust and
                    scalable solutions, applying my knowledge of <span className="font-semibold">clean architecture</span> and <span className="font-semibold">SOLID principles</span>.
                    </span>
                    <span> Beyond that, I also skilled in <span className="font-semibold">Web Development</span> for both <span className="font-semibold">Frontend</span> and <span className="font-semibold">Backend</span> in
                    order to fulfill the basic strategy when doing work with API and
                    Website. Being a tech learner not just improve my skills to adapt
                    with industry standard, but also respect the value of the
                    learning itself, so don't stop learning until you think it.
                    </span>
                </p>
            </div>
        </div>
    )
}