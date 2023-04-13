import './App.css';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './components/Pages/HomePage/HomePage';
import ProductsPage from './components/Pages/ProductsPage/ProductsPage';
import ProductInfoPage from './components/Pages/ProductInfoPage/ProductInfoPage';
import CartPage from './components/Pages/CartPage/CartPage';
import { CartContext } from './context/CartContext';
import { useEffect, useState } from 'react';
import { getForCart, getProduct } from './requests/products_requests';

function App() {
	let [cart, setCart] = useState([]);

	useEffect(() => {
		const localCart = JSON.parse(localStorage.getItem('cart'));
		if (localCart) setCart(localCart);
	}, []);

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

	const addToCart = (id) => {
		if (cart && cart.length > 0) {
			if (!cart.map((elem) => elem.id).includes(id)) {
				getForCart(id).then((data) => setCart([data, ...cart]));
			} else {
				const tempArray = cart.map((elem) => elem.id);
				let targetIndex = tempArray.findIndex((el) => el === id);
				++cart[targetIndex].amount;
			}
		} else {
			getForCart(id).then((data) => setCart([data, ...cart]));
		}
		console.log('addToCart cart:', cart);
	};

	return (
		<div className="app">
			<Router>
				<CartContext.Provider
					value={{
						cart,
						addToCart: addToCart,
					}}
				>
					<Header />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/products" element={<ProductsPage />} />
						<Route path="/products/:id" element={<ProductInfoPage />} />
						<Route path="/cart" element={<CartPage />} />
					</Routes>
				</CartContext.Provider>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
