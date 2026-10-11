import { JSX } from "preact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

// faCitrus from @fortawesome/pro-solid-svg-icons 6.2.1, inlined so builds don't need a pro token
const faCitrus = {
    prefix: "fas",
    iconName: "citrus",
    icon: [512, 512, [], "e2f4", "M304 128h80c53 0 96-43 96-96V16c0-8.8-7.2-16-16-16H384c-53 0-96 43-96 96v16c0 8.8 7.2 16 16 16zM256 96c0-23.1 6.1-44.7 16.8-63.4c-5.5-.4-11.1-.6-16.8-.6C123.5 32 16 139.5 16 272s107.5 240 240 240s240-107.5 240-240c0-49.5-15-95.5-40.7-133.7C435 152 410.4 160 384 160H304c-26.5 0-48-21.5-48-48V96z"]
} as IconDefinition;

interface Props {
    $text? : boolean;
}

export default function Logo({ $text = true, ...props } : Props & JSX.HTMLAttributes<HTMLSpanElement>) {
    return <span {...props} class={`flex flex-row ${props.class}`}>
        <span class={`transition-all overflow-hidden flex flex-col justify-center text-left ${$text ? "w-[0.75em]" : "w-0"}`}>T</span>
        <FontAwesomeIcon icon={faCitrus} className="flex flex-col justify-center relative top-[0.1em] text-left"/>
        <span class={`transition-all overflow-hidden flex flex-col justify-center text-left ${$text ? "ml-[0.25em] w-[2.75em]" : "w-0"}`}>ngerie</span>
    </span>;
}