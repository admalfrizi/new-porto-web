import Link from "next/link";
import Image from 'next/image';

export default function NotFound() {
    return (
        <div className="h-screen bg-brand-100">
            <section
                className="relative h-screen flex items-center justify-space-between"
            >
                <div className="flex flex-col-reverse max-[360px]:mt-0 max-[768px]:pt-10 md:flex-row justify-between w-full px-5 md:px-24 ">
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
                            Your Page is Not Found !
                        </h1>
                        <div className="max-w-2xl max-[1380px]:max-w-lg my-5 lg:my-8">
                            <p className="
                                subtitle-hero
                                leading-relaxed max-xl:text-lg min-xl:text-2xl 
                                max-[380px]:text-[14px] max-[360px]:text-[12px] 
                                font-light"
                            >
                                Look's like you visit to wrong page and it's not exist in my home, you can go back to my main page in down here
                            </p>
                        </div>
                        <Link
                            href={"/"}
                            className="
                                btn-scroll-projects
                                flex
                                items-center
                                px-8
                                py-3
                                w-fit
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
                            <p className='text-center'>Back To Main</p>
                        </Link>      
                    </div>
                    <Image
                        className="object-contain rounded-[20px] mb-5 w-120 md:w-150"
                        src="/icons/not_found_ic.svg"
                        alt={""}
                        width={500}
                        height={900}                
                    />
                </div>
            </section>
        </div>
    );
}