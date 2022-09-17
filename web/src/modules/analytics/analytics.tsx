import { useEffect } from "preact/hooks";
import { useLocation } from "react-router-dom";

import axios from "axios";
import { TrackingVisit } from "./types";

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
        const data : TrackingVisit = {
            data: parseUrlSearch(location.search),
            route: location.pathname
        }
        axios.post("/api/analytics/log", data);
    }, [location.key])
}