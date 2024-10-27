"use client";
import React from "react";
import { useRef, useState } from "react";
import SaveChangesButton from "../Components/SaveChangesButton";
import { TextEditor, EditorFunctions } from "../Components/TextEditor";
import FileInputArea from "../Components/FileInputArea";

const CarouselText = () => {
    const [isSaving, setIsSaving] = useState(false);
    const [unsaved, setUnsaved] = useState(false);
    const editorRef = useRef<EditorFunctions[]>([]);

    return (
        <form className="flex flex-col items-center ml-[350px] my-16 bg-slate-200 p-8 rounded-3xl shadow-lg w-[70%]">
            <SaveChangesButton isLoading={isSaving} isSaved={unsaved} />

            <h1 className="text-2xl">Slider Görselleri</h1>

            <div className="flex justify-between flex-wrap mt-4">
                <FileInputArea
                    className="h-[300px] w-[30%]"
                    id={0}
                    source={"/carousel/carousel1.webp"}
                    fileName={"carousel_image_1"}
                    setUnsaved={setUnsaved}
                />
                <FileInputArea
                    className="h-[300px] w-[30%]"
                    id={1}
                    source={"/carousel/carousel2.webp"}
                    fileName={"carousel_image_2"}
                    setUnsaved={setUnsaved}
                />
                <FileInputArea
                    className="h-[300px] w-[30%]"
                    id={2}
                    source={"/carousel/carousel3.webp"}
                    fileName={"carousel_image_3"}
                    setUnsaved={setUnsaved}
                />
            </div>

            <div className="w-full flex flex-col justify-center">
                <div>
                    <h1 className="text-2xl mt-8 text-center">Slogan</h1>
                </div>

                <TextEditor
                    ref={(el: EditorFunctions) => {
                        editorRef.current[0] = el;
                    }}
                    initialContent={`<i>
                        "Dalgaların Ötesinde
                        <br />
                        İz Bırakan Çözümler"
                    </i>`}
                    finalContent={async (content: string) => {}}
                    setUnsaved={setUnsaved}
                />
            </div>
        </form>
    );
};

export default CarouselText;
