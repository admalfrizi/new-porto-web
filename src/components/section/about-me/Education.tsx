import { Card, CardContent } from "@/components/ui/card";
import myLoader from "@/lib/image-loader";
import { prefixPath } from "@/lib/utils";
import Image from "next/image";

export default function Education() {
    return (
        <div className='flex justify-center w-full'>
            <Card className="mt-10 p-0 bg-brand-100 backdrop-blur-sm border-white/10 content-center">
                <CardContent className='px-0'>
                    <div className="flex flex-col lg:flex-row w-full rounded-lg min-h-100 text-white overflow-hidden">
                        <div className="flex flex-row rounded-lg w-full">
                            <div className="flex w-1/3 md:mb-0">
                                <Image
                                    loader={myLoader}
                                    src={prefixPath("/images/first_image.jpg")}
                                    alt="Main image description"
                                    width={350}
                                    height={300}
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex w-1/3">
                                <Image
                                    loader={myLoader}
                                    src={prefixPath("/images/second_image.jpg")}
                                    alt="Secondary image description"
                                    width={300}
                                    height={300}
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex w-1/3">
                                <Image
                                    loader={myLoader}
                                    src={prefixPath("/images/third_image.jpg")}
                                    alt="Secondary image description"
                                    width={300}
                                    height={300}
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col content-center w-full max-[360px]:p-3 max-[512px]:p-3 max-[512px]:ms-0 max-md:py-3 ms-6 md:pe-6 md:py-6">
                            <div className="font-light pb-3 text-brand-900">
                                <p className='text-lg max-[360px]:text-[13px]'>Aug 2020 - Apr 2025</p>
                            </div>
                            <div className="font-bold pb-3 text-brand-900">
                                <h1 className='text-2xl max-[360px]:text-lg lg:text-4xl'>
                                    Universitas Dian Nuswantoro
                                </h1>
                            </div>
                            <div className='max-w-xl text-brand-900'>
                                <p className='text-lg max-[360px]:text-[13px]'>S1 Teknik Informatika - Computer Science</p>
                            </div>
                            <div className='flex flex-row space-x-4 py-3 w-full text-left text-brand-900'>
                                <p className='text-lg max-[360px]:text-[13px]'>Semarang, Jawa Tengah</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}