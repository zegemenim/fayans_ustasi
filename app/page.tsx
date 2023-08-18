import Image from 'next/image'
import Header from "@/components/Header";
import Link from "next/link";
import hizmetlerimiz from "@/db/hizmetlerimiz.json";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className={"h-full w-full"}>
            <Header/>
            <div className={"flex h-screen max-h-screen bg-[url(/fayans.jpeg)] bg-cover bg-center"}>
                <div className={"flex flex-col justify-center items-center w-full h-full bg-black bg-opacity-30"}>
                    <div className={"flex flex-col justify-center items-center"}>
                        <div className={"flex text-4xl md:text-6xl text-white font-bold"}>
                            Fayans Döşeme Ustası
                        </div>
                        <div className={"flex text-xl md:text-2xl m-4 text-white font-bold"}>
                            Güvenilir ve Kaliteli Hizmet
                        </div>
                        <Link
                            className={"flex border-2 border-blue-500 rounded-lg p-2 text-white text-md hover:text-lg hover:shadow-2xl shadow-blue-900 ease-in-out duration-300"}
                            href={""}>
                            İletişime Geç
                        </Link>
                    </div>
                </div>
            </div>
            <div className="justify-center items-center text-center ">
                <div
                    className="flex w-full text-2xl md:text-4xl text-center text-black font-bold justify-center my-4 md:my-6">
                    Hakkımızda
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 justify-center items-center">
                    <div className="text-md md:text-lg mx-8">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at autem cupiditate eveniet
                        maxime nobis odit, quas. Cumque cupiditate et iusto, omnis sed suscipit vero. At libero quaerat
                        quis veritatis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores
                        aspernatur beatae, consequatur consequuntur dicta, dignissimos eligendi iusto, nobis possimus
                        quisquam rerum tempora voluptatibus. Illo inventore ipsa nesciunt temporibus? Veniam! Lorem
                        ipsum dolor sit amet, consectetur adipisicing elit. Aut, molestiae, possimus! Asperiores,
                        distinctio et ex inventore molestiae quo reiciendis repudiandae velit. Blanditiis cupiditate
                        ipsam laboriosam odio quaerat quia sit voluptatibus?
                    </div>
                    <div
                        className="bg-center bg-cover bg-[url(/fayans.jpeg)] md:rounded-l-2xl min-h-[calc(100vh/2)]">.
                    </div>
                </div>
            </div>
            <div className="justify-center items-center text-center ">
                <div
                    className="flex w-full text-2xl md:text-4xl text-center text-black font-bold justify-center my-6 md:my-8">
                    Hizmetlerimiz
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-12 md:mx-16 my-4">

                    {hizmetlerimiz.map((hizmet, index) => (
                        <div className="justify-center items-center text-center my-4">
                            <div
                                className={"w-full shadow-xl ease-in-out duration-300 hover:shadow-2xl ring-1 ring-gray-300 hover:ring-gray-400 min-h-[40vh] bg-cover bg-center rounded-lg bg-[url(" + hizmet.img + ")]"}></div>
                            <h1 className={"text-2xl md:text-4xl font-bold my-4"}>
                                {hizmet.title}
                            </h1>
                            <p className={""}>
                                {hizmet.text}
                            </p>
                        </div>
                    ))}

                </div>
            </div>

            <div className="justify-center items-center text-center ">
                <div
                    className="flex w-full text-2xl md:text-4xl text-center text-black font-bold justify-center my-6 md:my-8">
                    İletişim
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-12 md:mx-16 my-4">
                </div>
            </div>

            <Footer />


        </main>
    )
}
