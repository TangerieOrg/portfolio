// Must be the first import
if (process.env.NODE_ENV === 'development') {
    // Must use require here as import statements are only allowed
    // to exist at top-level.
    require("preact/debug");
}

import { render } from "preact";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const ToRender = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

render(<ToRender />, document.getElementById("root")!);