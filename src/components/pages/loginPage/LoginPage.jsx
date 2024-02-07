import scss from "./LoginPage.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const url = import.meta.env.VITE_BACKEND_URL;

const LoginPage = () => {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	// !
	const navigate = useNavigate();
	const handleNavigate = async () => {
		if (userName === "" || password === "") {
			alert("Заполнить пустые места");
		} else {
			const response = await axios.get(url);
			const responseData = response.data;

			const findUser = responseData.find(
				(item) => item.title === userName && item.password === password
			);

			if (findUser) {
				localStorage.setItem("isAuth", "" + findUser._id);
				console.log("Found", findUser);
				navigate("/home");
			} else {
				alert("Неверный логин или пароль");
			}
		}
	};
	// !

	return (
		<div className={scss.LoginPage}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.parent}>
						<div className={scss.logo}>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/2048px-VK_Compact_Logo_%282021-present%29.svg.png"
								alt=""
							/>
						</div>
						<div>
							<h1>Login</h1>
						</div>
						<div className={scss.Inputs}>
							<input
								value={userName}
								onChange={(e) => setUserName(e.target.value)}
								type="text"
								placeholder="Имя пользователя "
							/>
							<input
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								type="password"
								placeholder="Пароль"
							/>
							<div className={scss.button}>
								<button onClick={handleNavigate}>Войти</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
