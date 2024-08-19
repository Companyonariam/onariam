"use client"
import gsap from "gsap";

export const SectionOne = () => {

    const Dice = Math.floor(Math.random() * 6);
    console.log(Dice)

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
        <div className=" w-11/12 mx-auto rounded-2xl my-6 border p-12">
            {Dice}
            <div className="">
                {
                    gameData?.map((data, id) => {
                        return (
                            <div className="" key={id}>
                                {data.currentPlayerTurn}
                                {Array.from(100).fill(0).map((box, id) => {
                                    return (
                                        <div className="border p-2 h-8 w-8 bg-green-300" key={id}>{box}</div>
                                    )
                                })}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}