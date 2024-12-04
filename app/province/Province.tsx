"use client"

import Card from "@/app/_components/Card";
import Title from "@/app/_components/Title";
import Empty from "@/app/_components/Empty";
import Loading from "./loading";
import { useRouter } from 'next/navigation';
import { Suspense } from "react";

type Province = {
    province_id: string;
    province: string;
};

export default function Province({ data }: { data: Province[] }) {
    const router = useRouter();
  
    return (
        <div className="w-full py-16 px-4 sm:px-8">
            <Title>Daftar Provinsi</Title>
            {data?.length > 0 ? (
                <Suspense fallback={<Loading />}>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                        {data?.map((item, index) => (
                            <Card key={index} onClick={() => router.push(`/city/${item.province_id}`)}>
                                {item.province}
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