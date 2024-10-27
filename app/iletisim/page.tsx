"use client";
import { useRef, useState } from "react";
import SideBar from "../Components/SideBar";
import Footer from "../Components/Footer";

import { TextEditor, EditorFunctions } from "../Components/TextEditor";
import TextArea from "../Components/TextArea";
import SaveChangesButton from "../Components/SaveChangesButton";

const page = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [unsaved, setUnsaved] = useState(false);

    const editorRef = useRef<EditorFunctions[]>([]);

    return (
        <div>
            <SideBar />
            <form className="ml-[350px] flex flex-col items-center my-16 bg-slate-200 p-8 rounded-3xl shadow-lg w-[70%] ">
                <SaveChangesButton isLoading={isLoading} isSaved={unsaved} />

                <h1 className="text-2xl">İletişim</h1>

                <div className="mt-4 flex flex-col gap-y-4 w-full">
                    <div>
                        <p className="text-lg">Şirket</p>
                        <TextEditor
                            ref={(ref: EditorFunctions) => {
                                editorRef.current[0] = ref;
                            }}
                            finalContent={(content: string) => {
                                setUnsaved(true);
                            }}
                            setUnsaved={setUnsaved}
                        />
                    </div>
                    <div>
                        <p className="text-lg">Adres</p>
                        <TextEditor
                            ref={(ref: EditorFunctions) => {
                                editorRef.current[1] = ref;
                            }}
                            finalContent={(content: string) => {
                                setUnsaved(true);
                            }}
                            setUnsaved={setUnsaved}
                        />
                    </div>
                    <div>
                        <p className="text-lg">İletişim Numarası</p>
                        <TextEditor
                            ref={(ref: EditorFunctions) => {
                                editorRef.current[2] = ref;
                            }}
                            finalContent={(content: string) => {
                                setUnsaved(true);
                            }}
                            setUnsaved={setUnsaved}
                        />
                    </div>
                    <div>
                        <p className="text-lg">Mail Adresi</p>
                        <TextEditor
                            ref={(ref: EditorFunctions) => {
                                editorRef.current[3] = ref;
                            }}
                            initialContent={`info@aquatmarine.com.tr`}
                            finalContent={async (content: string) => {
                                setUnsaved(true);
                            }}
                            setUnsaved={setUnsaved}
                        />
                    </div>
                    <div>
                        <p className="text-lg">Whatsapp İletişim Numarası</p>
                        <TextArea
                            className="!max-h-fit !min-h-fit !w-full"
                            id={4}
                            content={``}
                            name={"contact_textarea_5"}
                            setUnsaved={setUnsaved}
                            ariaLabel="whatsapp number"
                        />
                    </div>
                    <div>
                        <p className="text-lg">Facebook Profil Linki</p>
                        <TextArea
                            className="!max-h-fit !min-h-fit !w-full"
                            id={5}
                            content={``}
                            name={"contact_textarea_6"}
                            setUnsaved={setUnsaved}
                            ariaLabel="facebook profile link"
                        />
                    </div>
                    <div>
                        <p className="text-lg">Instagram Profil Linki</p>
                        <TextArea
                            className="!max-h-fit !min-h-fit !w-full"
                            id={6}
                            content={``}
                            name={"contact_textarea_7"}
                            setUnsaved={setUnsaved}
                            ariaLabel="instagram profile link"
                        />
                    </div>
                </div>
            </form>
            <Footer />
        </div>
    );
};

export default page;
