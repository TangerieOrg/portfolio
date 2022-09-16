import { memo } from "preact/compat";
import { JSX } from "preact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';

interface Props {
    $text? : boolean;
}

export default function Logo({ $text = true, ...props } : Props & JSX.HTMLAttributes<HTMLSpanElement>) {
    return <span {...props} class={`flex flex-row ${props.class}`}>
        <span class={`transition-all overflow-hidden flex flex-col justify-center text-left ${$text ? "w-[0.75em]" : "w-0"}`}>T</span>
        <FontAwesomeIcon icon={solid("lemon")} className="flex flex-col justify-center relative top-[0.1em] text-left"/>
        <span class={`transition-all overflow-hidden flex flex-col justify-center text-left ${$text ? "ml-[0.25em] w-[2.75em]" : "w-0"}`}>ngerie</span>
    </span>;
}