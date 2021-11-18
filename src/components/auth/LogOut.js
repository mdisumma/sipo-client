import React from "react";
import supabase from "../api/supabase";

export const LogOut = (emailValue, passwordValue) => {
	return (
		<button
			id="logout"
			type="button"
			value="logout"
			onClick={async () => {
				const user = supabase.auth.user();
				const session = supabase.auth.session();
				console.log(session);
				console.log(user);
				fetch(`http://localhost:3001/logout/`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						email: emailValue,
					}),
				})
					.then((response) => response.json())
					.then((result) => console.log(result))
					.catch((error) => console.log("error", error));
				window.location.href = `/`;
			}}
		>
			Log out
		</button>
	);
};
