const url = 'https://fakestoreapi.com/products';

export const getProducts = (callback) => {
	fetch(url)
		.then((resp) => resp.json())
		.then((data) => callback(data))
		.catch((error) => console.log(error));
};

export const getProduct = (id, callback) => {
	fetch(`${url}/${id}`)
		.then((resp) => resp.json())
		.then((data) => callback(data))
		.catch((error) => console.log(error));
};
