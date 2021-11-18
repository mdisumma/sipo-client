import React from "react";
import { useState } from "react";
import { LogIn } from "./LogIn";
import { SingUp } from "./SingUp";
import { SignMagicLink } from "./SignMagicLink";
import { SignGoogle } from "./SignGoogle";

export const SignForm = () => {
	const [emailValue, setEmailValue] = useState("");
	const [passwordValue, setPasswordValue] = useState("");

	return (
		<div className="auth_form">
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
			<hr />
			<SingUp email={emailValue} password={passwordValue} />
			<LogIn email={emailValue} password={passwordValue} />
			<hr />
			<SignMagicLink email={emailValue} />
			<SignGoogle />
		</div>
	);
};
