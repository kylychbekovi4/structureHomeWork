import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import LoginPage from "../pages/loginPage/LoginPage";
import MainPage from "../pages/mainPage/MainPage";
import RegistrationPage from "../pages/registrationPage/RegistrationPage";
import scss from "./Layout.module.scss";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layout = () => {
	return (
		<div className={scss.Layout}>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/registration" element={<RegistrationPage />} />
					<Route path="/home" element={<HomePage />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
