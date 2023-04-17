import s from './HandleButton.module.css';

const HandleButton = ({ goBack, id, text, callback }) => {
	return (
		<>
			{callback ? (
				<button onClick={() => callback(id)} className={s.button}>
					{text}
				</button>
			) : goBack ? (
				<button className={s.button} onClick={goBack}>
					{text}
				</button>
			) : (
				<button className={s.button}>{text}</button>
			)}
		</>
	);
};

export default HandleButton;
