import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { menuList } from '../../store/menuList';
import s from './Header.module.css';

export const Header = ({ active, setActive }) => {
	const menu_list = menuList;
	const isActive = active ? s['active'] : '';

	const closeMenu = () => {
		window.scrollTo(0, 0);
		setActive(active && false);
	};

	const navigate = useNavigate();
	useEffect(() => {
		navigate('/');
	}, []);
	return (
		<header className={s.header}>
			<nav className={`${s.navigation} ${isActive}`}>
				<ul className={`${s.menu_list} ${isActive}`}>
					{menu_list.map((elem, index) => (
						<li key={index}>
							<NavLink className={s.link} to={elem.href} onClick={closeMenu}>
								{elem.link}
							</NavLink>
						</li>
					))}
				</ul>
				<div
					className={`${s.burger} ${isActive}`}
					onClick={() => setActive(!active)}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</nav>
		</header>
	);
};
