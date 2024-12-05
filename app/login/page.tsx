import Title from "@/app/_components/Title";
import LoginForm from "./Login";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login | Raja Ongkir"
};

export default function LoginPage() {
    return (
        <div className="bg-[#000000] flex flex-col items-center justify-center min-h-screen space-y-8 p-6">
            <Title color="text-primary">
                rajaongkir
            </Title>
            <LoginForm />
        </div>
    );
};