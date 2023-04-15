import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import HandleButton from '../HandleButton/HandleButton';
import s from './CartItem.module.css';
import { Link } from 'react-router-dom';

const CartItem = ({ id, image, title, price, description, amount }) => {
	const totalPrice = Number(parseInt(amount) * parseFloat(price).toFixed(2));

	const cartState = useContext(CartContext);

	return (
		<li className={s.cart_item}>
			<Link className={s.image_wrapper} to={`/products/${id}`}>
				<div>
					<img className={s.cart_image} src={image} alt={title} />
				</div>
			</Link>
			<div className={s.cart_content}>
				<h3 className={s.cart_title}>{title}</h3>
				<div className={s.cart_description}>{description}</div>
				<div className={s.price_wrapper}>
					<p>
						price: <span>{price} &#x20AC;</span>
					</p>
					<div className={s.correct_price}>
						<p className={s.price_title}>
							amount: <span>{amount}</span>
						</p>
						<div className={s.correct_btn}>
							<HandleButton text="+" callback={cartState.increase} id={id} />
						</div>
						<div className={s.correct_btn}>
							<HandleButton text="-" callback={cartState.decrease} id={id} />
						</div>
					</div>
					<p>
						total price: <span>{totalPrice} &#x20AC;</span>
					</p>
				</div>
				<div className={s.remove_btn}>
					<HandleButton
						text="Remove from cart"
						callback={cartState.removeFromCart}
						id={id}
					/>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
