import scss from "./HomePage.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const url = import.meta.env.VITE_BACKEND_URL;

const HomePage = () => {
	const [data, setData] = useState([]);
	const [userProfile, setUserProfile] = useState({});
	const [userAuth, setUserAuth] = useState({});

	const getUserProfile = async () => {
		const resposne = await axios.get(url);
		const userProfile = resposne.data;
		const getUserIdLocalStorage = localStorage.getItem("isAuth");
		const findUser = userProfile.find(
			(item) => item._id === +getUserIdLocalStorage
		);
		setUserProfile(findUser);
	};

	const getTodos = async () => {
		const response = await axios.get(url);
		setData(response.data);
	};

	useEffect(() => {
		getUserProfile();
		getTodos();
	}, []);

	const navigate = useNavigate();
	const handleExit = () => {
		localStorage.removeItem("title");
		localStorage.removeItem("password");
		localStorage.removeItem("isAuth");
		navigate("/login");
	};
	return (
		<div className={scss.HomePage}>
			<div className="container">
				<div className={scss.testdiv}>
					<div className={scss.content}>
						<div>
							<h1>Только что авторизован:</h1>
							<h2>{userProfile.title}</h2>
						</div>
						<div className={scss.results}>
							{data.map((item) => (
								<div className={scss.card} key={item.id}>
									<h1>{item.title}</h1>
									<p>{item.password}</p>
								</div>
							))}
						</div>
					</div>
					<div className={scss.test}>
						<div className={scss.exit_button}>
							<button onClick={handleExit}>Exit</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
