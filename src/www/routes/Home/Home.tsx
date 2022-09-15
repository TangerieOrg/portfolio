import TypedBanner from "@components/Home/TypedBanner"
import Nav from "@components/Nav"


export default function Home() {
    return <>
        <Nav />
        <div class="h-screen bg-gradient-to-b from-indigo-500 to-purple-700 bg-fixed flex flex-col justify-center text-center">
            <TypedBanner/>
        </div>
        <div class="h-screen"></div>
    </>
}