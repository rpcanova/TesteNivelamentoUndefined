"use client";

import React from 'react';

interface FormButtonProps {
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void
    className?: string;
    children: React.ReactNode;
}

const FormButton: React.FC<FormButtonProps> = ({ type = 'button', className, onClick, children }) => {
    return (
        <button type={type} onClick={onClick} className={`bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4
            rounded focus:outline-none focus:shadow-outline w-full ${className}`}>
            {children}
        </button>
    );
};

export default FormButton;