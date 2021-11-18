import React from "react";

export const SingUp = (props) => {
	return (
		<button
			id="singUp"
			type="button"
			value="singUp"
			onClick={() => {
				fetch(`http://localhost:3001/signup/`, {
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
						if (result.length === 0) {
							alert("please confirm your email");
						}
						if (result.length !== 0) {
							alert("this user already exist");
						}
					})
					.catch((error) => console.log("error", error));
			}}
		>
			Sing up
		</button>
	);
};
