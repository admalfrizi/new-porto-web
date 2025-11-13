import Image from "next/image"

export default function Certificates() {
    return (
         <div className="h-screen overflow-y-scroll scrollbar-hide scroll-smooth">
            <section
                className="topSection relative h-screen snap-center flex items-center justify-space-between bg-cover bg-brand-100 bg-center"
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
                            //onClick={() => handleScrollDown() }
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
                        className="object-contain rounded-[20px] mb-5 w-120 md:w-150"
                        src="/icons/certificate_ic.svg"
                        alt={""}
                        width={500}
                        height={900}                
                    />
                </div>
            </section>
            <div className='mainSection h-fit pt-20 pb-10 px-5 md:px-24 flex flex-col justify-space-between bg-brand-50 bg-cover bg-center'>
                <div className='flex flex-col w-full pb-10'>
                    <h1 className='title-main mb-3 font-semibold text-4xl text-brand-900'>My Certificates</h1>
                    <div className="line-title-main w-62 h-1 bg-brand-900 rounded-full"></div>
                </div>
                <div className="grid grid-cols-4 gap-4 w-full">
                    
                </div>
            </div>
         </div>
    )
}