import LoginPage from "./login/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login | Raja Ongkir"
};

export default function Home() {
    return (
        <main className="w-full h-screen flex flex-col">
            <LoginPage />
        </main>
  );
};