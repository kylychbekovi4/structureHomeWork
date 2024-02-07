import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import ProtectRoute from "./components/providers/ProtectRoute.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<ProtectRoute>
				<App />
			</ProtectRoute>
		</BrowserRouter>
	</React.StrictMode>
);
