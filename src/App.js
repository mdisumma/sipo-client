import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignPage from "./pages/SignPage";
import AdminPage from "./pages/AdminPage";
import UserPage from "./pages/UserPage";
import "./App.css";

function App() {
	// return (
	// 	<div>
	// 		<Routes>
	// 			<Route path="/" element={<Welcome />} />
	// 			<Route path="/admin" element={<Navigate replace to="/" />} />
	// 			<Route path="/user" element={<Navigate replace to="/" />} />
	// 		</Routes>
	// 	</div>
	// );
	return (
		<div>
			<Routes>
				<Route path="/" element={<SignPage />} exact />
				<Route path="/admin" element={<AdminPage />} />
				<Route path="/user" element={<UserPage />} />
			</Routes>
		</div>
	);
}

export default App;
