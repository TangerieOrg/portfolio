import {
    RouterProvider,
} from "react-router-dom";
import routes from "./routes";

export default function App() {
    return <div class="text-white min-h-screen bg-gray-900">
        <RouterProvider router={routes} />
    </div>
}