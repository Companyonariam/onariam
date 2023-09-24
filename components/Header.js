import Link from "next/link";

export const Header = () => {
    return (
        <header className="w-1/2 mx-auto flex flex-row items-center justify-between p-3 bg-neutral-100 border rounded-lg mt-5  sticky top-0 ">
            <div className="w-full flex flex-row flex-wrap justify-between items-center rounded-md">
                <div className=" rounded-md ">
                    <h3 className="text-lg font-semibold text-gray-700 py-2 px-4">Onariam</h3>
                </div>

                <div className="flex flex-row justify-around items-center px-3 gap-4  ">
                    <Link href={'/'}>
                        <h3 className="text-md font-normal hover:text-teal-500">Learn</h3>
                    </Link>

                    <Link href={'/'}>
                        <h3 className="text-md font-normal hover:text-teal-500">Products</h3>
                    </Link>
                    <Link href={'/'}>
                        <h3 className="text-md font-normal hover:text-teal-500">About</h3>
                    </Link>
                </div>

                <div className="">
                    <button className="bg-gray-700 text-white p-2 px-3 rounded-md shadow-sm">Get Started</button>
                </div>

            </div>
        </header>
    );
}