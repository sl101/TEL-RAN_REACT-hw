import style from './Navigation.module.css';

const Navigation = ({ nav }) => {
	return (
		<nav className={style.nav}>
			{nav.map((el, key) => (
				<button key={key} className={style.link}>
					{el}
				</button>
			))}
		</nav>
	);
};

export default Navigation;
