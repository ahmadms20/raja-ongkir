"use client";

import { useAuth } from "@/app/_contexts/AuthContext";
import Button from "./Button";

const Navbar = () => {
    const { logout } = useAuth();

    return (
      <nav className="bg-[#000000] px-4 sm:px-6 py-4 flex justify-between items-center">
        <h1 className="text-[#fabc05] text-2xl font-bold">rajaongkir</h1>
        <Button
          onClick={logout}
          borderColor="border-[#fabc05]"
        >
          Logout
        </Button>
      </nav>
    );
};

export default Navbar;