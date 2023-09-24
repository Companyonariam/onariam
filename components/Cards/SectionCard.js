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
        <div className=" mx-auto flex flex-row items-center justify-between border shadow-sm rounded-2xl my-8 ">
            {position == 'left' ? (
                <>
                    <div className="flex flex-col w-full p-8 py-12 " >
                        <h1 className="text-2xl font-semibold text-gray-500 mb-4">{title}</h1>
                        <p className="text-md text-gray-500 font-normal">{description}</p>
                    </div>
                    <div className=" w-1/3 flex items-center justify-center bg-neutral-100 py-8  border border-r-0">
                        <h1 className="text-4xl font-bold"><LuStar className="stroke-1" /></h1>
                    </div>
                </>
            ) : (<>
                <div className=" w-1/3 flex items-center justify-center bg-neutral-100 py-8 border border-l-0">
                    <h1 className="text-4xl font-bold"><LuStar className="stroke-1" /></h1>
                </div>
                <div className="flex flex-col w-full p-8 py-12 " >
                    <h1 className="text-2xl font-semibold text-gray-500 mb-4">{title}</h1>
                    <p className="text-md font-normal text-gray-500">{description}</p>
                </div>

            </>)}
        </div>
    )
}