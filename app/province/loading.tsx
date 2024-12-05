import Image from "next/image";

export default function Loading() {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <Image src="/loading.gif" alt="loading" className="w-12 h-12" />
        </div>
    )
};