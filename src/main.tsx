import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/tailwindcss.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<div className="max-w-screen overflow-x-hidden mx-auto p-2">
        <App />
    </div>
)