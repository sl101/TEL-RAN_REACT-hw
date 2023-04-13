import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import s from './Header.module.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Header = () => {
	console.log('header');
	const cartState = useContext(CartContext);
	console.log(cartState.cart);
	const goodsAmount = cartState.cart.reduce((accum, item) => {
		return accum + item.amount;
	}, 0);

	console.log(goodsAmount);

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
					</ul>
					<Link className={s.cart_wrapper} to={`/cart`}>
						<FontAwesomeIcon className={s.cart} icon={faCartShopping} />
						<span className={s.cart_value}>{goodsAmount}</span>
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
