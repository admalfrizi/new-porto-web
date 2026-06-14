
interface SectionTitleProps {
    title: string;
    width: string;
    classTitle: string;
}

export default function SectionTitle({
    title,
    classTitle,
    width
}: SectionTitleProps) {
    return (
        <div className='flex flex-col w-full'>
            <h1 className={`${classTitle} mb-3 font-semibold text-4xl max-[380px]:text-3xl text-brand-900`}>{title}</h1>
            <div className={`${width} max-[380px]:w-58 h-1 bg-brand-900 rounded-full`}/>
        </div>
    )
}