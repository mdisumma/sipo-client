import React from "react";
import { Header } from "../components/Header";
import { SignForm } from "../components/auth/SignForm";

const SignPage = () => {
	return (
		<>
			<Header src="./img/sipo_logo.png" />
			<SignForm />
		</>
	);
};

export default SignPage;
