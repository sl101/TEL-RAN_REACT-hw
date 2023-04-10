import ProductsList from '../../ProductsList/ProductsList';
import s from './ProductsPage.module.css';

const ProductsPage = () => {
	return (
		<section className={s.products_page}>
			<div className="container">
				<div className={s.products_wrapper}>
					<h2 className={`sr-only ${s.products_title}`}>Products Page</h2>
					<ProductsList />
				</div>
			</div>
		</section>
	);
};

export default ProductsPage;
