import { Link } from "react-router-dom";
import scss from "./Header.module.scss";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
	const links = [
		{
			title: "Main",
			href: "/",
		},
		{
			title: "Login",
			href: "/login",
		},
		{
			title: "Registration",
			href: "/registration",
		},
		{
			title: "Home",
			href: "/home",
		},
	];
	const [isAuth, setIsAuth] = useState(Boolean(localStorage.getItem("isAuth")));
	const location = useLocation();

	useEffect(
		() => setIsAuth(Boolean(localStorage.getItem("isAuth"))),
		[location]
	);
	return (
		<header className={scss.Header}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.logo}>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/1200px-VK_Compact_Logo_%282021-present%29.svg.png"
							alt=""
						/>
					</div>
					<nav>
						<ul>
							{links.map((item, index) => (
								<li key={index}>
									{isAuth &&
									(item.title === "Login" || item.title === "Registration") ? (
										false
									) : (
										<Link to={item.href}>{item.title}</Link>
									)}
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
