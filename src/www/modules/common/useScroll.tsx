import { useCallback, useEffect, useState } from "preact/hooks";
import { throttle } from "lodash";

export default function useScroll(interval = 250) {
    const [scrollPosition, setScrollPosition] = useState(0);

    const onScroll = useCallback(() => {
        setScrollPosition(window.scrollY);
    }, []);

    useEffect(() => {
        const cb = throttle(onScroll, interval);
        window.addEventListener("scroll", cb);
        return () => window.removeEventListener("scroll", cb);
    }, []);

    return scrollPosition;
}