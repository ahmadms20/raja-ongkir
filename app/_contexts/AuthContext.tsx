"use client"

import { createContext, useContext, useState, ReactNode, useEffect  } from "react";
import { useRouter } from "next/navigation";

type AuthContextProps = {
    isAuthenticated: boolean;
    login: (username: string, password: string) => boolean;
    logout: () => void;
};

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    const dummyUser = {
        username: "admin",
        password: "admin123",
    };

    useEffect(() => {
        const sessionUser = sessionStorage.getItem("isAuthenticated");
        if (sessionUser === "true") {
          setIsAuthenticated(true);
        }
    }, []);

    const login = (username: string, password: string) => {
        if (username === dummyUser.username && password === dummyUser.password) {
          sessionStorage.setItem("isAuthenticated", "true");
          sessionStorage.setItem("username", username);
          setIsAuthenticated(true);
          router.push("/province");
          return true;
        }
        return false;
    };
    
    const logout = () => {
        sessionStorage.removeItem("isAuthenticated");
        sessionStorage.removeItem("username");
        setIsAuthenticated(false);
        router.push("/login");
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};