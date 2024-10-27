import Image from "next/image";
import Link from "next/link";
import { LogoutButton } from "./buttons.component";
import logo from "@/public/logo.webp";

const list = [
    {
        name: "Slider",
        href: "slider",
    },
    {
        name: "Hakkımızda",
        href: "hakkimizda",
    },
    {
        name: "Hizmetlerimiz",
        href: "hizmetlerimiz",
    },
    {
        name: "Referanslar",
        href: "referanslar",
    },
    {
        name: "İletişim",
        href: "iletisim",
    },
];

const SideBar = () => {
    return (
        <nav className="fixed top-0 left-0 h-full w-[300px] shadow-lg">
            <div className="flex flex-col items-center py-3 border-b-2">
                <Image src={logo} priority alt="logo" className="w-[70%]" />
                <h1 className="text-xl font-semibold mt-2">Yönetim Paneli</h1>
            </div>

            <div className="pl-8 mt-4 text-xl flex flex-col gap-y-3">
                {list.map((item, index) => {
                    return (
                        <Link
                            key={index}
                            href={`/${item.href}`}
                            className="transition-all duration-150 hover:scale-110">
                            {item.name}
                        </Link>
                    );
                })}
            </div>

            <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2">
                <LogoutButton />
            </div>
        </nav>
    );
};

export default SideBar;
