interface Props {
    className?: string;
}

const Footer = ({ className }: Props) => {
    return (
        <div
            className={`p-4 m-auto items-center text-end fixed bottom-0 right-0 ${className}`}>
            <a
                href="https://webeveyn.com/"
                className="text-sm text-neutral-500">
                &copy; Copyright 2023 - Designed by webeveyn.com
            </a>
        </div>
    );
};

export default Footer;
