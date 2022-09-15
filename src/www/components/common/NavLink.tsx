import { useLinkClickHandler, useLocation } from "react-router-dom";
import { Navbar } from "flowbite-react";
import { ComponentChildren } from "preact";

interface Props {
    children? : ComponentChildren;
    to : string;
}

export default function NavLink(props : Props) {
    const location = useLocation();
    const clickHandler = useLinkClickHandler(props.to);

    return <span onClick={clickHandler}>
        <Navbar.Link active={location.pathname == props.to}>
            {props.children}
        </Navbar.Link>
    </span>
}