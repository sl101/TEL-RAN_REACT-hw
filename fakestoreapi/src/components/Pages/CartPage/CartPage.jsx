import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import CartItem from '../../CartItem/CartItem';
import HandleButton from '../../HandleButton/HandleButton';
import s from './CartPage.module.css';

const CartPage = () => {
	const cartState = useContext(CartContext);

	const total = cartState.cart.reduce((acum, item) => {
		return acum + item.price * item.amount;
	}, 0);
	return (
		<section className={s.cart_page}>
			<div className="container">
				<div className={s.cart_header}>
					<Link to={`/products`}>
						<HandleButton text="Back to the store" />
					</Link>
					<p className={s.total_price}>Total price: {total}</p>
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
