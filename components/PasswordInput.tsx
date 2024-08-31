"use client";

import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";

interface PasswordInputProps{
    className?: string;
}

export function PasswordInput({ className }: PasswordInputProps){
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className={`relative ${className}`}>
            <input type={showPassword ? 'text' : 'password'} className="border border-gray-300 rounded-lg py-2 px-4
            w-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"/>

            <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 pr-3 flex items-center">
                {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5 text-gray-500"/>
                ) : (
                    <EyeIcon className="h-5 w-5 text-gray-500"/>
                )}
            </button>
        </div>
    )
}