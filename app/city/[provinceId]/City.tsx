"use client"

import { useState } from "react";
import Card from "@/app/_components/Card";
import Title from "@/app/_components/Title";
import Empty from "@/app/_components/Empty";
import Loading from "./loading";
import Button from "@/app/_components/Button";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

type City = {
    city_id: string;
    city_name: string;
    province_id: string;
    province: string;
    type: string;
    postal_code: string;
};

export default function City({ data }: { data: City[] }) {
    const router = useRouter();
    const [filterType, setFilterType] = useState<"Kota" | "Kabupaten" | "">("");
    const filteredData = filterType ? data?.filter((item) => item.type === filterType) : data;

    const dataButtonFilter = [
        { text: "Semua", value: "" },
        { text: "Kota", value: "Kota" },
        { text: "Kabupaten", value: "Kabupaten" },
    ];

    return (
        <div className="w-full py-16 px-4 sm:px-8">
            <Button onClick={() => router.back()}>Kembali</Button>
            <Title>{data[0]?.province}</Title>
            <div className="flex justify-center gap-4 space-x-2 mt-4">
                {dataButtonFilter.map((item, index) => {
                    let isActive = filterType === item.value;
                    return (
                        <Button
                            key={index}
                            onClick={() => setFilterType(item.value as "" | "Kota" | "Kabupaten")}
                            color={`${isActive ? "text-white" : "text-black hover:text-white"}`}
                            backgroundColor={`${isActive ? "bg-orange-500" : "bg-white hover:bg-orange-500"}`}
                            borderColor={`${isActive ? "" : "border-orange-500"}`}
                        >
                            {item.text}
                        </Button>
                    )
                })}
            </div>
            {filteredData?.length > 0 ? (
                <Suspense fallback={<Loading />}>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                        {filteredData?.map((item: City, index: number) => (
                            <Card
                                key={index}
                                onClick={() => router.push(`/cost/${item.city_id}`)}
                            >
                                {item.city_name}
                                <div
                                    className={`${
                                        item.type === "Kota"
                                            ? "text-blue-500"
                                            : "text-green-500"
                                    } flex gap-2 text-sm font-semibold`}
                                >
                                    {item.type}{" | Kode Pos: "}{item.postal_code}
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