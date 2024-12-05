"use client"

import { useState } from "react";
import Card from "@/app/_components/Card";
import Title from "@/app/_components/Title";
import Empty from "@/app/_components/Empty";
import Loading from "./loading";
import Button from "@/app/_components/Button";
import { useRouter } from 'next/navigation';
import { Suspense } from "react";
import { formatRupiah } from "@/app/_utils/helpers";
import ProtectedRoute from "@/app/_components/ProtectedRoute";

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

type DataCost = {
    results: Results[];
    origin_details: OriginDetails;
};

type ButtonFilter = {
    text: string;
    value: string;
};

export default function City({ data, courier }: { data: DataCost, courier: string }) {
    const router = useRouter();
    const [filterType, setFilterType] = useState(courier);

    const dataButtonFilter: ButtonFilter[] = [
        { text: "JNE", value: "jne" },
        { text: "POS", value: "pos" },
        { text: "TIKI", value: "tiki" },
    ];

    return (
        <ProtectedRoute>
            <div className="w-full py-10 px-4 sm:px-8">
                <Button onClick={() => router.push(`/city/${data?.origin_details?.province_id}`)}>Kembali</Button>
                <Title>{data?.origin_details?.city_name === undefined ? "Nama Kota Tidak Ditemukan" : data?.origin_details?.city_name}</Title>
                <div className="flex justify-center gap-4 space-x-2 mt-4">
                    {dataButtonFilter.map((item, index) => {
                        const isActive = filterType === item.value;
                        return (
                            <Button
                                key={index}
                                onClick={() => {
                                    setFilterType(item.value as "jne" | "pos" | "tiki");
                                    router.push(`/cost/${data?.origin_details?.city_id}/${item.value}`);
                                }}
                                color={`${isActive ? "text-white" : "text-black hover:text-white"}`}
                                backgroundColor={`${isActive ? "bg-orange-500" : "bg-white hover:bg-orange-500"}`}
                                borderColor={`${isActive ? "" : "border-orange-500"}`}
                            >
                                {item.text}
                            </Button>
                        )
                    })}
                </div>
                {data?.results[0]?.costs?.length > 0 ? (
                    <Suspense fallback={<Loading />}>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                            {data?.results[0]?.costs?.map((item: Cost, index: number) => (
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
        </ProtectedRoute>
    );
};