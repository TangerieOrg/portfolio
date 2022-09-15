import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ComponentChild } from "preact";

interface Props {
    text : string;
    to : string;
    icon : ComponentChild;
}

export default function SocialButton({ text, to, icon } : Props) {
    return <a href={to} class="px-4 py-2 h-full w-full my-2 mx-2 border-white border rounded-lg text-lg flex flex-row group transition-colors hover:bg-white hover:text-purple-500">
        <span class="mr-2 flex flex-col justify-center">{icon}</span>
        <span class="flex flex-col justify-center">{text}</span>
    </a>
}