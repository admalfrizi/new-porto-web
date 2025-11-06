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
                className="filter scale-115 blur-sm opacity-75"
            />
            <CardContent className="p-8 max-[445px]:p-5 bg-gray-900/40 backdrop-blur-sm border-white/10 max-[400px]:h-100 h-full content-center">
                <div
                    className={`
                        flex 
                        flex-col
                        justify-between
                        lg:flex-row
                        lg:items-center
                        w-full   
                        text-white
                        overflow-hidden
                    `}
                >
                    {/* Left Side: Text Content */}
                    <div className="max-w-full lg:w-2/5 pb-5 text-brand-900">
                        {/* Row 1 */}
                        <h3 className="text-lg lg:text-2xl font-bold max-[445px]:pb-4 pb-8">{data.name}</h3>
                        <p className="flex text-base/6 max-lg:line-clamp-4 lg:max-w-full max-sm:text-[12px] max-md:text-[14px] md:text-md lg:text-lg xl:text-xl h-fit">{data.desc}</p>
                        <div className="flex space-x-2 max-[445px]:pt-2  pt-8 overflow-x-scroll scrollbar-hide sm:overflow-x-clip ">
                            {
                                data.techStack.map((dta, idx) => (
                                    <span key={idx} className='bg-brand-100 px-3 py-2 rounded-lg text-white'>
                                        <p className="content-center  max-[445px]:text-[10px]  max-[512px]:text-[12px] text-[14px]">{dta}</p>
                                    </span>
                                ))
                            }
                        </div>
                    </div>

                    {/* Right Side: Image */}
                    <div className="sm:w-xs md:w-sm lg:w-xl xl:w-1/2 ">
                        <img
                            src={data.imgBackground}
                            alt={data.name}
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}