import Link from 'next/link';
 
export default function NotFound() {
    return (
        <div className="h-screen flex flex-col justify-center items-center space-y-4">
            <h1 className="text-3xl font-semibold">Tidak Ditemukan</h1>
            <p className="text-base">Tidak dapat menemukan halaman yang diminta.</p>
            <Link
                href="/province"
                className="text-primary font-semibold hover:bg-primary/30 px-4 py-2 rounded-md"
            >
                Kembali
            </Link>
        </div>
    )
};