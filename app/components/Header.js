import Link from "next/link";

export const Header = () => {
    return (
        <header className="p-3 bg-yellow-100 w-full mx-auto rounded-b-3xl sticky top-0 z-20 flex items-center justify-center">
            <div className=" ">
                <h1 className="text-md font-medium text-stone-900">Onariam</h1>
            </div>

        </header>
    );
}