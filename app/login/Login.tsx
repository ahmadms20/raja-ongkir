"use client"

import { useState, useEffect } from "react";
import Button from "@/app/_components/Button";
import { useRouter } from 'next/navigation';
import { useAuth } from "@/app/_contexts/AuthContext";

export default function LoginForm() {
    const router = useRouter();
    const { isAuthenticated, login } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (isAuthenticated) {
            router.push("/province");
        }
    }, [isAuthenticated, router]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (!login(username, password)) {
            setError("Username atau password salah.");
        }
    };

    return (
        <div className="bg-[#FFFFFF] p-8 rounded-lg shadow-lg max-w-sm w-full">
            <form onSubmit={handleLogin}>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-[#000000] mb-2">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fabc05]"
                        placeholder="Masukkan username anda"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-[#000000] mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fabc05]"
                        placeholder="Masukkan password anda"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error ? <p className="text-red-500 text-sm text-center font-semibold mb-4">{error}</p> : null}
                <Button
                    type="submit"
                    width="w-full"
                >
                    Login
                </Button>
            </form>
        </div>
    );
};