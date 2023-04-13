import s from './HandleButton.module.css';

const HandleButton = ({ id, text, addToCart }) => {
	return (
		<>
			{addToCart ? (
				<button onClick={() => addToCart(id)} className={s.button}>
					{text}
				</button>
			) : (
				<button className={s.button}>{text}</button>
			)}
		</>
	);
};

export default HandleButton;
