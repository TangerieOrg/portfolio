import SocialButton from "@components/Home/SocialButton"
import TypedBanner from "@components/Home/TypedBanner"
import Nav from "@components/Nav"
import { siGithub, siInstagram, siLinkedin } from 'simple-icons/icons';
import SVG from 'react-inlinesvg';

export default function Home() {
    return <>
        <Nav />
        <div class="h-screen bg-gradient-to-b from-indigo-500 to-purple-700 bg-fixed flex flex-col justify-center text-center">
            <TypedBanner />
            <div class="flex flex-row justify-center mt-16 space-x-4">
                <SocialButton
                    text="Github"
                    // @ts-ignore
                    icon={<SVG src={siGithub.svg} class="h-6 inline transition-colors fill-white group-hover:fill-purple-500" />}
                    to="https://github.com/Tangerie" />

                <SocialButton
                    text="Instagram"
                    // @ts-ignore
                    icon={<SVG src={siInstagram.svg} class="h-6 inline transition-colors fill-white group-hover:fill-purple-500" />}
                    to="https://www.instagram.com/j.cavill/" />

                <SocialButton
                    text="LinkedIn"
                    // @ts-ignore
                    icon={<SVG src={siLinkedin.svg} class="h-6 inline transition-colors fill-white group-hover:fill-purple-500" />}
                    to="https://www.linkedin.com/in/joshua-cavill-958164190/" />
            </div>
        </div>
    </>
}