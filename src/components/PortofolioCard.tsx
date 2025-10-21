import Image from "next/image";

export default function PortofolioCard()
{
    return (
        <div className="relative h-[600px] flex items-center justify-center p-4">
            <Image
                src="/images/home_bg.jpg"
                alt="Blurred background"
                layout="fill"
                objectFit="cover"
                className="filter" // This blurs the image itself
            />
            {/* A dark overlay for better contrast */}
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 w-full max-w-4xl rounded-2xl
                            border border-white/10
                            bg-gray-900/40
                            backdrop-blur-sm
                            p-8">
                
                {/* Your card content goes here */}
                <h2 className="text-white text-3xl font-bold mb-4">My Projects</h2>
                
                <div className="text-white/90">
                This is the official portal for the Human Resources Bureau...
                </div>
                
                {/* Your carousel component would go inside here */}
            </div>
        </div>
    )
}