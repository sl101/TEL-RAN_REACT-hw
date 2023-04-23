import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

export const Header = () => {
	return (
		<header className={s.header}>
			<nav>
				<ul className={s.menu_list}>
					<li>
						<NavLink className={s.link} to="/works">
							Works
						</NavLink>
					</li>
					<li>
						<NavLink className={s.link} to="/blog">
							Blog
						</NavLink>
					</li>
					<li>
						<NavLink className={s.link} to="/contact">
							Contact
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};
