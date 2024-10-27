"use client";
import React, { useEffect, useState } from "react";
import SideBar from "../Components/SideBar";
import Footer from "../Components/Footer";

import { IoCloseSharp } from "react-icons/io5";
import SaveChangesButton from "../Components/SaveChangesButton";

interface Reference {
    id: number;
    source?: string;
    fileName: string;
    previewURL?: string;
    fileT?: File;
    updated?: boolean;
    newFile?: boolean;
}
interface RemovedRefs {
    fileName: string;
}

const page = () => {
    const [references, setReferences] = useState<Reference[]>([]);
    const [removedRefs, setRemovedRefs] = useState<RemovedRefs[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [unsaved, setUnsaved] = useState(false);

    useEffect(() => {
        const references2 = [
            {
                id: 0,
                previewURL: "",
                source: "./references/panaroma_solutions.svg",
                fileName: "reference1",
            },
            {
                id: 1,
                previewURL: "",
                source: "./references/medpan.webp",
                fileName: "reference2",
            },
            {
                id: 2,
                previewURL: "",
                source: "./references/spanopoulos-logo-346x74.png",
                fileName: "reference3",
            },
            {
                id: 3,
                previewURL: "",
                source: "./references/marineworks.png",
                fileName: "reference4",
            },
            {
                id: 4,
                previewURL: "",
                source: "./references/edt_offshore.svg",
                fileName: "reference5",
            },
        ];
        setReferences(references2);
    }, []);

    function handleFileUpdate(
        index: number,
        _file: File,
        fileName: string,
        previewURL: string
    ) {
        const nextFiles = references.map((ref, i) => {
            if (i === index) {
                return {
                    id: i,
                    fileName: fileName,
                    fileT: _file,
                    previewURL: previewURL,
                    updated: true,
                };
            } else {
                return ref;
            }
        });

        setReferences(nextFiles);
    }

    async function handleRemove(reference: Reference) {
        if (!reference.newFile) {
            setRemovedRefs((ref) => [...ref, { fileName: reference.fileName }]);
        }
        setReferences((newRefs) =>
            newRefs.filter((ref) => ref.fileName !== reference.fileName)
        );
    }

    return (
        <div>
            <SideBar />
            <form
                onSubmit={(e) => e.preventDefault()}
                className="ml-[350px] mt-16 bg-slate-200 p-8 rounded-3xl shadow-lg w-[70%] flex flex-col items-center">
                <SaveChangesButton isLoading={isLoading} isSaved={unsaved} />

                <div className="flex justify-between w-full items-start">
                    <h1 className="text-2xl">Referanslar</h1>

                    {/* Add New Reference Button */}
                    <label className="text-5xl font-extrabold cursor-pointer">
                        +
                        <input
                            name="productMedia"
                            id="productMedia"
                            type="file"
                            aria-label="add reference"
                            accept="image/png, image/jpeg, image/jpg, image/svg, image/webp"
                            className="hidden"
                            onChange={({ target }) => {
                                if (target.files) {
                                    const lastID =
                                        references.length > 0
                                            ? references[references.length - 1]
                                                  .id
                                            : 0;
                                    const fileName = `reference_${lastID + 1}`;
                                    const sourceText = `/references/reference_${
                                        lastID + 1
                                    }.webp`;
                                    const prevwURL = URL.createObjectURL(
                                        target.files[0]
                                    );
                                    const file = target.files[0];
                                    setReferences((ref) => [
                                        ...ref,
                                        {
                                            id: lastID + 1,
                                            source: sourceText,
                                            fileName: fileName,
                                            fileT: file,
                                            previewURL: prevwURL,
                                            updated: true,
                                            newFile: true,
                                        },
                                    ]);
                                    setUnsaved(true);
                                }
                            }}
                        />
                    </label>
                </div>

                <div className="flex flex-wrap mt-8">
                    {references.map((reference, i) => {
                        return (
                            <div
                                key={i}
                                className="relative w-[230px] rounded-xl overflow-hidden bg-slate-100 ml-4 mb-4 transition-all">
                                <button
                                    type="button"
                                    aria-label="delete reference"
                                    onClick={() => {
                                        handleRemove(reference);
                                        setUnsaved(true);
                                    }}
                                    className="absolute top-0 right-0 cursor-pointer rounded-bl-2xl">
                                    <IoCloseSharp
                                        size={35}
                                        className="text-red-500 hover:scale-125 transition-all"
                                    />
                                </button>

                                <div className={``}>
                                    <div className="h-[150px] flex items-center justify-center">
                                        <img
                                            src={
                                                reference.previewURL ||
                                                reference.source
                                            }
                                            alt={reference.fileName}
                                            className={`object-cover w-auto max-h-[75px] `}
                                        />
                                    </div>
                                    <input
                                        name="productMedia"
                                        id="productMedia"
                                        type="file"
                                        aria-label="change reference image"
                                        accept="image/png, image/jpeg, image/jpg, image/svg, image/webp"
                                        className="my-2 ml-2"
                                        onChange={({ target }) => {
                                            if (target.files) {
                                                const prevwURL =
                                                    URL.createObjectURL(
                                                        target.files[0]
                                                    );

                                                handleFileUpdate(
                                                    i,
                                                    target.files[0],
                                                    reference.fileName,
                                                    prevwURL
                                                );
                                                setUnsaved(true);
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </form>
            <Footer />
        </div>
    );
};

export default page;
