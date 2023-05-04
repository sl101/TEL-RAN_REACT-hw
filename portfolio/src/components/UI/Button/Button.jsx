import s from './Button.module.css';

export const Button = ({ text, ...other }) => {
	return (
		<button {...other} className={s.btn}>
			{text}
		</button>
	);
};
