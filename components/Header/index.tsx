const Header = () => {
    return (
        <header className={"flex w-full justify-between border-b border-gray-300 bg-gray-50 fixed opacity-80 shadow-xl hover:shadow-2xl ease-in duration-300"}>
            <div className="flex text-md md:text-2xl p-4 ">
                Fayans Döşeme Ustası
            </div>
            <div className="flex justify-center text-center text-md md:text-lg">
                <a className={"flex text-gray-700 items-center mr-4 ease-in-out transition-all duration-300 hover:text-2xl hover:text-black"} href="">
                    Ana sayfa
                </a>
                <a className={"flex text-gray-700 items-center mr-4 ease-in-out transition-all duration-300 hover:text-2xl hover:text-black"} href="">
                    Hakkımızda
                </a>
                <a className={"flex text-gray-700 items-center mr-4 ease-in-out transition-all duration-300 hover:text-2xl hover:text-black"} href="">
                    Hizmetlerimiz
                </a>
                <a className={"flex text-gray-700 items-center mr-8 ease-in-out transition-all duration-300 hover:text-2xl hover:text-black"} href="">
                    İletişim
                </a>
            </div>
        </header>
    )
}

export default Header