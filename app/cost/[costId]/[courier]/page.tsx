import City from './Cost';
import NotFound from '@/app/not-found';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Biaya | Raja Ongkir"
};

type CostDetail = {
    value: number;
    etd: string;
    note: string;
};

type Cost = {
    service: string;
    description: string;
    cost: CostDetail[];
};

type Results = {
    code: string;
    name: string;
    costs: Cost[];
};

type OriginDetails = {
    city_id: string;
    city_name: string;
    province_id: string;
};

type RajaOngkirResponse = {
    rajaongkir: {
        status: {
            code: number;
            description: string;
        };
        results: Results[];
        origin_details: OriginDetails;
    };
};

type Params = {
    costId: string;
    courier: string;
};

export default async function ServerWrapper({ params }: { params: Promise<Params> }) {
    const { costId, courier } = await params;
    const formData = new FormData();
    formData.append("origin", costId);
    formData.append("destination", costId);
    formData.append("weight", "1000");
    formData.append("courier", courier);
    const data: Response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cost`, {
        method: 'POST',
        headers: {
            key: process.env.NEXT_PUBLIC_API_KEY || "",
        } as HeadersInit,
        body: formData,
    });
    const dataCost: RajaOngkirResponse = await data.json();

    if(dataCost?.rajaongkir?.status?.code !== 200) return <NotFound />;

    return <City data={dataCost?.rajaongkir} courier={courier} />;
};