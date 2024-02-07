import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ProtectRoute = ({ children }) => {
	const navigate = useNavigate();
	let { pathname } = useLocation();

	const isAuth = localStorage.getItem("isAuth");

	useEffect(() => {
		if (!!isAuth && pathname === "/login") {
			navigate("/home");
		} else if (!isAuth && pathname === "/home") {
			navigate("/login");
		} else if (!!isAuth && pathname === "/registration") {
			navigate("/home");
		}
	}, [pathname]);
	return children;
};

export default ProtectRoute;
