const data = [
	{ id: 1, name: 'Велосипед', price: 1000 },
	{ id: 2, name: 'Самокат', price: 700 },
	{ id: 3, name: 'Ролики', price: 1300 },
	{ id: 4, name: 'Сноуборд', price: 19000 },
];

console.log(data.reduce((acc, { price }) => acc + price, 0));
