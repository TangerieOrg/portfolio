import SVGString from "@components/common/SVGString";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "flowbite-react";
import { ComponentChildren } from "preact";
import { siGithub } from "simple-icons/icons";



function LinkButton({ children, to }: { children: ComponentChildren, to: string }) {
    return <a href={to} class="px-4 py-2 h-full w-full my-2 mx-2 border-white border rounded-lg text-lg flex flex-row group transition-colors hover:bg-white hover:text-purple-500">
        {
            children
        }
    </a>
}

interface Props {
    title: string;
    description: string;
    img?: string;
    siteLink?: string;
    codeLink?: string;
}

export default function PortfolioItem(props: Props) {
    return <div class="max-h-fit">
        <Card imgSrc={props.img}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {
                    props.title
                }
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {
                    props.description
                }
            </p>

            <span class="grid grid-cols-2 gap-x-4">
                {
                    props.siteLink && <a href={props.siteLink}
                        class="pl-4 pr-6 py-2 h-full w-full my-1 bg-blue-600 rounded-lg text-lg flex flex-row justify-between group transition-colors hover:bg-blue-700">
                        <span class="flex flex-col justify-center">View Site</span>
                        <span class="ml-2 flex flex-col transition-transform justify-center group-hover:translate-x-2">
                            <FontAwesomeIcon icon={solid("arrow-right")} />
                        </span>
                    </a>
                }

                {
                    props.codeLink && <a href={props.codeLink}
                        target="_blank"
                        class="pl-4 pr-6 py-2 h-full w-full my-1 bg-gray-600 rounded-lg text-lg flex flex-row justify-between group transition-colors hover:bg-gray-700">
                        <span class="mr-2 flex flex-col justify-center fill-white">
                            <SVGString $src={siGithub.svg} class="h-6" />
                        </span>
                        <span class="flex flex-col justify-center">View Code</span>
                    </a>
                }
            </span>
        </Card>
    </div>
}