import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import HandleButton from '../HandleButton/HandleButton';
import RatingList from '../RatingList/RatingList';
import s from './ProductsItem.module.css';

const ProductsItem = ({ id, image, title, rating, price }) => {
	const ratingStyles = {
		gap: '15px',
		size: '20px',
	};

	const cartState = useContext(CartContext);
	return (
		<li className={s.products_item}>
			<Link className={s.open_card} to={`/products/${id}`}>
				<div className={s.image_wrapper}>
					<img className={s.product_image} src={image} alt={title} />
				</div>
				<h3 className={s.product_title}>{title}</h3>
			</Link>
			<div className={s.products_item_content}>
				<p>
					<span>Price:</span>
					<span> {price} &#x20AC;</span>
				</p>
				<RatingList {...rating} ratingStyles={ratingStyles} />
				<HandleButton
					text="Add to cart"
					id={id}
					callback={cartState.addToCart}
				/>
			</div>
		</li>
	);
};

export default ProductsItem;
