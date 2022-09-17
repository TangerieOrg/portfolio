import { useEffect } from "preact/hooks";
import { useLocation } from "react-router-dom";

import axios from "axios";

function parseUrlSearch(search : string) {
    const data : Record<string, string> = {};

    for(const [key, value] of (new URLSearchParams(search)).entries()) {
        data[key] = value;
    }

    return data;    
}



export function useAnalytics() {
    const location = useLocation();

    useEffect(() => {
        const search = parseUrlSearch(location.search);
        console.log(location, search);
    }, [location.key])
}