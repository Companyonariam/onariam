"use client"
import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion"

export const SectionGrid = () => {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress)


    return (
        <motion.div
            initial={{ opacity: 0, y: '-25px' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                // times: [0.4, 0.2, 0.5, 0.8, 1, 0.4],
                type: "spring",
                stiffness: 100,
                repeatDelay: 1
            }}
            className=" bg-stone-200 bg-[radial-gradient(#a8a29e_1px,transparent_2px)] [background-size:16px_16px] rounded-b-2xl  border border-stone-300 shadow-lg group">
            {/* <div className="p-2  h-48 bg-teal-600 rounded-xl  shadow-sm  col-span-2  bg-[radial-gradient(#115e59_1px,transparent_1px)] [background-size:16px_16px]">a</div>
            <div className="p-2  h-48 bg-stone-400 shadow-sm rounded-xl   bg-[radial-gradient(#78716c_1px,transparent_1px)] [background-size:16px_16px]">a</div> */}
            <div className="p-10  h-auto bg-yellow-200/40 rounded-lg overflow-hidden  relative  flex items-end justify-end flex-col">
                <h1 className="text-lg font-semibold text-stone-500  underline underline-offset-8 decoration-dashed">#What&apos;s Our&apos;s Motivation </h1>

                <h1 className="text-lg font-medium text-teal-600 my-4 z-10 text-right">Conquer the peaks, rise above the falls - every step is a leap toward victory!</h1>

                <div className="group-hover:animate-bounce delay-100  absolute -bottom-6 left-6 flex items-center justify-center  ">
                    <h1 className="text-7xl font-bold ">🐥</h1>
                </div>

            </div>

        </motion.div>
    )
}