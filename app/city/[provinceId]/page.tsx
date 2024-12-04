import City from './City';

export default async function ServerWrapper({ params }: any) {
    const { provinceId } = await params;
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/city?province=${provinceId}`, {
        method: 'GET',
        headers: {
            key: process.env.NEXT_PUBLIC_API_KEY || "",
        } as HeadersInit,
    });
    const dataCities = await data.json();

    return <City data={dataCities?.rajaongkir?.results} />;
};