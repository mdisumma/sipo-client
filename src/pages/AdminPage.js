import React from "react";
import { Header } from "../components/Header";
import { LogOut } from "../components/auth/LogOut";
import { Admin } from "../components/product/Admin";

const AdminPage = () => {
	return (
		<div>
			<Header src="../img/sipo_logo.png" logout={<LogOut />} />
			<Admin />
		</div>
	);
};
export default AdminPage;
