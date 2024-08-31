import EmailInput from "@/components/EmailInput";
import { PasswordInput } from "@/components/PasswordInput";
import Link from "next/link";
import FormButton from "@/components/FormButton";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();

    const handleLogin = () => {
        router.push('/dashboard')
    }

    return (
        <div className="w-full h-full flex justify-center items-center bg-black">
            <div className="relative z-10 rounded-md bg-white p-12 max-w-sm mx-4 sm:mx-auto">
                <h1 className="text-center text-2xl font-bold mb-4">Login</h1>
                <form className="w-full">
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <EmailInput/>
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Senha
                        </label>
                        <PasswordInput />
                    </div>

                    <div className="flex justify-between items-center">
                        <FormButton onClick={handleLogin}>Entrar</FormButton>
                    </div>

                    <hr className="block border-gray-700 my-6"/>
                    <Link href="/esqueci-senha" className="block text-center text-blue-900 italic text-xs underline">Esqueci minha senha</Link>
                </form>
            </div>
        </div>
    );
}