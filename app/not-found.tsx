import SideBar from "./Components/SideBar";
import Underline from "./Components/Underline";
import Footer from "./Components/Footer";
import Link from "next/link";

const notFound = () => {
    return (
        <div>
            <SideBar />
            <div className="absolute flex flex-col left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-fit h-fit items-center text-center">
                <h1 className="text-4xl font-bold">404</h1>
                <Underline/>
                <p className="text-xl font-semibold mt-8">Üzgünüz, aradığınız sayfa mevcut değil. </p>
                <p className="text-xl font-semibold">Yan panelden bir bölümü seçerek düzenlemeye başlayabilirsiniz</p>
                <Link href='/' className="bg-primary2 text-xl text-white mt-8 px-6 py-2 rounded-full">Ana Sayfa</Link>
            </div>
            <Footer className="fixed bottom-0 left-0 right-0" />
        </div>
    );
};

export default notFound;
