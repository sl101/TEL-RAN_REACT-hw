import RatingList from '../RatingList/RatingList';
import s from './ProductsItem.module.css';

const ProductsItem = ({ title, rating }) => {
	return (
		<li className={s.products_item}>
			<h3 className={s.product_title}>{title}</h3>
			<RatingList rating={rating} />
			<div className={s.hover_wrapper}>
				<button className={s.open_card}>Open</button>
			</div>
		</li>
	);
};

export default ProductsItem;
