import s from './Button.module.css';

export const Button = ({ text, icon, ...other }) => {
	return (
		<div className={s.btn_wrapper}>
			<button {...other}>{text}</button>
			{icon}
		</div>
	);
};
