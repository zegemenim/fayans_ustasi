import Header from "@/components/Header";
import Footer from "@/components/Footer";

const hakkimizda = () => {
    return (
        <main className={""}>
            <Header />
            <div className="h-screenjustify-center items-center text-center ">
                <h1 className={"text-4xl font-bold text-gray-700 m-4"}>Hakkımızda</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 justify-center items-center">
                    <div className="text-md md:text-lg mx-8">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at autem cupiditate eveniet
                        maxime nobis odit, quas. Cumque cupiditate et iusto, omnis sed suscipit vero. At libero quaerat
                        quis veritatis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores
                        aspernatur beatae, consequatur consequuntur dicta, dignissimos eligendi iusto, nobis possimus
                        quisquam rerum tempora voluptatibus. Illo inventore ipsa nesciunt temporibus? Veniam! Lorem
                        ipsum dolor sit amet, consectetur adipisicing elit. Aut, molestiae, possimus! Asperiores,
                    </div>
                    <div
                        className="bg-center bg-cover bg-[url(/fayans.jpeg)] md:rounded-l-2xl min-h-[calc(100vh/2)]">.
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}
