interface Props {
    isLoading: boolean;
    isSaved: boolean;
}

const SaveChangesButton = ({ isLoading, isSaved }: Props) => {
    return (
        <div
            className={`transition-all duration-150 flex items-center my-4 overflow-hidden fixed top-0 z-[100] ${
                !isSaved ? "h-0 " : "h-[40px]"
            } ${isLoading ? "pointer-events-none cursor-not-allowed" : ""}`}>
            <div className="bg-yellow-400 px-8 py-2 h-full rounded-s-2xl">
                Tanıtım amaçlıdır. Kayıt Yapılamaz
            </div>
            <button
                type={isLoading ? "button" : "submit"}
                className={`px-5 py-2 w-[200px] rounded-e-full h-full bg-gray-400 cursor-not-allowed text-gray-700`}>
                {isLoading ? "Kaydediliyor" : "Değişiklikleri Kaydet"}
            </button>
        </div>
    );
};

export default SaveChangesButton;
