import "./globals.css";
import { Fira_Sans } from "next/font/google";
const inter = Fira_Sans({ weight: "400", subsets: ["cyrillic"] });

export const metadata = {
    title: "İçerik Paneli | Aquat Marine",
    description:
        "Aquat Marine Construction İçerik Paneli",
    keywords:
        "panel",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="tr">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}
