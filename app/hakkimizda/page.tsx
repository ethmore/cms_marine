"use client";
import SideBar from "../Components/SideBar";
import Footer from "../Components/Footer";

import React, { useRef, useState } from "react";
import { TextEditor, EditorFunctions } from "../Components/TextEditor";
import FileInputArea from "../Components/FileInputArea";
import SaveChangesButton from "../Components/SaveChangesButton";

const page = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [unsaved, setUnsaved] = useState(false);
    const editorRef = useRef<EditorFunctions[]>([]);

    return (
        <div>
            <SideBar />
            <form
                onSubmit={(e) => e.preventDefault()}
                className="ml-[350px] flex flex-col items-center my-16 bg-slate-200 p-8 rounded-3xl shadow-lg w-[70%] ">
                <SaveChangesButton isLoading={isLoading} isSaved={unsaved} />

                <h1 className="text-2xl">Hakkımızda</h1>
                <div className="flex flex-col w-[75%] justify-around">
                    <div className="flex flex-col gap-y-4">
                        <TextEditor
                            ref={(ref: EditorFunctions) => {
                                editorRef.current[0] = ref;
                            }}
                            initialContent={`Mühendislikten arama kurtarmaya kadar uzanan geniş bir yelpazede <b><i>hizmet</i></b> sunarak, müşterilerimize <b><i>güven ve yenilik</i></b> sağlıyoruz.`}
                            finalContent={(content: string) => {}}
                            setUnsaved={setUnsaved}
                        />
                    </div>

                    <div className="flex mt-10">
                        <TextEditor
                            ref={(ref: EditorFunctions) => {
                                editorRef.current[1] = ref;
                            }}
                            className="w-1/2"
                            initialContent={`<p>
                            Aquat Marine Constructions olarak, deniz
                            ekosistemlerinin korunması ve deniz kirliliğinin
                            azaltılması için aktif olarak çalışıyoruz ve gelecek
                            nesiller için sağlıklı bir deniz ortamı bırakmayı
                            amaçlıyoruz.
                        </p>
                        <p className="pt-4">
                            Misyonumuz, denizcilik sektöründe mükemmelliği teşvik
                            etmek ve denizlerin sınırsız potansiyelini
                            müşterilerimize sunmaktır. Her projeye yenilikçi bir
                            yaklaşım getiriyoruz ve müşterilerimizin beklentilerini
                            aşmak için çalışıyoruz.
                        </p>`}
                            finalContent={(content: string) => {
                                setUnsaved(true);
                            }}
                            setUnsaved={setUnsaved}
                        />

                        <FileInputArea
                            className="h-[400px] w-1/2 ml-4"
                            id={1}
                            source={"/about/about-1280w.webp"}
                            fileName={"about_image_1"}
                            setUnsaved={setUnsaved}
                        />
                    </div>
                </div>
            </form>
            <Footer />
        </div>
    );
};

export default page;
