import React from "react";

export const LogIn = (props) => {
	return (
		<button
			id="login"
			type="button"
			value="login"
			disabled={!props.email || !props.password}
			onClick={async () => {
				fetch(`http://localhost:3001/login/`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						email: props.email,
						password: props.password,
					}),
				})
					.then((response) => response.json())
					.then((result) => {
						console.log(result);
						if (result) {
							window.location.href = `/user/`;
						}
					})
					.catch((error) => console.log("error", error));
			}}
		>
			Log in
		</button>
	);
};
