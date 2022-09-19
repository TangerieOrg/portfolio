import { ComponentChildren } from "preact";

interface Props {
    children?: ComponentChildren;
    imgSrc?: string;
}

export default function Card(props: Props) {
    return <div class="rounded-lg border border-gray-700 bg-gray-800 ">
        {
            props.imgSrc && (
                <div class="relative block pb-[100%]">
                    <img 
                    src={props.imgSrc} 
                    class="absolute w-full h-full object-cover rounded-t-lg"/>
                </div>
            )
        }
        <div class="h-full p-6 gap-4 flex flex-col justify-center">
            { props.children }
        </div>
    </div>
}