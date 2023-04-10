import './App.css';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './components/Pages/HomePage/HomePage';
import ProductsPage from './components/Pages/ProductsPage/ProductsPage';
import UsersPage from './components/Pages/UsersPage/UsersPage';
import ProductInfoPage from './components/Pages/ProductInfoPage/ProductInfoPage';

function App() {
	return (
		<div className="app">
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/products" element={<ProductsPage />} />
					<Route path="/products/:id" element={<ProductInfoPage />} />
					<Route path="/users" element={<UsersPage />} />
				</Routes>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
