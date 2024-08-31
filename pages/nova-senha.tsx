import { PasswordInput } from "../components/PasswordInput";
import FormButton from "@/components/FormButton";

export default function Home() {
    return (
        <div className="w-full h-full flex justify-center items-center bg-black">
            <div className="relative z-10 rounded-md bg-white p-12 max-w-sm mx-4 sm:mx-auto">
                <h1 className="text-center text-2xl font-bold mb-4">Defina uma nova senha</h1>
                <form className="w-full">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Nova senha
                    </label>

                    <div className="mb-6">
                        <PasswordInput />
                    </div>

                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Repita a nova senha
                    </label>

                    <div className="mb-6">
                        <PasswordInput />
                    </div>

                    <div className="flex justify-between items-center">
                        <FormButton>Salvar</FormButton>
                    </div>
                </form>
            </div>
        </div>
    );
}