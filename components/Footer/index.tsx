import Link from "next/link";
import Image from "next/image";
import medyalar from "@/db/medyalar.json";

const Footer = () => {
    return (
        <footer className={"border-t border-gray-300 ease-in duration-300 shadow-xl hover:shadow-2xl bg-gray-900"}>
            <div className={"md:flex h-full w-full justify-center items-start text-center text-md md:text-lg text-white"}>
                <div className="md:w-1/3 m-4 mb-8">
                    <h2 className={"mb-4"}>İletişim</h2>
                    <Link className={"ease-in-out duration-150 hover:text-blue-300"} href={"tel:+905321231212"}>Telefon: 0532 123 45 67</Link>
                    <p>Adres: Denizli/Türkiye</p>
                </div>
                <div className="md:w-1/3 m-4 mb-8">
                    <h2 className={"mb-4"}>Hızlı Linkler</h2>
                    <div className="my-2"><Link className={"hover:text-blue-300 ease-in duration-150"} href={"/"}>Ana
                        Sayfa</Link></div>
                    <div className="my-2"><Link className={"hover:text-blue-300 ease-in duration-150"}
                                                href={"/"}>Hakkımızda</Link></div>
                    <div className="my-2"><Link className={"hover:text-blue-300 ease-in duration-150"}
                                                href={"/"}>Hizmetlerimiz</Link></div>
                    <div className="my-2"><Link className={"hover:text-blue-300 ease-in duration-150"}
                                                href={"/"}>İletişim</Link></div>
                </div>
                <div className="md:w-1/3 md:m-4 justify-center items-center text-center">
                    <h2 className={"mb-4"}>Bizi Takip Edin</h2>
                    <div className="flex flex-row justify-center">
                        {medyalar.map((medya) => (
                            <Link href={medya.link}>
                                <Image className={"rounded-full ring-1 ring-blue-50 m-4 hover:ring-blue-300 ease-in duration-150"}
                                       src={medya.img}
                                       alt={medya.title}
                                       width={25}
                                       height={25}
                                />
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer