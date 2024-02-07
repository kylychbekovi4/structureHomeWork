import scss from "./Footer.module.scss";
const Footer = () => {
	return (
		<footer className={scss.Footer}>
			<div className="container">
				<div className={scss.content}>
					<a href="https://dev.vk.com/ru/?ref=old_portal">Разработчикам</a>
					<a href="https://vk.com/business-ads">Реклама ВКонтакте</a>
					<a href="https://vk.com/legal">Правовая информация</a>
					<a href="https://vk.com/data_protection">Защита данных</a>
					<a href="https://vk.com/safety">Центр безопасности</a>
					<a href="https://vk.com/privacy">Политика конфиденциальности</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
