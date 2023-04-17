import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import CartItem from '../../CartItem/CartItem';
import HandleButton from '../../HandleButton/HandleButton';
import s from './CartPage.module.css';

const CartPage = () => {
	const cartState = useContext(CartContext);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const total = cartState.cart.reduce((acum, item) => {
		return acum + item.price * item.amount;
	}, 0);
	const totalPrice = Number(total.toFixed(2));

	return (
		<section className={s.cart_page}>
			<div className="container">
				<div className={s.cart_header}>
					<Link to={`/products`} tabIndex="-1">
						<HandleButton text="<<< Back to the store" />
					</Link>
					<Link to={`/payment`} tabIndex="-1">
						<HandleButton text="Proceed to checkout" />
					</Link>
					<p className={s.total_price}>
						Total price: <span>{totalPrice} &#x20AC;</span>
					</p>
				</div>
				<ul className={s.cart_list}>
					{cartState.cart.map((elem, index) => (
						<CartItem key={index} {...elem} />
					))}
				</ul>
			</div>
		</section>
	);
};

export default CartPage;
