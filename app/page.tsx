import SideBar from "./Components/SideBar";

export default async function Home() {
    return (
        <main className="flex">
            <SideBar />
            <div className="ml-[300px] m-16">
                <h1 className="ml-[50px] text-2xl font-bold">İçerik Yönetim Paneline Hoşgeldiniz.</h1>

                <div className="mt-16 flex">
                    <div className="w-[150px]">
                        <svg viewBox="0 0 800 800"><g strokeWidth="32" stroke="hsl(227, 71%, 57%)" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="0 52" transform="matrix(-0.9975640502598243,-0.06975647374412483,0.06975647374412483,-0.9975640502598243,782.1230306062798,835.9282096015797)"><path d="M108 123.32850646972656Q607 -20.671493530273438 400 415.32850646972656Q210 751.3285064697266 692 707.3285064697266 " markerEnd="url(#SvgjsMarker3230)"></path></g><defs><marker markerWidth="3.5" markerHeight="3.5" refX="1.75" refY="1.75" viewBox="0 0 3.5 3.5" orient="auto" id="SvgjsMarker3230"><polygon points="0.7,3.5 0,1.75 0.7,0 3.5,1.75" fill="hsl(227, 71%, 57%)"></polygon></marker></defs></svg>
                    </div>
                    <div className="w-[300px] text-lg mt-16 p-4 rounded-3xl shadow-lg bg-blue-200">
                        <p>Sol taraftaki menüde sitenizdeki bölümler bulunmaktadır.</p>
                        <br />
                        <p>Düzenlemek istediğiniz sayfaya tıklayarak, yazıları ve
                            fotoğrafları düzenlemeye başlayabilirsiniz.</p>

                    </div>
                </div>
            </div>
        </main>
    );
}
