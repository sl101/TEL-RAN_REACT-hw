import { useEffect, useState } from 'react';
import s from './ProductsList.module.css';
import { getProducts } from './../../requests/products_requests';
import ProductsItem from './../ProductsItem/ProductsItem';

const ProductsList = () => {
	let [products, setProducts] = useState([]);

	useEffect(() => {
		getProducts(setProducts);
	}, []);

	return (
		<div className={s.products_list_wrapper}>
			<div className="container">
				<div className={s.products_inner}>
					<ul className={s.products_list}>
						{products.map((elem, index) => (
							<ProductsItem key={index} {...elem} />
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ProductsList;
