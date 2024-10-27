"use client";
import { EditorContent, useEditor } from "@tiptap/react";
import { FaBold, FaItalic, FaUndo, FaRedo } from "react-icons/fa";
import Paragraph from "@tiptap/extension-paragraph";
import Document from "@tiptap/extension-document";
import Text from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import History from "@tiptap/extension-history";
import { forwardRef, useImperativeHandle } from "react";

interface Props {
    finalContent(s: string): void;
    setUnsaved(b: boolean): void;
    initialContent?: string;
    className?: string;
}

export interface EditorFunctions {
    setEditorContent(content: string): void;
}

export const TextEditor = forwardRef<EditorFunctions, Props>((props, ref) => {
    useImperativeHandle(ref, () => ({
        setEditorContent(c: string) {
            editor!.commands.setContent(c);
        },
    }));

    const editor = useEditor({
        extensions: [Document, Paragraph, Text, History, Bold, Italic],

        onBlur({ editor, event }) {
            let json = editor.getHTML();
            if (json == "<p></p>") json = "";
            props.finalContent(json);
        },
        onUpdate({ editor }) {
            props.setUnsaved(true);
        },
        async onCreate({ editor }) {
            if (props.initialContent)
                editor.commands.setContent(props.initialContent);
        },
    });

    if (!editor) {
        return null;
    }

    const style = " bg-neutral-200  px-3 py-1";
    return (
        <div className={`overflow-hidden rounded-md ${props.className}`}>
            <div className="bg-neutral-300">
                <div className="flex p-1">
                    <div className="flex rounded-md border-neutral-500 border-[2px] overflow-hidden mr-8">
                        <button
                            type="button"
                            aria-label="bold"
                            onClick={() =>
                                editor.chain().focus().toggleBold().run()
                            }
                            className={`${style} ${
                                editor.isActive("bold") ? "bg-blue-300" : ""
                            }`}>
                            <FaBold />
                        </button>
                        <button
                            type="button"
                            aria-label="italic"
                            onClick={() =>
                                editor.chain().focus().toggleItalic().run()
                            }
                            className={`${style} ${
                                editor.isActive("italic") ? "bg-blue-300" : ""
                            }`}>
                            <FaItalic />
                        </button>
                    </div>

                    <div className="flex rounded-md border-neutral-500 border-[2px] overflow-hidden">
                        <button
                            type="button"
                            aria-label="undo"
                            className={`${style}`}
                            onClick={() => editor.chain().focus().undo().run()}>
                            <FaUndo />
                        </button>
                        <button
                            type="button"
                            aria-label="redo"
                            className={` ${style}`}
                            onClick={() => editor.chain().focus().redo().run()}>
                            <FaRedo />
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-neutral-50 py-2 px-3 border-t-2 rounded-b-md border-slate-500 overflow-hidden">
                <EditorContent editor={editor} />
            </div>
        </div>
    );
});
