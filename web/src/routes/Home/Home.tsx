import SocialButton from "@components/Home/SocialButton"
import TypedBanner from "@components/Home/TypedBanner"
import Nav from "@components/Nav"
import Socials from "@modules/common/Socials";
import MixrImage from "@assets/projects/Mixr.png";
import PortfolioImage from "@assets/projects/Portfolio.png";
import VoxImage from "@assets/projects/Vox.png";
import BluefootImage from "@assets/projects/Bluefoot.png";
import EverythingImage from "@assets/projects/Everything.png";

import PortfolioItem from "@components/Home/PortfolioItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Home() {
    return <>
        <Nav />
        <div class="h-screen bg-gradient-to-b from-indigo-500 to-purple-700 bg-fixed flex flex-col justify-between text-center">
            <div></div>
            <div>
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
            <div class="flex flex-row justify-center">
                <span class="text-2xl mb-8 transition-transform cursor-pointer hover:translate-y-2" onClick={() => {
                    window.scrollTo({
                        behavior: "smooth",
                        top: window.innerHeight - 72
                    })
                }}>
                    <FontAwesomeIcon icon={solid("chevron-down")}/>
                </span>
            </div>
        </div>
        <div class="px-8 py-8 grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 shadow-inner gap-x-16 gap-y-8">
            <PortfolioItem
            title="Mixr"
            description="A Spotify application for mixing/analyzing playlists based on vibe"
            img={MixrImage}
            siteLink="/mixr"
            codeLink="https://github.com/TangerieOrg/Mixr"/>

            <PortfolioItem
            title="Portfolio"
            description="This site itself"
            img={PortfolioImage}
            siteLink="/"
            codeLink="https://github.com/TangerieOrg/portfolio"/>

            <PortfolioItem
            title="Voxcartes"
            description="A demo of a very early stage voxel game engine"
            img={VoxImage}
            siteLink="/vox"
            codeLink="https://github.com/TangerieOrg/Voxcartes"/>

            <PortfolioItem
            title="Bluefoot"
            description="An in-development engine for education"
            img={BluefootImage}
            siteLink="https://bluefootdev.tangerie.xyz"
            codeLink="https://github.com/TangerieOrg/Bluefoot"/>

            <PortfolioItem
            title="Everything"
            description="A sample OpenAI auto-generated site"
            img={EverythingImage}
            siteLink="/everything"
            codeLink="https://github.com/TangerieOrg/Everything"/>
        </div>
    </>
}