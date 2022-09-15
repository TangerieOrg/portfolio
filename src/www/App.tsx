import {
    RouterProvider,
} from "react-router-dom";
import routes from "./routes";

import 'mac-scrollbar/dist/mac-scrollbar.css';

import { GlobalScrollbar } from 'mac-scrollbar';

export default function App() {
    return <div class="text-white min-h-screen bg-gray-900">
        <GlobalScrollbar/>
        <RouterProvider router={routes} />
    </div>
}