import { useDispatch } from 'react-redux';
import './App.css';
import { ProductsList } from './components';
import {
	addProductAction,
	removeAllProductsAction,
} from './store/productsReduser';
import { BsCartPlus, BsCartDash } from 'react-icons/bs';
import { Button } from './components/UI';

function App() {
	const dispatch = useDispatch();
	return (
		<div className="app">
			<div className="cart_wrapper">
				<div className="container">
					<div className="cart_inner">
						<div className="cart_top">
							<h2 className="cart_title">Shopping Cart</h2>
							<div className="cart_modification">
								<Button
									text="Add product"
									icon={<BsCartPlus />}
									onClick={() =>
										dispatch(addProductAction(prompt('add new product')))
									}
								/>
								<Button
									text="Remove all"
									icon={<BsCartDash />}
									onClick={() => dispatch(removeAllProductsAction())}
								/>
							</div>
						</div>
						<ProductsList />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
