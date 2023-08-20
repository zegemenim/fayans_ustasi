import Link from "next/link";

const Header = () => {
    return (
        <header className={"flex w-full justify-between border-b border-gray-300 bg-gray-50 fixed opacity-80 shadow-xl hover:shadow-2xl ease-in duration-300"}>
            <div className="flex text-md md:text-2xl p-4 ">
                Fayans Döşeme Ustası
            </div>
            <div className="flex justify-center text-center text-md md:text-lg">
                <Link className={"flex text-gray-700 items-center mr-4 ease-in-out transition-all duration-300 hover:text-2xl hover:text-black"} href="">
                    Ana sayfa
                </Link>
                <Link className={"flex text-gray-700 items-center mr-4 ease-in-out transition-all duration-300 hover:text-2xl hover:text-black"} href="">
                    Hakkımızda
                </Link>
                <Link className={"flex text-gray-700 items-center mr-4 ease-in-out transition-all duration-300 hover:text-2xl hover:text-black"} href="">
                    Hizmetlerimiz
                </Link>
                <Link className={"flex text-gray-700 items-center mr-8 ease-in-out transition-all duration-300 hover:text-2xl hover:text-black"} href="">
                    İletişim
                </Link>
            </div>
        </header>
    )
}

export default Header