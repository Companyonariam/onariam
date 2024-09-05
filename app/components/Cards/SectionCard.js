import { LuStar } from "react-icons/lu";

export const SectionCard = ({ data, id }) => {
    const { title, description } = data;

    let position;
    console.log(id)
    if (id % 2 == 0) {
        position = 'left';
    }
    else {
        position = "right";
    }
    return (
        <div className=" mx-auto flex flex-row items-center justify-between  shadow-sm rounded-2xl overflow-hidden my-8  bg-[radial-gradient(#115e59_1px,transparent_1px)] [background-size:16px_16px] ">
            {position == 'left' ? (
                <>
                    <div className="flex flex-col w-full p-8 py-12 overflow-hidden " >
                        <h1 className="text-2xl font-semibold text-yellow-100 mb-4">{title}</h1>
                        <p className="text-md text-yellow-100 font-normal z-10">{description}</p>
                    </div>
                    <div className=" w-1/3 flex items-center justify-center  py-8   relative ">
                        <h1 className="text-8xl scale-150 font-bold absolute -right-8 -bottom-24">🧭</h1>
                    </div>
                </>
            ) : (<>
                <div className=" w-1/3 flex items-center justify-center  py-8 relative">
                    <h1 className="text-8xl scale-150 font-bold text-teal-500 absolute -left-10 -bottom-28">⚙️</h1>
                </div>
                <div className="flex flex-col w-full p-8 py-12 " >
                    <h1 className="text-2xl font-semibold text-yellow-100 mb-4">{title}</h1>
                    <p className="text-md font-normal text-yellow-100 z-10">{description}</p>
                </div>

            </>)}
        </div>
    )
}