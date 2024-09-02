import Link from "next/link";

export const Header = () => {
    return (
        <header className="h-full sm:h-full md:h-full lg:h-full xl:h-full w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 mx-auto flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-between p-3 sm:p-3 md:p-3 lg:p-3 xl:p-3 bg-neutral-100 border rounded-lg mt-0 sm:mt-0 md:mt-5 lg:mt-5 xl:mt-5 fixed bottom-0 sm:fixed sm:bottom-0 md:sticky md:top-0 lg:sticky lg:top-0 xl:sticky xl:top-0 ">
            <div className="w-full h-full flex sm:flex-1 flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row flex-wrap justify-between items-center rounded-md">

                <div className=" rounded-md ">
                    <h3 className="text-lg font-semibold text-gray-700 py-2 px-4">Onariam</h3>
                </div>

                <div className=" flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-around items-start sm:items-start md:items-center lg:items-center xl:items-center px-3 gap-4 my-8 sm:my-8 md:m-0 lg:m-0 xl:m-0 ">
                    <Link href={'/'}>
                        <h3 className="text-md font-normal hover:text-teal-500 ">Learn</h3>
                    </Link>

                    <Link href={'/'}>
                        <h3 className="text-md font-normal hover:text-teal-500">Products</h3>
                    </Link>
                    <Link href={'/'}>
                        <h3 className="text-md font-normal hover:text-teal-500">About</h3>
                    </Link>
                </div>

                <div className="">
                    <button className="w-full bg-gray-700 text-white p-2 px-3 rounded-md shadow-sm">Get Started</button>
                </div>

            </div>
        </header>
    );
}