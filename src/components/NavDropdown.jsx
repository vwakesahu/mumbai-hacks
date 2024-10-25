'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, LogOutIcon } from "lucide-react";
import { GiToken } from "react-icons/gi";
import { RiLuggageDepositFill } from "react-icons/ri";
import clsx from "clsx";

export default function NavDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [tokens, setTokens] = useState("0");
  const [accountAddress, setAccountAddress] = useState("");

  const handleLogin = () => {
    // Implement your authentication logic here
    setIsAuthenticated(true);
    // Example account address - replace with actual wallet connection logic
    setAccountAddress("0x1234");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setTokens("0");
    setAccountAddress("");
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {isAuthenticated ? (
        <button
          onBlur={() => setIsOpen(false)}
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-xl font-base"
        >
          <div className="flex items-center gap-2 hover:text-yellow-500 font-semibold">
            <GiToken />
            <p>{tokens === "0" ? "0" : tokens}</p>
          </div>
          <ChevronDown
            className={clsx(
              isOpen ? "rotate-180" : "rotate-0",
              "h-5 w-5 transition-transform"
            )}
            color="black"
          />
        </button>
      ) : (
        <button
          onBlur={() => setIsOpen(false)}
          onClick={handleLogin}
          className="flex items-center gap-2 text-xl font-base"
        >
          Login
        </button>
      )}

      <div
        className={clsx(
          isOpen
            ? "visible top-12 opacity-100 right-1"
            : "invisible top-10 right-1 opacity-0",
          "absolute flex w-[150px] flex-col rounded-base border-2 border-black bg-white text-lg font-base transition-all"
        )}
      >
        <div
          onClick={() => setIsOpen(false)}
          className="text-left flex items-center rounded-t-base px-4 py-3 border-b-2 border-b-black"
        >
          {accountAddress?.slice(0, 6)}....
        </div>

        <Link
          href="/deposit"
          onClick={() => setIsOpen(false)}
          className="text-left flex items-center px-4 py-3 border-b-2 border-b-black hover:bg-main"
        >
          <RiLuggageDepositFill className="h-6 w-6 m500:h-4 m500:w-4 mr-[15px] m400:ml-4 m400:w-[12px]" />
          Deposit
        </Link>

        <div
          onClick={handleLogout}
          className="text-left flex items-center px-4 py-3 border-b-2 border-b-black hover:bg-red-500 hover:text-white cursor-pointer"
        >
          <LogOutIcon className="h-6 w-6 m500:h-4 m500:w-4 mr-[15px] m400:ml-4 m400:w-[12px]" />
          Logout
        </div>
      </div>
    </div>
  );
}