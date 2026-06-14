import ExperienceCard from "@/components/elements/ExperienceCard"

interface WorkExperienceProps {
    data : Experience[];
    lastIdx: number;
}

export default function WorkExperience({data, lastIdx}: WorkExperienceProps)
{
    return (
        <div className='max-[768px]:w-fit min-[768px]:w-full min-[768px]:overflow-x-auto max-[768px]:overflow-y-auto md:h-100 scrollbar-hide py-5 '>
            <div className="relative inline-flex flex-nowrap min-w-full py-4">
                <div className="line-timeline absolute top-4/4 max-[768px]:top-4 max-[768px]:left-7.5 left-0 w-full h-2 max-[768px]:w-2 max-[768px]:h-7/8 bg-brand-900 rounded-full z-0 overflow-hidden"></div>
                <div className="relative flex max-[768px]:flex-col justify-between w-fit max-[768px]:w-screen max-[768px]:h-fit z-10">
                    {
                        data.map((exp, index) => (
                            <ExperienceCard key={index} exp={exp} idx={index} lastIdx={lastIdx} />
                        ))
                    }
                </div>
            </div>
        </div>  
    );
}