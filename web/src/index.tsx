// Must be the first import
if (process.env.NODE_ENV==='development') {
    // Must use require here as import statements are only allowed
    // to exist at top-level.
    require("preact/debug");
}

import { render } from "preact";
import App from "./App";


render(<App />, document.getElementById("root")!);