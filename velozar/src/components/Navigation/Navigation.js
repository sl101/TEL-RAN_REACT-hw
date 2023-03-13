import style from './Navigation.module.css';

const Navigation = () => {
	return (
		<nav className={style.nav}>
			<button className={style.link}>О нас</button>
			<button className={style.link}>Услуги</button>
			<button className={style.link}>Аренда</button>
		</nav>
	);
};

export default Navigation;
