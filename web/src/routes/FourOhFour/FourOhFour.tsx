import { Button } from "flowbite-react";
import Logo from "@components/common/Logo";
import { Link } from "react-router-dom";

export default function FourOhFour() {
    return <div class="h-screen w-screen bg-gray-900 flex flex-col justify-center text-center">
        <Logo class="text-5xl font-extralight mx-auto"/>
        
        <h1 class="text-8xl font-extralight mt-8">Four Oh Four</h1>
        <h2 class="mt-8 text-xl italic">Oh no! This page doesn't exist</h2>
        <span class="mx-auto mt-8">
            <Link to="/">
                <Button size="xl">Go Home</Button>
            </Link>
        </span>
    </div>
}