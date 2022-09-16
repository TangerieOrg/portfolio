import SVGString from "@components/common/SVGString";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ComponentChild } from "preact";
import SVG from 'react-inlinesvg';

interface Props {
    text : string;
    to : string;
    icon : string;
}

export default function SocialButton({ text, to, icon } : Props) {
    return <a href={to} class="px-4 py-2 h-full w-full my-2 mx-2 border-white border rounded-lg text-lg flex flex-row group transition-colors hover:bg-white hover:text-purple-500">
        <span class="mr-2 flex flex-col justify-center">
            <SVGString $src={icon} class="h-6 inline transition-colors fill-white group-hover:fill-purple-500"/>
        </span>
        <span class="flex flex-col justify-center">{text}</span>
    </a>
}