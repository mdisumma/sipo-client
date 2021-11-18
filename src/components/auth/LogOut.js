import React from "react";
import supabase from "../api/supabase";

export const LogOut = (emailValue, passwordValue) => {
	return (
		<button
			id="logout"
			type="button"
			value="logout"
			onClick={async () => {
				const session = supabase.auth.session();

				fetch(`http://localhost:3001/logout/`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						email: session.user.email,
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
