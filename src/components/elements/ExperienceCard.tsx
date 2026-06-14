interface ExperienceCardProps {
  exp: Experience;
  idx: number;
  lastIdx: number;
}

export default function ExperienceCard({exp, idx, lastIdx}: ExperienceCardProps)
{
    return (
        <div className="relative top-8.5 max-[768px]:left-5 max-[768px]:top-0 w-120 max-[768px]:h-80 flex flex-col items-left">
            <div className="dot w-7 h-7 bg-inside-dot dark:bg-blue-500 rounded-full border-5 border-brand-900"></div>
            <div className={`experienceCard absolute top-10 max-[768px]:top-0 max-[768px]:left-12 ${lastIdx === idx ? 'max-[768px]:h-fit min-[768px]:w-8/8' : 'max-[768px]:h-fit min-[768px]:w-7/8'} cursor-pointer text-left text-brand-900 p-5 bg-card-experience rounded-lg shadow-lg`}>
                <div className='flex flex-row justify-between gap-7'>
                    <span className="text-lg font-bold line-clamp-1">{exp.company}</span>
                    <p className='text-[14px] content-center line-clamp-1'>{exp.period}</p>
                </div>
                <div className='flex flex-row space-x-1.5 w-full text-left pt-2 pb-3'>
                    <p className='text-[14px]'><span className="font-semibold">{exp.position}</span></p>
                    <p className='text-[14px]'>|</p>
                    <p className='text-[14px]'>{exp.location}</p>
                </div>
                <div className='max-w-full line-clamp-4'>
                    <p className='text-wrap max-[768px]:text-[14px] text-md font-light'>
                        {exp.description}
                    </p>
                </div>
                <div className='flex flex-row max-[768px]:flex-wrap max-[768px]:gap-y-3 space-x-3 overflow-x-scroll scrollbar-hide w-full pt-5'>
                    {
                        exp.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className='bg-span-experience content-center py-1.5 w-fit px-3 max-[768px]:text-[10px] text-[12px] rounded-lg text-white'>
                                {tech}
                            </span>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}