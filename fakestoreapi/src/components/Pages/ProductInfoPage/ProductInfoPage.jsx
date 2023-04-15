import { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import { getProduct } from '../../../requests/products_requests';
import HandleButton from '../../HandleButton/HandleButton';
import RatingList from '../../RatingList/RatingList';
import s from './ProductInfoPage.module.css';

const ProductInfoPage = () => {
	let [product, setProduct] = useState({});
	const { title, image, price, description, rating } = product;

	const { id } = useParams();

	useEffect(() => {
		window.scrollTo(0, 0);
		getProduct(id, (data) => setProduct(data));
	}, []);

	const cartState = useContext(CartContext);

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
					<RatingList {...rating} ratingClass="info_page" />
					<div className={s.handles_wrapper}>
						<HandleButton
							text="Add to cart"
							id={id}
							callback={cartState.addToCart}
						/>

						<Link to={`/products`} tabIndex="-1">
							<HandleButton text="Back to the store" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductInfoPage;
