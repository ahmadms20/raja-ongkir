import City from './Cost';
import NotFound from '@/app/not-found';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Biaya | Raja Ongkir"
};

export default async function ServerWrapper({ params }: any) {
    const { costId, courier } = await params;
    const formData = new FormData();
    formData.append("origin", costId);
    formData.append("destination", costId);
    formData.append("weight", "1000");
    formData.append("courier", courier);
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cost`, {
        method: 'POST',
        headers: {
            key: process.env.NEXT_PUBLIC_API_KEY || "",
        } as HeadersInit,
        body: formData,
    });
    const dataCost = await data.json();

    if(dataCost?.rajaongkir?.status?.code !== 200) return <NotFound />;

    return <City data={dataCost?.rajaongkir} courier={courier} />;
};