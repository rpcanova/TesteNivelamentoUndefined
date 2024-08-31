'use client';

import EmailInput from "@/components/EmailInput";
import FormButton from "@/components/FormButton";

export default function EsqueciSenha() {
    return (
        <div className="w-full h-full flex justify-center items-center bg-black">
            <div className="relative z-10 rounded-md bg-white p-6 max-w-sm mx-4 sm:mx-auto">
                <h1 className="text-center text-2xl font-bold mb-4">Esqueci minha senha</h1>
                <p className="text-sm mb-6">Enviaremos as informações para redefinição de senha no email digitado abaixo</p>
                <form className="w-full">
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <EmailInput/>
                    </div>

                    <div className="flex justify-between items-center">
                        <FormButton>
                            Enviar Email
                        </FormButton>
                    </div>
                </form>
            </div>
        </div>
    );
}