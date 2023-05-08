import uuid from 'react-uuid';

const defaultState = [
	{ id: 1, title: 'Велосипед', count: 24 },
	{ id: 2, title: 'Самокат', count: 4 },
	{ id: 3, title: 'Гантели', count: 7 },
	{ id: 4, title: 'Ракетки', count: 1 },
];

const INCREMENT_BY_ID = 'INCREMENT_BY_ID';
const DECREMENT_BY_ID = 'DECREMENT_BY_ID';
const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOVE_BY_ID = 'REMOVE_BY_ID';
const REMOVE_ALL = 'REMOVE_ALL';

export const productsReducer = (state = defaultState, action) => {
	switch (action.type) {

		case INCREMENT_BY_ID:
			const temp_state = [...state];
			const target_product = temp_state.find((el) => el.id === action.payload);
			if (target_product.count < 25)
				target_product.count = target_product.count + 1;
			return temp_state;

		case DECREMENT_BY_ID:
			const temp_product = state.find((el) => el.id === action.payload);
			temp_product.count = temp_product.count - 1;
			return state.filter((el) => el.count > 0);

		case ADD_PRODUCT:
			if (action.payload) {
				const new_product = {
					id: uuid(),
					title: action.payload,
					count: 1,
				};
				return [new_product, ...state];
			} else {
				return state;
			}

		case REMOVE_BY_ID:
			return state.filter((el) => el.id !== action.payload);

		case REMOVE_ALL:
			return [...(state = [])];

		default:
			return state;
	}
};

export const incrementByIdAction = (payload) => ({
	type: INCREMENT_BY_ID,
	payload,
});
export const decrementByIdAction = (payload) => ({
	type: DECREMENT_BY_ID,
	payload,
});
export const addProductAction = (payload) => ({
	type: ADD_PRODUCT,
	payload,
});
export const removeByIdAction = (payload) => ({
	type: REMOVE_BY_ID,
	payload,
});

export const removeAllProductsAction = () => ({
	type: REMOVE_ALL,
});
