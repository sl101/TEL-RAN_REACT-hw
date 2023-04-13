import s from './ProductsList.module.css';
import ProductsItem from './../ProductsItem/ProductsItem';

const ProductsList = ({ products }) => {
	return (
		<div className={s.products_list_wrapper}>
			<div className={s.products_inner}>
				<ul className={s.products_list}>
					{products.map((elem, index) => (
						<ProductsItem key={index} {...elem} />
					))}
				</ul>
			</div>
		</div>
	);
};

export default ProductsList;
