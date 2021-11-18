import React from "react";
import supabase from "../api/supabase";

export const SignGoogle = () => {
	return (
		<button
			id="Sign_Google"
			type="button"
			value="Sign_Google"
			onClick={() => {
				const { user, session } = supabase.auth.signIn(
					{
						provider: "google",
					},
					{
						redirectTo: "http://localhost:3000/user",
					}
				);
				console.log(user);
				console.log(session);
			}}
		>
			Sign Google
		</button>
	);
};
