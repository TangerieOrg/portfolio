import Logo from "@components/common/Logo";
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
                base: `px-2 py-2.5 transition-all sm:px-4 ${isScrolled ? "shadow-lg border-gray-300 dark:bg-gray-800 dark:text-white text-black bg-gray-100 duration-500" : "bg-gray-800 bg-opacity-10 duration-700"}`
            }
        }
    }}>
        <div class={`fixed w-full transition-all z-40 top-0 left-0 ${isScrolled ? "p-2 duration-300" : "p-0 mb-4 duration-700"}`}>
            <Navbar fluid rounded={isScrolled}>
                <Navbar.Brand href="/">
                    <div onMouseEnter={() => setShowText(true)} onMouseLeave={() => setShowText(false)}>
                        <Logo class="text-3xl font-light ml-2 md:ml-0" $text={(!isScrolled && isLarge) || showText}/>
                    </div>
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