import Card from "@components/common/Card";
import SVGString from "@components/common/SVGString";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Card } from "flowbite-react";
import { ComponentChildren } from "preact";
import { siGithub } from "simple-icons/icons";



interface Props {
    title: string;
    description: string;
    img?: string;
    siteLink?: string;
    codeLink?: string;
}

export default function PortfolioItem(props: Props) {
    return <div class="h-full min-h-fit">
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

            <span class="grid md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-4 mt-4">
                {
                    props.siteLink && <a href={props.siteLink}
                        class="pl-4 pr-6 py-4 md:w-full w-fit bg-blue-600 rounded-lg flex flex-row md:justify-between group transition-colors hover:bg-blue-700 md:text-lg text-base" 
                        target="_blank"
                    >
                        <span class="flex flex-col justify-center text-ellipsis overflow-x-hidden">View Site</span>
                        <span class="ml-2 flex flex-col transition-transform justify-center group-hover:translate-x-1.5">
                            <FontAwesomeIcon icon={solid("arrow-right")} />
                        </span>
                    </a>
                }

                {
                    props.codeLink && <a href={props.codeLink}
                        class="pl-4 pr-6 py-4 md:w-full w-fit bg-gray-600 rounded-lg flex flex-row group transition-colors hover:bg-gray-700 md:text-lg text-base"
                        target="_blank"
                    >
                        <span class="mr-2 flex flex-col justify-center fill-white ">
                            <SVGString $src={siGithub.svg} class="h-6" />
                        </span>
                        <span class="flex flex-col justify-center ">View Code</span>
                    </a>
                }
            </span>
        </Card>
    </div>
}