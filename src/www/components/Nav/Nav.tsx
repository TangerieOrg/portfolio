import Logo from "@components/common/Logo";
import NavLink from "@components/common/NavLink";
import Socials from "@modules/common/Socials";
import useMediaQuery from "@modules/common/useMediaQuery";
import useScroll from "@modules/common/useScroll";
import { Flowbite, Navbar } from "flowbite-react";
import { useEffect, useMemo, useState } from "preact/hooks";
import NavSocial from "./NavSocial";

const useIsScrolled = () => useScroll(100) > 50;

export default function Nav() {
    const isScrolled = useIsScrolled();
    const isLarge = useMediaQuery("(min-width: 768px)");
    const [showText, setShowText] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowText(false);
        }, 2500);
    }, [])

    return <Flowbite theme={{
        theme: {
            navbar: {
                base: `px-2 py-2.5 transition-all sm:px-4 ${isScrolled ? "border-gray-300 bg-gray-800 duration-500" : "bg-gray-800 bg-opacity-10 duration-700"}`
            }
        }
    }}>
        <div class={`fixed w-full transition-all top-0 left-0 ${isScrolled ? "p-2 duration-300" : "p-0 mb-4 duration-700"}`}>
            <Navbar fluid rounded={isScrolled}>
                <Navbar.Brand href="/">
                    <Logo class="text-3xl font-light ml-2 md:ml-0" $text={(!isScrolled && isLarge) || showText}/>
                </Navbar.Brand>
                <div class="block w-auto">
                    <ul class="flex mt-0 flex-row space-x-4 md:space-x-8 text-sm font-medium mr-2 md:mr-0">
                        {
                            Socials.map(social => <NavSocial to={social.link} icon={social.icon}/>)
                        }
                    </ul>
                </div>
            </Navbar>
        </div>
    </Flowbite>
}