import Province from './Province';

export default async function ServerWrapper() {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/province`, {
        method: 'GET',
        headers: {
            key: process.env.NEXT_PUBLIC_API_KEY || "",
        } as HeadersInit,
    });
    const dataProvinces = await data.json();

    return <Province data={dataProvinces?.rajaongkir?.results} />;
};