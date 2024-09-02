"use client"

export const HeroSection = () => {
    return (
        // <div className="w-1/2 mx-auto border rounded-3xl bg-gray-900 my-8">
        //     <div className="p-12 flex flex-wrap">
        //         <h1 className=" text-7xl text-rose-500 font-bold mb-8 ">Onariam</h1>
        //         <h1 className="text-7xl text-teal-500 font-bold ">Where Creativity Meets Digital Transformation</h1>
        //     </div>

        // </div >
        <div
            className="w-11/12 sm:xl:w-11/12 md:w-11/12 lg:w-1/2 xl:w-1/2 mx-auto h-fit inset-0 border shadow-sm rounded-2xl bg-teal-600 bg-[radial-gradient(#065f46_1px,transparent_1px)] [background-size:16px_16px] mt-6" >
            <div className="p-8 flex flex-wrap flex-col items-start justify-center gap-3">
                {/* <h1 className=" text-2xl xs:text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl text-emerald-500 font-semibold mb-6 ">Onariam</h1> */}
                {/* <h1 className="text-3xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-600 via-teal-400 to-sky-500 bg-clip-text text-transparent">Where Creativity Meets Digital Transformation.</h1> */}
                {/* <p className="text-lg font-normal text-green-200">Welcome to Onariam: Explore a world where creativity knows no bounds as we lead the way in redefining the future of technology and business.</p> */}

                <button className=" bg-teal-400 text-teal-950 font-medium px-5 py-2 rounded-full text-xs  border border-teal-950 shadow-xl"> Onariam</button>
                <div className=" w-full flex flex-col items-start justify-between mt-5">
                    <div className="gap-3 flex flex-col w-10/12">
                        <div className="flex flex-row gap-3">
                            <div className=" bg-teal-500/70 border border-teal-900 rounded-full h-4 p-1 w-4/12 animate-pulse transition-allx duration-150 ease-in-out delay-75"></div>
                            <div className=" bg-teal-500/70 border border-teal-900 rounded-full h-4 p-1 w-10/12 animate-pulse transition-allx duration-150 ease-in-out delay-75"></div>
                        </div>
                        <div className="flex flex-row gap-3">
                            <div className=" bg-teal-500/70 border border-teal-900 rounded-full h-4 p-1 w-1/12 animate-pulse transition-allx duration-150 ease-in-out delay-75"></div>
                            <div className=" bg-yellow-200/70 border border-teal-900 rounded-full h-4 p-1 w-4/12 animate-pulse transition-allx duration-150 ease-in-out delay-75"></div>
                            <div className=" bg-teal-500/70 border border-teal-900 rounded-full h-4 p-1 w-8/12 animate-pulse transition-allx duration-150 ease-in-out delay-75"></div>

                        </div>
                        <div className="flex flex-row gap-3">
                            <div className=" bg-emerald-200/70 border border-teal-900 rounded-full h-4 p-1 w-5/12 animate-pulse transition-allx duration-150 ease-in-out delay-75"></div>
                            <div className=" bg-teal-500/70 border border-teal-900 rounded-full h-4 p-1 w-8/12 animate-pulse transition-allx duration-150 ease-in-out delay-75"></div>
                            <div className=" bg-yellow-200/70 border border-teal-900 rounded-full h-4 p-1 w-3/12 animate-pulse transition-allx duration-150 ease-in-out delay-75"></div>

                        </div>
                        <div className=" bg-teal-500/70 border border-teal-900 rounded-full h-4 p-1 w-8/12 animate-pulse transition-allx duration-300 ease-in-out delay-200 "></div>
                    </div>
                    <button className="  bg-yellow-200 text-teal-950 font-medium px-4 py-2 rounded-lg text-sm mt-20  border border-teal-950 shadow-sm"> Get Started!</button>

                </div>




            </div>

        </div >
    )
}