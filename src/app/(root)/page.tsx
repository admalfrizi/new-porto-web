import Image from "next/image"

const mainPage = () => {
    return (
        <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
            <section
                id="main"
                className="relative h-screen snap-start flex items-center justify-start bg-cover bg-home bg-center"
            >
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="flex flex-col justify-center z-10 text-start text-brand-900 w-full">
                    <div className="px-5 md:px-24">
                        <h1 className="text-3xl sm:text-6xl font-bold mb-2 font-main">
                            Welcome To My Home
                        </h1>
                        <div className="max-w-xl mb-5">
                            <p className="font-main text-lg sm:text-2xl my-6">
                                My Name is <span className="font-semibold">Adam Alfarizi Ismail</span>
                            </p>
                            <p className="leading-relaxed font-main text-lg">
                                Hey, thanks for reaching my website and let me introduce myself. <span className="font-main"> I’m a tech learner</span>, exploring many things
                                in the tech industry, especially in 
                                <span className="font-main font-semibold"> Software Development</span>. My skills
                                include maintaining Web and Mobile apps with great fundamentals in
                                engineering code to enhance <span className="font-main font-semibold"> analytical and logical thinking</span>.
                                I’m doing problem-solving based on specific scenarios on software used
                                to be. I also learn other things to stay <span className="font-main font-semibold"> curious and connected</span> with others.
                                Let’s connect for better networking and great relationships.
                            </p>
                        </div>
                        <button
                            className="
                            flex
                            items-center
                            px-8
                            py-3
                            border border-transparent
                            text-sm
                            font-bold
                            rounded-full
                            text-white
                            md:py-4 md:text-lg md:px-10
                            bg-brand-50
                            hover:bg-gray-800
                            transition-colors 
                            duration-300 
                            ease-in-out
                            cursor-pointer
                            w-[178px]
                            md:w-[225px]
                            "
                        >
                            <a> Download my CV </a>
                        </button>
                    </div>
                </div>
            </section>
            <section
                id="aboutme"
                className="relative h-screen snap-start flex items-center justify-space-between bg-cover bg-brand-100 bg-center"
            >
                <div className="flex flex-col-reverse md:flex-row py-20 xl:py-0 justify-between w-full px-5 md:px-24 ">
                    <div className="z-10 text-start text-brand-900 content-center mr-15 sm:mr-20 xl:mr-0">
                        <h1 className="text-3xl md:text-6xl font-bold font-main">
                            Want to more about me ?
                        </h1>
                        <div className="max-w-xl my-5  lg:my-8">
                            <p className="leading-relaxed text-[16px] md:text-[20px] font-main">
                            Interested in my background? You can find my full introduction, project portfolio, and more about me in here.
                            </p>
                        </div>
                        <button
                            className="
                            flex
                            items-center
                            px-8
                            py-3
                            border border-transparent
                            text-sm
                            font-bold
                            rounded-full
                            text-white
                            md:py-4 md:text-lg md:px-10
                            bg-brand-50
                            hover:bg-gray-800
                            transition-colors 
                            duration-300 
                            ease-in-out
                            cursor-pointer
                            "
                        >
                            <a> See More </a>
                        </button>      
                    </div>
                    <Image
                        className="rounded-[20px] mb-5 xl:mb-0 w-75 lg:w-auto"
                        src="/images/profile_1.jpg"
                        alt={""}  
                        width={400}  
                        height={600}                
                    />
                </div>
                 
            </section>
            <section
                id="projects"
                className="relative h-screen snap-start flex items-center justify-space-between bg-cover bg-brand-50 bg-center"
            >
                <div className="px-5 md:px-24 mx-auto">
                    <h1 className="text-3xl md:text-5xl font-semibold mb-5 font-main">
                        My Projects
                    </h1>
                </div>    
            </section>
            <section
                id="techstack"
                className="relative h-screen snap-start flex items-center justify-space-between bg-cover bg-brand-100 bg-center"
            >
                <div className="px-5 md:px-24 mx-auto">
                    <h1 className="text-3xl md:text-5xl font-semibold mb-5 font-main">
                        Tech Stack
                    </h1>
                </div>    
            </section>
            <section
                id="letsConnect"
                className="relative h-screen snap-start flex items-center justify-space-between bg-cover bg-brand-50 bg-center"
            >
                <div className="flex flex-col justify-center z-10 text-start text-brand-900 w-full">
                    <div className="px-5 md:px-24">
                        <h1 className="text-3xl md:text-6xl font-semibold mb-5 font-main text-brand-900 w-[500px]">
                            Let’s connect with me.
                        </h1>
                        <div className="max-w-xl mt-10">
                            <p className="leading-relaxed font-main font-light text-lg">
                                Let me know if you want to connect with me for business and network purposes, 
                                or you want to contact to me for work purposes in my email down here :
                            </p>
                        </div>
                        <div className="max-w-xl mt-4">
                            <p className="leading-relaxed font-main font-semibold text-xl">
                                adam.alfarizi.2002@gmail.com
                            </p>
                        </div>
                        <div className="max-w-xl mt-4">
                            <p className="leading-relaxed font-main font-light text-xl">
                                Link For My Contacts :
                            </p>
                        </div>
                        <div className="flex flex-row">

                        </div>
                    </div>   
                </div>
                 
            </section>
        </div>
        
    )
}

export default mainPage