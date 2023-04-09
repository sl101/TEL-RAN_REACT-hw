import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = () => {
	return (
		<header className={s.header}>
			<div className="container">
				<nav className={s.header_nav}>
					<div className={s.logo}>
						<span>fake</span>
						<span>shop</span>
					</div>
					<ul className={s.menu_list}>
						<li className={s.menu_item}>
							<NavLink to="/">Home</NavLink>
						</li>
						<li className={s.menu_item}>
							<NavLink to="/products">Products</NavLink>
						</li>
						<li className={s.menu_item}>
							<NavLink to="/users">Users</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
