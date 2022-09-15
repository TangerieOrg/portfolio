import SocialButton from "@components/Home/SocialButton"
import TypedBanner from "@components/Home/TypedBanner"
import Nav from "@components/Nav"
import Socials from "@modules/common/Socials";

export default function Home() {
    return <>
        <Nav />
        <div class="h-screen bg-gradient-to-b from-indigo-500 to-purple-700 bg-fixed flex flex-col justify-center text-center">
            <TypedBanner />
            <div class="flex md:flex-row flex-col md:justify-center mt-16 mx-auto w-fit">
                {
                    Socials.map(social => <SocialButton
                        text={social.name}
                        icon={social.icon}
                        to={social.link} />)
                }
            </div>
        </div>
    </>
}