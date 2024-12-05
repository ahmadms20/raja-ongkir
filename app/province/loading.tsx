import Image from "next/image";

export default function Loading() {
    return (
        <div className="w-full h-[500px] flex justify-center items-center">
            <Image src="/loading.gif" width={100} height={100} alt="loading" className="w-12 h-12" />
        </div>
    )
};