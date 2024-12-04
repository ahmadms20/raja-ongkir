import City from './Cost';

export default async function ServerWrapper({ params }: any) {
    const { costId } = await params;
    const formData = new FormData();
    formData.append("origin", costId);
    formData.append("destination", costId);
    formData.append("weight", "1000");
    formData.append("courier", "jne");
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cost`, {
        method: 'POST',
        headers: {
            key: process.env.NEXT_PUBLIC_API_KEY || "",
        } as HeadersInit,
        body: formData,
    });
    const dataCost = await data.json();

    return <City data={dataCost?.rajaongkir} />;
};