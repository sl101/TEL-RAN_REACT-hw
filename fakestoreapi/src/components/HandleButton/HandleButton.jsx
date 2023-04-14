import s from './HandleButton.module.css';

const HandleButton = ({ id, text, callback }) => {
	return (
		<>
			{callback ? (
				<button onClick={() => callback(id)} className={s.button}>
					{text}
				</button>
			) : (
				<button className={s.button}>{text}</button>
			)}
		</>
	);
};

export default HandleButton;
