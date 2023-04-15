import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import s from './Header.module.css';

const Header = () => {
	const cartState = useContext(CartContext);

	const goodsAmount = cartState.cart.reduce((accum, item) => {
		return accum + item.amount;
	}, 0);

	let goodsAmountColor =
		goodsAmount === 0 ? 'var(--black-900)' : 'var(--black-color)';

	return (
		<header className={s.header}>
			<div className="container">
				<nav className={s.header_nav}>
					<NavLink to="/" className={s.logo_wrapper}>
						<div className={s.logo}>
							<span>fake</span>
							<span>store</span>
						</div>
					</NavLink>
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
					</ul>
					<Link className={s.cart_wrapper} to={`/cart`}>
						<FontAwesomeIcon className={s.cart} icon={faCartShopping} />
						<span className={s.cart_value} style={{ color: goodsAmountColor }}>
							{goodsAmount}
						</span>
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
