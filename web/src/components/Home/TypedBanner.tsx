import { useMemo } from 'preact/hooks';
import { TypeAnimation } from 'react-type-animation';
import { shuffle } from "lodash";

const words = [
    "Welcome",
    "Hey There",
    "Hi"
]

export default function TypedBanner() {
    const sequence = useMemo(() => {
        const seq: (string | number)[] = [];

        for (const w of shuffle(words)) {
            seq.push(w, 2000);
        }

        return seq;
    }, []);

    return <div>
        <h1 class="text-6xl md:text-8xl font-extralight">
            <TypeAnimation
                sequence={sequence}
                speed={40}
                repeat={Infinity}
            />
        </h1>
    </div>
}