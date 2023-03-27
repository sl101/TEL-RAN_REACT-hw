import { React, useState } from 'react';
import ProductItem from './components/ProductItem/ProductItem';
import './App.css';

function App() {
	const data = [
		{ id: 1, name: 'Велосипед', price: 1000, count: 1 },
		{ id: 2, name: 'Самокат', price: 700, count: 1 },
		{ id: 3, name: 'Ролики', price: 1300, count: 2 },
		{ id: 4, name: 'Сноуборд', price: 19000, count: 4 },
	];

	let [products, setProducts] = useState(data);

	const addProduct = () => {
		const getDescr = prompt('укажите название и цену товара');
		if (getDescr) {
			const [name, price = 0] = getDescr.split(' ');
			const obj = {
				id: Date.now(),
				name: name,
				price: price,
				count: 1,
			};
			setProducts([...products, obj]);
		}
	};

	const deleteProduct = (id) => {
		setProducts(products.filter((el) => el.id !== id));
	};

	const increase = (id) => {
		const tempProducts = products.map((el) => {
			if (el.id === id) {
				el.count++;
			}
			return el;
		});
		setProducts(tempProducts);
	};

	const decrease = (id) => {
		const tempProducts = products.map((el) => {
			if (el.id === id) {
				el.count--;
			}
			return el;
		});
		setProducts(tempProducts);
	};

	return (
		<div className="app">
			<button className="btn" onClick={addProduct}>
				Add Product
			</button>
			<ul className="list">
				{products.map((elem) => (
					<ProductItem
						key={elem.id}
						{...elem}
						deleteProduct={deleteProduct}
						increase={increase}
						decrease={decrease}
					/>
				))}
			</ul>
		</div>
	);
}

export default App;
