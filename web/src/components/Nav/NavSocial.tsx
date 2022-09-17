import NavLink from "@components/common/NavLink";
import SVGString from "@components/common/SVGString";
import { Navbar } from "flowbite-react";
import { ComponentChild } from "preact";

interface Props {
    to : string;
    icon : string;
}

export default function NavSocial({ to, icon } : Props) {
    return <a href={to} target="_blank">
        <SVGString $src={icon} class="h-6 inline dark:fill-white fill-black transition-colors hover:fill-purple-200 cursor-pointer"/>
    </a>
}