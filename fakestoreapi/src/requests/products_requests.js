const url = 'https://fakestoreapi.com/products';

export const getProducts = (callback) => {
	fetch(url)
		.then((resp) => resp.json())
		.then((data) => callback(data))
		.catch((error) => console.log(error));
};
