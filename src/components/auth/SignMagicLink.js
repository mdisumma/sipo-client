import React from "react";

export const SignMagicLink = (props) => {
	return (
		<button
			id="magicLink"
			type="button"
			value="magicLink"
			disabled={!props.email}
			onClick={() => {
				fetch(`http://localhost:3001/authMagicLink/`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						email: props.email,
					}),
				})
					.then((response) => response.json())
					.then((result) => console.log(result))
					.catch((error) => console.log("error", error));
			}}
		>
			Magic Link
		</button>
	);
};
