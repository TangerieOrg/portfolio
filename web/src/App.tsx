import {
    Route,
    Routes,
} from "react-router-dom";

import 'mac-scrollbar/dist/mac-scrollbar.css';

import { GlobalScrollbar } from 'mac-scrollbar';
import FourOhFour from "@routes/FourOhFour";
import Home from "@routes/Home";
import { useAnalytics } from "@modules/analytics";

export default function App() {
    useAnalytics();

    return <div class="text-white min-h-screen bg-gray-900">
        <GlobalScrollbar/>

        <Routes>
            <Route path="*" element={<FourOhFour/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </div>
}