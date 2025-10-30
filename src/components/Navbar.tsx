"use client"

const Navbar = () => {
    return (
        <>
            <nav className={`navbar px-5 md:px-24 w-screen fixed backdrop-blur-md transition-colors ease duration-500 inset-0 flex flex-row justify-between items-center h-16 z-50 `}>
                <div>
                    <h1
                        className={`font-main font-bold text-2xl ml-2 md:ml-0 transition-colors ease duration-500 text-white`}>
                        AAI
                    </h1>
                </div>
            </nav>
        </>
    )
}
export default Navbar