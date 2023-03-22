import s from './ProductItem.module.css';

const ProductItem = ({
	id,
	name,
	price,
	count,
	deleteProduct,
	increase,
	decrease,
}) => {
	return (
		<li
			className={s.item}
			onDoubleClick={() => deleteProduct(id)}
			title="delete on double click"
		>
			<h2 className={s.title}>{name}</h2>
			<span className={s.price}>Price: {price}</span>
			<div className={s.conter_block}>
				<button className={s.btn} onClick={() => increase(id)} title="increase">
					+
				</button>
				<span className={s.count}>{count}</span>
				<button className={s.btn} onClick={() => decrease(id)} title="decrease">
					-
				</button>
			</div>
		</li>
	);
};

export default ProductItem;
