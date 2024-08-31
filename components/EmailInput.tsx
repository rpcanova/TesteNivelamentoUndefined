"use client";

import React from 'react';

interface EmailInputProps {
    label?: string;
    placeholder?: string;
    className?: string;
}

const EmailInput: React.FC<EmailInputProps> = ({ label, placeholder, className }) => {
    return (
        <div className={`mb-6 ${className}`}>
            {label && <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>}
            <input
                type="email"
                placeholder={placeholder}
                className="border border-gray-300 rounded-lg py-2 px-4 w-full text-gray-900 placeholder-gray-500
                focus:outline-none focus:ring-2 focus:ring-green-500"
            />
        </div>
    );
};

export default EmailInput;