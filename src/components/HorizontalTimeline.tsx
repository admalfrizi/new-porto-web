interface HorizontalTimelineProps {
    data: Experience[];
}

export default function HorizontalTimeline({data} : HorizontalTimelineProps) {
    return (
        <div className="w-full overflow-x-auto whitespace-nowrap py-12">
            <div className="relative inline-flex min-w-full items-stretch px-4">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 h-1 bg-gray-700 w-full"></div>
                {/* Map over experiences to create timeline items */}
                {data.map((exp, index) => (
                    <div
                        key={index}
                        className={`relative h-120 flex-shrink-0 w-130 flex flex-col justify-center`}
                    >
                        {/* Timeline Dot */}
                        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-600 z-10"></div>
                        {index % 2 === 0 ? (
                            // --- Item ABOVE the line (Even index) ---
                            <div className="absolute bottom-0 mb-auto pt-8 w-fit">
                                <div className="bg-gray-800 p-6 rounded-lg w-4/5 shadow-lg relative">
                                    <p className="text-gray-400 text-sm text-left mb-1 font-medium">
                                        {exp.period}
                                    </p>
                                    <p className="text-sm text-gray-400 mb-1">{exp.location}</p>
                                    <h3 className="text-xl font-semibold text-white mb-1">
                                        {exp.company}
                                    </h3>
                                    <p className="text-gray-300 font-medium mb-2">{exp.title}</p>
                                    <div>
                                        <p className="text-gray-400 text-sm mb-4 max-w-xl">
                                            {exp.description}
                                        </p>
                                    </div>
                                    
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, techIndex) => (
                                            <span
                                            key={techIndex}
                                            className="bg-blue-600/20 text-blue-300 text-xs px-3 py-1 rounded-full"
                                            >
                                            {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            // --- Item BELOW the line (Odd index) ---
                            <div className="absolute top-0 mt-auto pb-8">
                                <div className="bg-gray-800 w-4/5 p-6 rounded-lg shadow-lg relative">
                                    <p className="text-gray-400 text-sm text-left mt-1 font-medium">
                                        {exp.period}
                                    </p>
                                    <p className="text-sm text-gray-400 mb-1">{exp.location}</p>
                                    <h3 className="text-xl font-semibold text-white mb-1">
                                        {exp.company}
                                    </h3>
                                    <p className="text-gray-300 font-medium mb-2">{exp.title}</p>
                                    <p className="text-gray-400 text-sm mb-4 max-w-md">
                                        {exp.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, techIndex) => (
                                            <span
                                            key={techIndex}
                                            className="bg-blue-600/20 text-blue-300 text-xs px-3 py-1 rounded-full"
                                            >
                                            {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}