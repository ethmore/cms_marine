"use client";
import Link from "next/link";

export const LogoutButton = () => {
    return (
        <Link
            href={`https://marine.webeveyn.com/`}
            className="bg-red-300 px-10 py-1 rounded-2xl">
            Çıkış Yap
        </Link>
    );
};
