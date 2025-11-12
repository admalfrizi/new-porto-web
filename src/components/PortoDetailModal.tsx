import Image from "next/image";
import { useEffect, useState } from "react";

interface PortoDetailModalProps {
    data: MyProjects
    onClose: () => void;
}

const LinkGithub = ({linkGithub} : { linkGithub ?: string }) => {
    if (linkGithub) 
    {
        return (
            <>
                <span>|</span>
                <a className='flex flex-row space-x-3 items-center' href={linkGithub}>
                        <Image src={'/icons/github_ic.svg'} alt={''} className='w-5 h-5 max-sm:w-6 max-sm:h-6 max-[768px]:w-8 max-[768px]:h-8' width={40} height={40}/>
                    <p className='font-main max-sm:text-sm max-[768px]:text-md max-[1024px]:text-lg lg:text-sm'>Link Github</p>
                </a>
            </>
        )
    } 
    else 
    {
        return (
            <>
            </>
        )

    }
    
}

export default function PortoDetailModal({data, onClose}: PortoDetailModalProps) {
    const [show, setShow] = useState(false);
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
        setShow(true);
        }, 10); // A small delay to allow mounting

        // Cleanup function
        return () => clearTimeout(timeoutId);
    }, []);

    const handleClose = () => {
        setShow(false);
        
        setTimeout(() => {
            onClose();
        }, 300);
    };

    return (
        <div className={`fixed inset-0 z-50 flex items-center bg-black/30 justify-center p-4 transition-opacity duration-300 backdrop-blur-sm ${show ? 'bg-opacity-50' : 'bg-opacity-0'}`}>
            <div className={`relative w-full max-w-md transform-gpu overflow-hidden rounded-xl 
                bg-brand-100 shadow-2xl transition-all duration-300  ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={handleClose}
                    className="absolute top-2 right-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-700 text-white shadow-lg transition-transform hover:bg-gray-800 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    aria-label="Close modal"
                >
                    &times;
                </button>
                <div>
                    {/* <Image
                        src={data.imgLink}
                        alt={`Screenshot of ${data.projectName}`}
                        fill
                        className="h-20 w-56 object-cover"
                    /> */}
                    <Image
                        src={data.imgLink}
                        alt={`Screenshot of ${data.projectName}`}
                        className="h-56 w-full object-cover"
                        width={650}
                        height={500}
                        //onError={(e) => e.target.src = 'https://placehold.co/600x400/ef4444/white?text=Image+Error'}
                    />
                    <div className="p-6 text-brand-900 h-fit">
                        <h2 className="text-2xl font-bold">
                            {data.projectName}
                        </h2>
                        <div className="flex flex-wrap gap-x-5 justify-start pt-1 pb-4">
                            <p>{data.years}</p>
                            <LinkGithub linkGithub={data.linkGithub}/>
                        </div>
                        <p className="mt-1 text-base font-light">{data.desc}</p>
                        {/* <p className="mt-4 text-left text-gray-700">{user.bio}</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
