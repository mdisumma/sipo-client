import React from "react";
import { Header } from "../components/Header";

import { LogOut } from "../components/auth/LogOut";
import User from "../components/product/User";

const UserPage = () => {
	return (
		<div>
			<Header src="../img/sipo_logo.png" logout={<LogOut />} />
			<User />
		</div>
	);
};
export default UserPage;
