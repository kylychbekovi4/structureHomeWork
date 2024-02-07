import scss from "./MainPage.module.scss";

const MainPage = () => {
	return (
		<div className={scss.MainPage}>
			<div className="container">
				<div className={scss.mainParent}>
					<div>
						<p className={scss.text_first}>
							Соединяем людей, сервисы и компании
						</p>
						<p className={scss.text_second}>
							ВКонтакте — крупнейшая социальная сеть в России и странах СНГ.
							Наша миссия — соединять людей, сервисы и компании, создавая
							простые и удобные инструменты коммуникации.
						</p>
					</div>
					<div>
						<img
							src="https://sun2-19.userapi.com/mCshE_a2f5TZUl9cphQs-AdAvxoX-uIy3DG2rg/hQuKyAVYHPQ.svg"
							alt=""
						/>
					</div>
				</div>
				<div className={scss.text_card}>
					<div>
						<h1>100 млн</h1>
						<p>пользователей в месяц</p>
					</div>
					<div>
						<h1>15 млд</h1>
						<p>сообщений в сутки</p>
					</div>
					<div>
						<h1>1 млрд</h1>
						<p>отметок «Нравится» в сутки</p>
					</div>
					<div>
						<h1>82</h1>
						<p>языковые версии</p>
					</div>
				</div>
				{/* //! */}
				<div className={scss.texts}>
					<h1>Где мы работаем</h1>
					<p>
						Команда ВКонтакте базируется в трёх городах — Санкт-Петербурге,
						Москве и Сочи. А в Екатеринбурге, Казани, Нижнем Новгороде,
						Казахстане, а также в Турции и Германии есть наши представители.
					</p>
					<p>
						Штаб-квартира ВКонтакте находится в центре Санкт-Петербурга — в доме
						компании «Зингер». Мы называем его «Штаб», «Зингер» или просто «Зи»,
						а если нужно сориентировать гостей — «Дом книги». Именно здесь мы
						собираемся вместе, чтобы обсуждать самые важные решения. Также офисы
						компании есть в историческом здании у Красного моста и на Большой
						Морской в Санкт-Петербурге.
					</p>
				</div>
				<div className={scss.imgs}>
					<div className={scss.img}>
						<img
							src="https://tripplanet.ru/wp-content/uploads/europe/russia/st-petersburg/dostoprimechatelnosti-sankt-peterburga.jpg"
							alt="Санкт Петербург"
						/>
						<h2>Санкт-Петербург</h2>
					</div>
					<div className={scss.img}>
						<img
							src="https://studyinrussia.ru/upload/iblock/332/3327d506ed1aa4ad1a5e3ddefd809daf.jpg"
							alt="Москва"
						/>
						<h2>Москва</h2>
					</div>
					<div className={scss.img}>
						<img
							src="https://www.sochipark.ru/upload/images/panorama.jpg"
							alt="Сочи"
						/>
						<h2>Сочи</h2>
					</div>
				</div>
				{/* //! */}
				<div className={scss.card_texts}>
					<h1>История ВКонтакте</h1>
					<div className={scss.comment_cards}>
						{/* //! 1 */}
						<div>
							<h3>2020-2022</h3>
							<h4>100 млн активных пользователей в месяц</h4>
							<p>
								Звонки без ограничений, VK Видео, Клипы, монетизация авторов, VK
								Музыка, приложение для iPad, VK Protect, ускорение на QUIC
							</p>
						</div>
						{/* //! 2*/}
						<div>
							<h3>2018-2019</h3>
							<h4>97 млн активных пользователей в месяц</h4>
							<p>
								Голосовые и видеозвонки, VK Pay, VK​ Mini Apps, реформа
								приватности, редизайн мобильного приложения, платформа QR-кодов
							</p>
						</div>
						{/* //! 3 */}
						<div>
							<h3>2016-2017</h3>
							<h4>86 млн активных пользователей в месяц</h4>
							<p>
								Умная лента и рекомендации, истории, VK Live, денежные переводы,
								Музыка ВКонтакте
							</p>
						</div>
					</div>
				</div>
				{/* //!  */}
				<div className={scss.Links}>
					<h1>Полезные ссылки</h1>
					{/* //! */}
					<div className={scss.links}>
						<div>
							<a href="https://vk.com/team">ВКонтакте</a>
							<p>Сообщество с главными новостями</p>
						</div>
						{/* //! */}
						<div>
							<a href="https://vk.com/data_protection">Защита данных</a>
							<p>Конфиденциальность и защита прав</p>
						</div>
						{/* //! */}
						<div>
							<a href="https://vk.com/safety">Центр безопасности</a>
							<p>Советы для пользователей ВКонтакте</p>
						</div>
					</div>
					{/* //! 2 */}
					<div className={scss.links}>
						<div>
							<a href="https://vk.com/brand">Ресурсы брэнда</a>
							<p>Официальный логотип и шрифт</p>
						</div>
						{/* //! */}
						<div>
							<a href="https://vk.com/press">Представителям прессы</a>
							<p>press@vk.com</p>
						</div>
						<div>
							<a href="https://vk.com/support?act=home">Поддержка ВКонтакте</a>
							<p>support@vk.com</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainPage;
