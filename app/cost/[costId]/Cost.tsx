"use client"

import Card from "@/app/_components/Card";
import Title from "@/app/_components/Title";
import Empty from "@/app/_components/Empty";
import Loading from "./loading";
import Button from "@/app/_components/Button";
import { useRouter } from 'next/navigation';
import { Suspense } from "react";
import { formatRupiah } from "@/app/_utils/helpers";

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
    city_name: string;
};

type DataCost = {
    results: Results[];
    origin_details: OriginDetails;
};

export default function City({ data }: { data: DataCost }) {
    const router = useRouter();

    return (
        <div className="w-full py-16 px-4 sm:px-8">
            <Button onClick={() => router.back()}>Kembali</Button>
            <Title>{data?.origin_details?.city_name}</Title>
            <h1 className="flex justify-center items-center text-lg mt-4">
                {data?.results[0]?.name}
            </h1>
            {data?.results[0]?.costs?.length > 0 ? (
                <Suspense fallback={<Loading />}>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                        {data?.results[0]?.costs?.map((item: any, index: number) => (
                            <Card key={index}>
                                {item.service}
                                <div className="flex gap-2 text-sm font-normal">
                                    {item.description}{" | "}{formatRupiah(Number(item.cost[0].value))}
                                </div>
                            </Card>
                        ))}
                    </div>
                </Suspense>
            ) : (
                <Empty>Tidak ada data</Empty>
            )}
        </div>
    );
};