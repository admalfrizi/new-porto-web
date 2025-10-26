import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";

interface PortoCardParams {
    data: Project
}

export default function PortofolioCard({data} : PortoCardParams)
{
    return (
        //<div className="relative h-[600px] flex items-center justify-center p-4 rounded-2xl">
            <Card className="w-full content-center relative overflow-hidden rounded-3xl border-0">
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
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-2/5 me-5 text-brand-900 content-center overflow-x-hidden">
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
                        </div>
                    </div>
                </CardContent>
                
            </Card>
            
            //{/* A dark overlay for better contrast */}
            
        //</div>
    )
}