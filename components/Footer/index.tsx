import Link from "next/link";

const Footer = () => {
    return (
        <footer className={"border-t border-gray-300 ease-in duration-300 shadow-xl hover:shadow-2xl bg-gray-900"}>
            <div className={"flex h-full w-full justify-center items-start text-center text-md md:text-lg text-white"}>
                <div className="w-1/3 m-4">
                    <h2 className={"mb-4"}>İletişim</h2>
                    <p>Telefon: 0532 123 45 67</p>
                    <p>Adres: Denizli/Türkiye</p>
                </div>
                <div className="w-1/3 m-4">
                    <h2 className={"mb-4"}>Hızlı Linkler</h2>
                    <div className="my-2"><Link className={"hover:text-blue-300 ease-in duration-150"} href={"/"}>Ana Sayfa</Link></div>
                    <div className="my-2"><Link className={"hover:text-blue-300 ease-in duration-150"} href={"/"}>Hakkımızda</Link></div>
                    <div className="my-2"><Link className={"hover:text-blue-300 ease-in duration-150"} href={"/"}>Hizmetlerimiz</Link></div>
                    <div className="my-2"><Link className={"hover:text-blue-300 ease-in duration-150"} href={"/"}>İletişim</Link></div>
                </div>
                <div className="w-1/3 m-4">
                    <h2 className={"mb-4"}>Bizi Takip Edin</h2>

                </div>
            </div>
        </footer>
    );
}

export default Footer