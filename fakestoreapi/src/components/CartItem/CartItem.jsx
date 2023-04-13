import s from './CartItem.module.css';

const CartItem = ({ image, title, price, amount }) => {
	const totalPrice = amount * price;
	return (
		<li>
			<div className={s.image_wrapper}>
				<img className={s.image} src={image} alt={title} />
			</div>
			<div className={s.cart_content}>
				<h3 className={s.cart_title}>{title}</h3>
				<div className={s.price_wrapper}>
					<p>price: {price}</p>
					<p>amount: {amount}</p>
					<p>total price: {totalPrice}</p>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
