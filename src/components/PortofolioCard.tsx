import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";

interface PortoCardParams {
    data: HighlightProject
}

export default function PortofolioCard({data} : PortoCardParams)
{
    return (
        <Card className="content-center relative h-150 overflow-hidden p-0 rounded-3xl border-0">
            <Image
                src={data.imgBackground}
                alt="Blurred background"
                fill
                objectFit="cover"
                className="filter scale-115 blur-sm opacity-75" // This blurs the image itself
            />
            <CardContent className="p-8 bg-gray-900/40 backdrop-blur-sm border-white/10 h-full content-center">
                <div
                    className={`
                        flex 
                        flex-col
                        justify-between
                        lg:flex-row
                        lg:items-center
                        w-full   
                        rounded-lg 
                        min-h-100
                        text-white
                        overflow-hidden
                    `}
                >
                    {/* Left Side: Text Content */}
                    <div className="max-w-full lg:w-1/2 pb-5 me-0 md:me-3 text-brand-900">
                        {/* Row 1 */}
                        <h3 className="text-lg lg:text-2xl font-bold">{data.name}</h3>
                        <div className="flex flex-col sm:flex-row sm:space-y-5 max-w-full md:justify-start py-3 sm:items-center">
                            <div className="mt-0 md:mt-4 mr-4 md: me-0">
                                <h6 className="text-lg lg:text-xl font-medium text-brand-900 ">Tech Stack :</h6>
                            </div>
                            <div className="flex space-x-4 pt-2 pb-3 overflow-x-scroll scrollbar-hide sm:overflow-x-clip ">
                                {
                                    data.techStack.map((dta, idx) => (
                                        <div key={idx} className="flex flex-row space-x-4 content-center">
                                            <div
                                                className="relative w-8 h-8 md:w-10 md:h-10
                                                "
                                            >
                                                <Image src={dta.icons} alt="" fill objectFit="contain"/>
                                            </div>
                                            <p className="content-center">{dta.name}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        {/* Row 2 */}
                        <p className="flex text-base/6 max-lg:line-clamp-4 lg:max-w-full max-sm:text-[12px] max-md:text-[14px] md:text-md lg:text-lg xl:text-xl h-fit">{data.desc}</p>
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