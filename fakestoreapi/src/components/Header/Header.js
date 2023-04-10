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
						<li>
							<NavLink className={s.menu_link} to="/">
								Home
							</NavLink>
						</li>
						<li>
							<NavLink className={s.menu_link} to="/products">
								Products
							</NavLink>
						</li>
						<li>
							<NavLink className={s.menu_link} to="/users">
								Users
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
