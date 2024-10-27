interface Props {
    content: string;
    id: number;
    name: string;
    setUnsaved(b: boolean): void;
    className?: string;
    ariaLabel?: string;
}

const TextArea = ({ content, id, name, setUnsaved, className, ariaLabel="edit title" }: Props) => {
    return (
        <>
            <textarea
                onBlur={({ target }) => {
                    setUnsaved(true);
                }}
                className={`bg-white border-2 overflow-ellipsis border-neutral-400 rounded-md p-2 max-h-[400px] min-h-[400px] min-w-[50%] ${className}`}
                defaultValue={content}
                aria-label={ariaLabel}
                onChange={() => {
                    setUnsaved(true);
                }}
            />
        </>
    );
};

export default TextArea;
