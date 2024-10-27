import { useRef } from "react";

interface Props {
    id: number;
    source: string;
    fileName: string;
    setFile?(index: number, _file: File, fileName: string): void;
    setUnsaved(b: boolean): void;
    className?: string;
    imgClass?: string;
}

const FileInputArea = ({
    id,
    source,
    fileName,
    setFile,
    setUnsaved,
    className = "",
    imgClass = "",
}: Props) => {
    const ref = useRef<HTMLImageElement>(null);
    return (
        <div
            className={`rounded-xl overflow-hidden bg-slate-100 flex flex-col relative ${className}`}>
            <img
                ref={ref}
                src={source}
                alt={fileName}
                className={`object-cover  h-[calc(100%-46px)] ${imgClass}`}
            />
            <input
                name="productMedia"
                id="productMedia"
                type="file"
                aria-label="upload image"
                accept="image/png, image/jpeg, image/jpg, image/webp"
                className="my-2 ml-2"
                onChange={({ target }) => {
                    if (target.files) {
                        ref.current!.src = URL.createObjectURL(target.files[0]);
                        setUnsaved(true);
                    }
                }}
            />
        </div>
    );
};

export default FileInputArea;
