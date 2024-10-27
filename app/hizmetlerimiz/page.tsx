"use client";
import { useRef, useState } from "react";
import SideBar from "../Components/SideBar";
import Footer from "../Components/Footer";
import { TextEditor, EditorFunctions } from "../Components/TextEditor";
import TextArea from "../Components/TextArea";
import FileInputArea from "../Components/FileInputArea";
import SaveChangesButton from "../Components/SaveChangesButton";

const page = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [unsaved, setUnsaved] = useState(false);
    const editorRef = useRef<EditorFunctions[]>([]);

    const textAreaStyle =
        "bg-slate-100 max-h-[50px] min-h-[50px] min-w-full mt-16 text-2xl";

    return (
        <div>
            <SideBar />

            <form className="ml-[350px] flex flex-col items-center my-16 bg-slate-200 p-8 rounded-3xl shadow-lg w-[70%] ">
                <SaveChangesButton isLoading={isLoading} isSaved={unsaved} />
                <h1 className="text-2xl">Hizmetlerimiz</h1>
                <div className="flex flex-col justify-around">
                    <TextArea
                        content={`Deniz Yapıları İnşaatı`}
                        id={0}
                        name="services_textarea_0"
                        setUnsaved={setUnsaved}
                        className={textAreaStyle}
                    />
                    <div className="flex justify-between mt-4">
                        <TextEditor
                            ref={(ref: EditorFunctions) => {
                                editorRef.current[1] = ref;
                            }}
                            className="w-[48%]"
                            initialContent={`<p>Yüzer iskelelerin inşası.</p>
                                            <p>Liman ve marina yapıları.</p>
                                            <p>Deniz platformları.</p>
                                            <p>Dalgakıran ve rıhtımlar.</p>`}
                            finalContent={(content: string) => {}}
                            setUnsaved={setUnsaved}
                        />
                        <div className="flex w-1/2 gap-3">
                            <FileInputArea
                                className="h-[200px] w-1/2"
                                id={0}
                                source={"/services/service1.webp"}
                                fileName={"services_1"}
                                setUnsaved={setUnsaved}
                            />
                            <FileInputArea
                                className="h-[200px] w-1/2"
                                id={1}
                                source={"/services/service2.webp"}
                                fileName={"services_2"}
                                setUnsaved={setUnsaved}
                            />
                        </div>
                    </div>

                    <TextArea
                        content={`Sualtı Araştırma ve Keşif`}
                        id={2}
                        name="services_textarea_2"
                        setUnsaved={setUnsaved}
                        className={textAreaStyle}
                    />
                    <div className="flex justify-between mt-4">
                        <TextEditor
                            ref={(ref: EditorFunctions) => {
                                editorRef.current[3] = ref;
                            }}
                            className="w-[48%]"
                            initialContent={`<p>Denizaltı keşif görevleri.</p>
                                            <p>Sualtı haritalama ve inceleme.</p>
                                            <p>Batık araştırma ve kurtarma.</p>
                                            <p>Biyoçeşitlilik araştırmaları.</p>`}
                            finalContent={(content: string) => {}}
                            setUnsaved={setUnsaved}
                        />
                        <div className="flex w-1/2  gap-3">
                            <FileInputArea
                                className="h-[200px] w-1/2"
                                id={2}
                                source={"/services/service3.webp"}
                                fileName={"services_3"}
                                setUnsaved={setUnsaved}
                            />
                            <FileInputArea
                                className="h-[200px] w-1/2"
                                id={3}
                                source={"/services/service4.webp"}
                                fileName={"services_4"}
                                setUnsaved={setUnsaved}
                            />
                        </div>
                    </div>

                    <TextArea
                        content={`Arama Kurtarma Hizmetleri`}
                        id={4}
                        name="services_textarea_4"
                        setUnsaved={setUnsaved}
                        className={textAreaStyle}
                    />
                    <div className="flex justify-between mt-4">
                        <TextEditor
                            ref={(ref: EditorFunctions) => {
                                editorRef.current[5] = ref;
                            }}
                            className="w-[48%]"
                            initialContent={`<p>Acil durum müdahale ekipleri.</p>
                                            <p>Denizde kaybolan veya mahsur kalan kişilerin aranması.</p>
                                            <p>Kaza sonrası enkaz temizliği.</p>
                                            <p>Kurtarma eğitim ve danışmanlık hizmetleri.</p>`}
                            finalContent={(content: string) => {}}
                            setUnsaved={setUnsaved}
                        />
                        <div className="flex w-1/2  gap-3">
                            <FileInputArea
                                className="h-[200px] w-1/2"
                                id={4}
                                source={"/services/service5.webp"}
                                fileName={"services_5"}
                                setUnsaved={setUnsaved}
                            />
                            <FileInputArea
                                className="h-[200px] w-1/2"
                                id={5}
                                source={"/services/service6.webp"}
                                fileName={"services_6"}
                                setUnsaved={setUnsaved}
                            />
                        </div>
                    </div>

                    <TextArea
                        content={`Endüstriyel Dalış Hizmetleri`}
                        id={6}
                        name="services_textarea_6"
                        setUnsaved={setUnsaved}
                        className={textAreaStyle}
                    />
                    <div className="flex justify-between mt-4">
                        <TextEditor
                            ref={(ref: EditorFunctions) => {
                                editorRef.current[7] = ref;
                            }}
                            className="w-[48%]"
                            initialContent={`<p>Su altı kaynakları montajı ve bakımı.</p>
                                            <p>Denizaltı yapıların onarımı ve bakımı.</p>
                                            <p>Dalış gözetim ve güvenlik.</p>
                                            <p>Denizaltı kaynak işleri.</p>`}
                            finalContent={(content: string) => {}}
                            setUnsaved={setUnsaved}
                        />
                        <div className="flex w-1/2  gap-3">
                            <FileInputArea
                                className="h-[200px] w-1/2"
                                id={6}
                                source={"/services/service7.webp"}
                                fileName={"services_7"}
                                setUnsaved={setUnsaved}
                            />
                            <FileInputArea
                                className="h-[200px] w-1/2"
                                id={7}
                                source={"/services/service8.webp"}
                                fileName={"services_8"}
                                setUnsaved={setUnsaved}
                            />
                        </div>
                    </div>

                    <TextArea
                        content={`Deniz Çevresi Koruma ve Bakım`}
                        id={8}
                        name="services_textarea_8"
                        setUnsaved={setUnsaved}
                        className={textAreaStyle}
                    />
                    <div className="flex justify-between mt-4">
                        <TextEditor
                            ref={(ref: EditorFunctions) => {
                                editorRef.current[9] = ref;
                            }}
                            className="w-[48%]"
                            initialContent={`<p>Deniz temizliği ve atık toplama.</p>
                                            <p>Resif restorasyonu ve korunması.</p>
                                            <p>Deniz yaşamı rehabilitasyonu.</p>
                                            <p>Deniz kirliliği önleme danışmanlığı.</p>`}
                            finalContent={(content: string) => {}}
                            setUnsaved={setUnsaved}
                        />
                        <div className="flex w-1/2  gap-3">
                            <FileInputArea
                                className="h-[200px] w-1/2"
                                id={8}
                                source={"/services/service9.webp"}
                                fileName={"services_9"}
                                setUnsaved={setUnsaved}
                            />
                            <FileInputArea
                                className="h-[200px] w-1/2"
                                id={9}
                                source={"/services/service10.webp"}
                                fileName={"services_10"}
                                setUnsaved={setUnsaved}
                            />
                        </div>
                    </div>
                </div>
            </form>
            <Footer />
        </div>
    );
};

export default page;
