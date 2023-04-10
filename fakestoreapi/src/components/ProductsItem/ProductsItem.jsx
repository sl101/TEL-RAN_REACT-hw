import { Link } from 'react-router-dom';
import RatingList from '../RatingList/RatingList';
import s from './ProductsItem.module.css';

const ProductsItem = ({ id, title, rating }) => {
	const ratingStyles = {
		gap: '15px',
		size: '20px',
	};
	return (
		<li className={s.products_item}>
			<h3 className={s.product_title}>{title}</h3>
			<RatingList {...rating} ratingStyles={ratingStyles} />
			<div className={s.hover_wrapper}>
				<Link className={s.open_card} to={`/products/${id}`}>
					Open
				</Link>
			</div>
		</li>
	);
};

export default ProductsItem;
