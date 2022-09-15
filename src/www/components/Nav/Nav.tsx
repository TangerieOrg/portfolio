import Logo from "@components/common/Logo";
import NavLink from "@components/common/NavLink";
import useScroll from "@modules/common/useScroll";
import { Flowbite, Navbar } from "flowbite-react";
import { useMemo } from "preact/hooks";

const useIsScrolled = () => useScroll(100) > 50;

export default function Nav() {
    const isScrolled = useIsScrolled();

    return <Flowbite theme={{
        theme: {
            navbar: {
                base: `px-2 py-2.5 transition-all duration-500 sm:px-4 ${isScrolled ? "border-gray-700 bg-gray-800" : "bg-gray-800 bg-opacity-10"}`
            }
        }
    }}>
        <div class={`fixed w-full transition-all duration-500 top-0 left-0 ${isScrolled ? "p-2" : "p-0 mb-4"}`}>
            <Navbar fluid rounded={isScrolled}>
                <Navbar.Brand href="/">
                    <Logo class="text-3xl font-light" $text={!isScrolled} />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    {/* <NavLink to="/">
                Home
            </NavLink> */}
                </Navbar.Collapse>
            </Navbar>
        </div>
    </Flowbite>
}