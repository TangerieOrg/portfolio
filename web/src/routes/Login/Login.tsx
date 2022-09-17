import { Button, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";

export default function Login() {
    const { handleSubmit } = useForm();
    

    return <div class="h-screen bg-gradient-to-b from-indigo-500 to-purple-700 bg-fixed flex flex-col justify-center">
        <div class="rounded-lg bg-gray-900 shadow-xl p-8 mx-auto min-w-[40vw]">
            <h1 class="text-3xl font-light text-center mb-8">Login</h1>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(console.log)}>
                <div className="mb-1 block">
                    <Label
                        htmlFor="username"
                        value="Username"
                    />
                </div>
                <TextInput sizing="lg" id="username"></TextInput>

                <div className="mb-1 mt-2 block">
                    <Label
                        htmlFor="password"
                        value="Password"
                    />
                </div>

                <TextInput type="password" sizing="lg" id="password"></TextInput>

                <Button type="submit" size="lg">
                    Login
                </Button>
            </form>
        </div>
    </div>;
}