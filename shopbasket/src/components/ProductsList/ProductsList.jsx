import { useSelector } from 'react-redux';
import s from './ProductsList.module.css';
import { ProductItem } from '../';

export const ProductsList = () => {
	const products = useSelector((store) => store.products);
console.log(products);
	return (
		<ul className={s.list}>
			{products.length !== 0 ? (
				products.map((elem) => <ProductItem key={elem.id} {...elem} />)
			) : (
				<ProductItem title="Your cart is empty" type="empty" />
			)}
		</ul>
	);
};
