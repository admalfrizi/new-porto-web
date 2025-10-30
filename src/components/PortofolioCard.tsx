import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";

interface PortoCardParams {
    data: Project
}

export default function PortofolioCard({data} : PortoCardParams)
{
    return (
        <Card className="content-center relative h-fit overflow-hidden rounded-3xl border-0">
            <Image
                src={data.imgBackground}
                alt="Blurred background"
                fill
                objectFit="cover"
                className="filter scale-115 blur-sm opacity-75" // This blurs the image itself
            />
            <CardContent>
                <div className="relative z-10 w-full rounded-2xl
                                border border-white/10
                                bg-gray-900/40
                                backdrop-blur-sm
                                p-8 items-center">
                    <div
                        className={`
                            flex 
                            flex-col
                            justify-between
                            lg:flex-row
                            items-center
                            w-full   
                            rounded-lg 
                            min-h-100
                            text-white
                            overflow-hidden
                        `}
                    >
                        {/* Left Side: Text Content */}
                        <div className="max-w-full lg:w-1/2 pb-5 me-3">
                            {/* Row 1 */}
                            <h3 className="text-lg lg:text-2xl font-bold">{data.name}</h3>
                            <div className="flex flex-col sm:flex-row sm:space-y-5 max-w-full md:justify-start py-3 sm:items-center">
                                <div className="mt-4 me-4">
                                    <h6 className="text-lg lg:text-2xl font-medium text-brand-900 ">Tech Stack :</h6>
                                </div>
                                <div className="flex space-x-4 pt-2 pb-3">
                                    {
                                        data.techStack.map((dta, idx) => (
                                            <div key={idx} className="flex flex-row space-x-4 content-center">
                                                <Image src={dta.icons} alt="" width={40} height={40}/>
                                                <p className="content-center">{dta.name}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            {/* Row 2 */}
                            <p className="max-w-lg text-sm lg:text-xl sm:text-[12px] h-fit">{data.desc}</p>
                        </div>

                        {/* Right Side: Image */}
                        <div className="max-w-xl lg:w-1/2 ">
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
                </div>
            </CardContent>
            
        </Card>
    )
}