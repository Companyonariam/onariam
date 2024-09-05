"use client"
import { motion, useScroll } from "framer-motion"

export const HeroSection = () => {
    const { scrollYProgress } = useScroll();
    return (
        // <div className="w-1/2 mx-auto border rounded-3xl bg-gray-900 my-8">
        //     <div className="p-12 flex flex-wrap">
        //         <h1 className=" text-7xl text-rose-500 font-bold mb-8 ">Onariam</h1>
        //         <h1 className="text-7xl text-teal-500 font-bold ">Where Creativity Meets Digital Transformation</h1>
        //     </div>

        // </div >
        <motion.div
            initial={{ opacity: 0, y: '-100px' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 1,
                ease: "easeInOut",
                // times: [0.4, 0.2, 0.5, 0.8, 1, 0.4],
                type: "spring",
                stiffness: 100,
                repeatDelay: 1
            }}
            className="h-fit inset-0 shadow-lg  bg-teal-600 bg-[radial-gradient(#115e59_1px,transparent_1px)] [background-size:16px_16px] mt-6 overflow-hidden group cursor-pointer rounded-t-2xl" >
            <motion.div className="p-8 flex flex-wrap flex-col items-start justify-center gap-3">
                {/* <h1 className=" text-2xl xs:text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl text-emerald-500 font-semibold mb-6 ">Onariam</h1> */}
                {/* <h1 className="text-3xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-600 via-teal-400 to-sky-500 bg-clip-text text-transparent">Where Creativity Meets Digital Transformation.</h1> */}
                {/* <p className="text-lg font-normal text-green-200">Welcome to Onariam: Explore a world where creativity knows no bounds as we lead the way in redefining the future of technology and business.</p> */}
                <div className="flex flex-row gap-3 [&_*]:shadow-sm">
                    <div className=" bg-teal-500/70  rounded-full h-4 p-1 w-1/12 animate-pulse transition-allx duration-150 ease-in-out delay-75"></div>
                    <div className=" bg-yellow-200/70  rounded-full h-4 p-1 w-3/12 animate-pulse transition-allx duration-150 ease-in-out delay-75"></div>
                    <div className=" bg-teal-500/70  rounded-full h-4 p-1 w-8/12 animate-pulse transition-allx duration-150 ease-in-out delay-75"></div>

                </div>
                <div className='mt-3'>
                    <h1 className='text-5xl font-semibold  text-yellow-100'>Discover <span className='text-amber-200'>Onariam</span> SaaS </h1>
                </div>

                <div className=" w-full flex flex-col items-start justify-between  relative">
                    <div className="gap-3 flex flex-col w-full">

                        <div className="flex flex-col gap-3 ">
                            <div className=" text-amber-100  font-medium  text-2xl "> Invest in Your Success: Our Platform Delivers Value. </div>
                            <div className=" text-amber-200 font-medium  text-lg "></div>
                        </div>
                        <div className="flex flex-row gap-3 [&_*]:shadow-sm">
                            <div className=" bg-teal-500/70  rounded-full h-4 p-1 w-1/12 animate-pulse transition-allx duration-150 ease-in-out delay-75"></div>
                            <div className=" bg-yellow-200/70  rounded-full h-4 p-1 w-3/12 animate-pulse transition-allx duration-150 ease-in-out delay-75"></div>
                            <div className=" bg-teal-500/70  rounded-full h-4 p-1 w-8/12 animate-pulse transition-allx duration-150 ease-in-out delay-75"></div>

                        </div>




                        <div className="flex flex-row gap-3 [&_*]:shadow-sm">
                            <div className=" bg-emerald-200/70   rounded-full h-4 p-1 w-5/12 animate-pulse transition-allx duration-150 ease-in-out delay-75"></div>
                            <div className=" bg-yellow-200/70  rounded-full h-4 p-1 w-3/12 animate-pulse transition-allx duration-150 ease-in-out delay-75"></div>

                        </div>


                        <div className=" bg-teal-500/70 [&_*]:shadow-sm rounded-full h-4 p-1 w-6/12 animate-pulse transition-allx duration-300 ease-in-out delay-200 "></div>

                    </div>

                    {/* <button className="  bg-yellow-200 text-gray-900 font-semibold px-4 py-2 rounded-full text-sm mt-2  shadow-sm"> Get Started!</button> */}
                    <motion.div


                        className="absolute bottom-0 right-0 -mb-14 flex items-center justify-center  ">

                        <motion.div
                            animate={{
                                y: ["-5px", "10px"],
                                rotate: ['20deg', '0deg', '-20deg', '0deg']
                            }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                times: [0.4, 0.2, 0.5, 0.8, 1, 0.4],
                                repeat: Infinity,
                                repeatDelay: 1
                            }}
                            className=" z-10 text-8xl font-bold transform   group-hover:mb-2 group-hover:-rotate-12 transition-all">🐤</motion.div>


                    </motion.div>


                </div>




            </motion.div>

        </motion.div >
    )
}