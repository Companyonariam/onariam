"use client"
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion"

export const SectionOne = () => {

    const [Dice, setDice] = useState(null);



    const roll = () => {
        const dice = Math.floor(Math.random() * 6) + 1;
        setDice(dice);
    }


    const gameData = [{
        players: [
            {
                id: 1,
                name: 'samanth',
                currentPosition: 0,
                lives: 3,
                isPlaying: false
            },
            {
                id: 2,
                name: 'Neil',
                currentPosition: 2,
                lives: 3,
                isPlaying: true
            }

        ],
        currentPlayerTurn: 'samanth',
        nextPlayerTurn: 'neil',
        gridCount: 100
    }];



    return (
        <motion.div
            initial={{ opacity: 0, y: '-100px' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 1,
                ease: "easeInOut",
                // times: [0.4, 0.2, 0.5, 0.8, 1, 0.4],
                type: "spring",
                stiffness: 300,
                repeatDelay: 1
            }}
            className=" rounded-2xl my-12 p-8 flex items-center justify-center bg-gray-800 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px] overflow-hidden ">

            {/* <div className="">
                {
                    gameData?.map((data, id) => {
                        return (
                            <div className="" key={id}>
                                {data.currentPlayerTurn}
                                {Array.from(100).fill(0).map((box, id) => {
                                    return (
                                        <div className="border p-2 h-8 w-8 bg-green-300" key={id}>{box} </div>
                                    )
                                })}
                            </div>
                        )
                    })
                }
            </div> */}

            {/* grid */}
            <motion.div className="w-full flex items-start justify-center flex-col bg-yellow-100 p-8 rounded-xl relative  z-20 bg-[radial-gradient(#a8a29e_1px,transparent_1px)] [background-size:18px_18px]">
                <motion.div

                    initial={{ x: '25px' }}
                    animate={{ x: 0 }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        // times: [0.4, 0.2, 0.5, 0.8, 1, 0.4],
                        type: "spring",
                        stiffness: 200,
                        repeatDelay: 1
                    }}
                    className=" z-10 text-7xl text-stone-600  font-semibold transform  group-hover:mb-2 group-hover:-rotate-12 transition-all absolute -bottom-5 -right-6 "> 🐣</motion.div>



                <motion.div

                    initial={{ opacity: 0, }}
                    animate={{ opacity: 1, }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        // times: [0.4, 0.2, 0.5, 0.8, 1, 0.4],
                        type: "spring",
                        stiffness: 100,
                        repeatDelay: 1
                    }}
                    className=" z-10 text-3xl text-teal-600  font-semibold transform  group-hover:mb-2 group-hover:-rotate-12 transition-all  "> The Adventure of Ducky</motion.div>


                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        // times: [0.4, 0.2, 0.5, 0.8, 1, 0.4],
                        type: "spring",
                        stiffness: 100,
                        repeatDelay: 1
                    }}
                    className="text-md font-medium mt-6 text-stone-600 bg-yellow-100/50 ">

                    Ducky, a fearless little duck, discovers a magical compass called the Duckit, which leads him to the Peak of Triumph and the legendary Amulet of Bravery. With courage and the Duckit&apos;s guidance, Ducky overcomes towering cliffs, slippery slopes, and roaring waterfalls. Finally, he reaches the peak, claiming the amulet and proving that no challenge is too great for a determined duck. With the Duckit in wing, Ducky heads home, ready for the next adventure.
                </motion.div>
                <button className="  bg-teal-500/70 hover:bg-yellow-200/70 border border-stone-600 text-stone-800 font-medium px-8 py-2 rounded-full text-sm mt-6  shadow-lg"> Let&apos;s go!</button>

            </motion.div>
        </motion.div>
    )
}