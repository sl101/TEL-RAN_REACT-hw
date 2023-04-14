const url = 'https://fakestoreapi.com/products/categories';
export const getCategories = (callback) => {
	fetch(url)
		.then((res) => res.json())
		.then((json) => callback(['all', ...json]))
		.catch((error) => console.log(error));
};
