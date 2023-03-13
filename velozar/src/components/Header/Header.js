import logo from './media/logo.png';
import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';
import style from './Header.module.css';
import { nav } from '../../data/nav';

const Header = () => {
	return (
		<header className={style.header}>
			<img className={style.logo} src={logo} alt="logo velozar" />
			<Navigation nav={nav} />
			<Button text={'Связаться'} />
		</header>
	);
};

export default Header;
