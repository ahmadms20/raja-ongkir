import Link from 'next/link';
 
export default function NotFound() {
    return (
        <div className="h-screen flex flex-col justify-center items-center space-y-6">
            <h1 className="text-4xl font-semibold">Oops! Ada Yang Salah</h1>
            <p className="text-base">Tidak dapat menemukan halaman yang diminta.</p>
            <Link
                href="/province"
                className="text-primary font-semibold hover:bg-primary/30 px-4 py-2 rounded-md"
            >
                Kembali Ke Daftar Provinsi
            </Link>
        </div>
    )
};