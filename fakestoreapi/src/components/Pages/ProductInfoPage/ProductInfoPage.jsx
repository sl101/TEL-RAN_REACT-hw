import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../../requests/products_requests';
import RatingList from '../../RatingList/RatingList';
import s from './ProductInfoPage.module.css';

const ProductInfoPage = () => {
	let [product, setProduct] = useState({});
	const { title, image, price, description, rating } = product;

	const { id } = useParams();
	useEffect(() => {
		getProduct(id, (data) => setProduct(data));
	}, []);

	const ratingStyles = {
		gap: '50px',
		size: '50px',
	};

	return (
		<section className={s.product_info_page}>
			<div className="container">
				<div className={s.product_info_wrapper}>
					<h3 className={s.product_title}>{title}</h3>
					<div className={s.product_image_wrapper}>
						<img className={s.product_image} src={image} alt={title} />
					</div>
					<div className={s.product_content}>
						<p className={s.product_price}>
							<span>Price: </span>
							{price} &#x24;
						</p>
						<p>
							<span>Description: </span>
							{description}
						</p>
					</div>
					<RatingList {...rating} ratingStyles={ratingStyles} />
				</div>
			</div>
		</section>
	);
};

export default ProductInfoPage;
