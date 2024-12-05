import Province from './Province';
import NotFound from '@/app/not-found';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Provinsi | Raja Ongkir"
};

export default async function ServerWrapper() {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/province`, {
        method: 'GET',
        headers: {
            key: process.env.NEXT_PUBLIC_API_KEY || "",
        } as HeadersInit,
    });
    const dataProvinces = await data.json();

    if(dataProvinces?.rajaongkir?.status?.code !== 200) return <NotFound />;

    return <Province data={dataProvinces?.rajaongkir?.results} />;
};