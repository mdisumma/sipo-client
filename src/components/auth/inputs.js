import React from "react";
import { useState } from "react";

export const Inputs = () => {
	const [emailValue, setEmailValue] = useState("");
	const [passwordValue, setPasswordValue] = useState("");

	return (
		<>
			<input
				value={emailValue}
				onChange={(e) => setEmailValue(e.target.value)}
				placeholder="email"
			/>
			<input
				type="password"
				value={passwordValue}
				onChange={(e) => setPasswordValue(e.target.value)}
				placeholder="password"
			/>
		</>
	);
};
