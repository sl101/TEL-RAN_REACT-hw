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
import { getProduct } from './requests/products_requests';
import PaymentPage from './components/Pages/PaymentPage/PaymentPage';

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
		const tempCart = [...cart];
		const item = tempCart.find((elem) => elem.id === +id);

		if (item) {
			++item.amount;
			setCart(tempCart);
		} else {
			getProduct(id, (data) => {
				setCart([{ ...data, amount: 1 }, ...tempCart]);
			});
		}
	};

	const removeFromCart = (id) => {
		setCart(cart.filter((elem) => elem.id !== id));
	};

	const increase = (id) => {
		const tempCart = [...cart];
		const item = tempCart.find((elem) => elem.id === id);
		++item.amount;
		setCart(tempCart);
	};

	const decrease = (id) => {
		const tempCart = [...cart];
		const item = tempCart.find((elem) => elem.id === id);
		if (item.amount > 0) {
			--item.amount;
			setCart(tempCart);
		}
	};

	return (
		<div className="app">
			<Router>
				<CartContext.Provider
					value={{
						cart,
						addToCart: addToCart,
						removeFromCart: removeFromCart,
						increase: increase,
						decrease: decrease,
					}}
				>
					<Header />
					<Routes>
						<Route path="*" element={<HomePage />} />
						<Route path="/products" element={<ProductsPage />} />
						<Route path="/products/:id" element={<ProductInfoPage />} />
						<Route path="/cart" element={<CartPage />} />
						<Route path="/payment" element={<PaymentPage />} />
					</Routes>
				</CartContext.Provider>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
