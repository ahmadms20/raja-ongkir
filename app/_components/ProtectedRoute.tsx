"use client"

import { useAuth } from "@/app/_contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
        const sessionUser = sessionStorage.getItem("isAuthenticated");
        if (sessionUser !== "true") {
          router.push("/login");
        }
    }, [isAuthenticated, router]);

    return <>{children}</>;
};

export default ProtectedRoute;