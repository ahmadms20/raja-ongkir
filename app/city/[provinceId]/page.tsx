import City from './City';
import NotFound from '@/app/not-found';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kota | Raja Ongkir"
};

export default async function ServerWrapper({ params }: any) {
    const { provinceId } = await params;
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/city?province=${provinceId}`, {
        method: 'GET',
        headers: {
            key: process.env.NEXT_PUBLIC_API_KEY || "",
        } as HeadersInit,
    });
    const dataCities = await data.json();

    if(dataCities?.rajaongkir?.status?.code !== 200) return <NotFound />;

    return <City data={dataCities?.rajaongkir?.results} />;
};