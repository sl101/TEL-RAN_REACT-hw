import { useEffect, useState } from 'react';
import { getProducts } from '../../../requests/products_requests';
import FormFilter from '../../FormFilter/FormFilter';
import ProductsList from '../../ProductsList/ProductsList';
import s from './ProductsPage.module.css';

const ProductsPage = () => {
	let [products, setProducts] = useState([]);
	let [currentProducts, setCurrentProducts] = useState([]);
	let [sorting, setSorting] = useState('new hits');
	let [category, setCategory] = useState('all');

	useEffect(() => {
		const localSorting = JSON.parse(localStorage.getItem('sorting'));
		if (localSorting) setSorting(localSorting);

		const localCategory = JSON.parse(localStorage.getItem('category'));
		if (localCategory) setCategory(localCategory);

		getProducts(setProducts);
	}, []);

	useEffect(() => {
		const localProducts = JSON.parse(localStorage.getItem('currentProducts'));
		if (localProducts && localProducts.length > 0) {
			setCurrentProducts(localProducts);
		} else {
			setCurrentProducts(products);
		}
	}, [products]);

	useEffect(() => {
		localStorage.setItem('sorting', JSON.stringify(sorting));
	}, [sorting]);

	useEffect(() => {
		localStorage.setItem('category', JSON.stringify(category));
	}, [category]);

	useEffect(() => {
		localStorage.setItem('currentProducts', JSON.stringify(currentProducts));
	}, [currentProducts]);

	const filterByCategories = (category) => {
		let tempProducts =
			category !== 'all'
				? products.filter((elem) => elem.category === category)
				: [...products];

		sortBy(sorting, tempProducts);

		setCurrentProducts(tempProducts);
		setCategory(category);
	};

	const sortBy = (sortDirection, tempProducts = [...currentProducts]) => {
		switch (sortDirection) {
			case 'new hits':
				tempProducts.sort((a, b) => a.id - b.id);
				break;
			case 'price: high first':
				tempProducts.sort((a, b) => b.price - a.price);
				break;
			case 'price: low first':
				tempProducts.sort((a, b) => a.price - b.price);
				break;
			case 'rating':
				tempProducts.sort((a, b) => b.rating.rate - a.rating.rate);
				break;

			default:
				break;
		}
		setSorting(sortDirection);
		setCurrentProducts(tempProducts);
	};

	return (
		<section className={s.products_page}>
			<div className="container">
				<h2 className={`sr-only ${s.products_title}`}>Products Page</h2>
				<div className={s.products_wrapper}>
					<FormFilter
						filterByCategories={filterByCategories}
						sortBy={sortBy}
						sorting={sorting}
						category={category}
					/>
					<ProductsList products={currentProducts} />
				</div>
			</div>
		</section>
	);
};

export default ProductsPage;
