import City from './City';
import NotFound from '@/app/not-found';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kota | Raja Ongkir"
};

type DataResults = {
    city_id: string;
    city_name: string;
    province_id: string;
    province: string;
    type: string;
    postal_code: string;
};

type RajaOngkirResponse = {
    rajaongkir: {
        status: {
            code: number;
            description: string;
        };
        results: DataResults[];
    };
};

type Params = {
    provinceId: string;
};

export default async function ServerWrapper({ params }: { params: Promise<Params> }) {
    const { provinceId } = await params;
    const data: Response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/city?province=${provinceId}`, {
        method: 'GET',
        headers: {
            key: process.env.NEXT_PUBLIC_API_KEY || "",
        } as HeadersInit,
    });
    const dataCities: RajaOngkirResponse = await data.json();

    if(dataCities?.rajaongkir?.status?.code !== 200) return <NotFound />;

    return <City data={dataCities?.rajaongkir?.results} />;
};