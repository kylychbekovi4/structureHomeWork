import scss from "./RegistrationPage.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const url = import.meta.env.VITE_BACKEND_URL;


const RegistrationPage = () => {
	const [title, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();


	// !
	const handleNavigate = async () => {
		if (title === "" || password === "") {
			alert("Заполните пустые место");
		} else {
			const response = await axios.get(url);
			const responseData = response.data;

			const findUser = responseData.find(
				(item) => item.title === title && item.password === password
			);

			if (findUser) {
				navigate("/home");
			} else {
				alert("");
			}
		}

		try {
			const response = await axios.post(url, { title, password });

			if (response.status === 200 || response.status === 201) {
				localStorage.setItem("title", title);
				localStorage.setItem("password", password);
				navigate("/login");
			}
		} catch (error) {
			console.error("Ошибка при выполнении запроса:", error);
			alert("Произошла ошибка при регистрации. Попробуйте снова.");
		}
	};
	// !
	return (
		<div className={scss.RegistrationPage}>
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
							<h1>Registration</h1>
						</div>
						<div className={scss.Inputs}>
							<input value={title} onChange={(e) => setUserName(e.target.value)} type="text" placeholder="Имя пользователя " />
							<input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Пароль" />
							<div className={scss.button}>
								<button onClick={handleNavigate}>Завершить регистрацию</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegistrationPage;
