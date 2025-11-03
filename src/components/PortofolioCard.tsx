import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";

interface PortoCardParams {
    data: HighlightProject
}

export default function PortofolioCard({data} : PortoCardParams)
{
    return (
        <Card className="content-center relative h-full overflow-hidden p-0 rounded-3xl border-0">
            <Image
                src={data.imgBackground}
                alt="Blurred background"
                fill
                objectFit="cover"
                className="filter scale-115 blur-sm opacity-75" // This blurs the image itself
            />
            <CardContent className="p-8 bg-gray-900/40 backdrop-blur-sm border-white/10 max-[400px]:h-100 h-full content-center">
                <div
                    className={`
                        flex 
                        flex-col
                        justify-between
                        lg:flex-row
                        lg:items-center
                        w-full   
                        min-h-100
                        rounded-lg
                        text-white
                        overflow-hidden
                    `}
                >
                    {/* Left Side: Text Content */}
                    <div className="max-w-full lg:w-1/2 pb-5 me-0 md:me-3 text-brand-900">
                        {/* Row 1 */}
                        <h3 className="text-lg lg:text-2xl font-bold pb-8">{data.name}</h3>
                        <p className="flex text-base/6 max-lg:line-clamp-4 lg:max-w-full max-sm:text-[12px] max-md:text-[14px] md:text-md lg:text-lg xl:text-xl h-fit">{data.desc}</p>
                        <div className="flex space-x-2 pt-8 overflow-x-scroll scrollbar-hide sm:overflow-x-clip ">
                            {
                                data.techStack.map((dta, idx) => (
                                    <span key={idx} className='bg-brand-100 px-3 py-2 rounded-lg text-white'>
                                        <p className="content-center max-[512px]:text-[12px] text-[14px]">{dta}</p>
                                    </span>
                                ))
                            }
                        </div>
                    </div>

                    {/* Right Side: Image */}
                    <div className="md:w-md lg:w-xl xl:w-1/2 ">
                        <img
                            src={data.imgBackground}
                            alt={data.name}
                        />
                    </div>
                </div>
               
                    
                    {/* <div className="flex flex-col md:flex-row">
                        <div className="md:w-2/5 me-5 text-brand-900">
                            <h2 className=" text-4xl font-bold">{data.name}</h2>
                            <div className="flex flex-row sm :flex-col max-w-full py-3 items-center">
                                <h6 className="text-xl font-medium text-brand-900">Tech Stack :</h6>
                                {
                                    data.techStack.map((dta, idx) => (
                                        <div key={idx} className="flex  space-x-4 ms-3 items-center">
                                            <Image src={dta.icons} alt="" width={40} height={40}/>
                                            <p>{dta.name}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="font-normal text-xl text-ellipsis md:text-clip">
                                {data.desc}
                            </div>
                        </div>
                        <div className="row-span-3 content-center md:mt-4 flex-1">
                            <Image alt="" src={data.imgBackground} width={700} height={200}/>
                            {
                                data.linkGithub !== "" 
                                ? <div className="flex flex-row justify-end-safe">
                                    <Image src={"/icons/github_ic.svg"} className="me-3" alt="" width={30} height={30} />
                                    <p className="text-white content-center text-sm font-medium my-4 text-end">Link Github</p>
                                </div>
                                : null
                            }
                        </div>
                    </div> */}
                
            </CardContent>
            
        </Card>
    )
}