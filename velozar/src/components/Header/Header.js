import logo from './media/logo.png';
import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';
import style from './Header.module.css';

const Header = () => {
	return (
		<header className={style.header}>
			<img className={style.logo} src={logo} alt="logo velozar" />
			<Navigation />
			<Button />
		</header>
	);
};

export default Header;
