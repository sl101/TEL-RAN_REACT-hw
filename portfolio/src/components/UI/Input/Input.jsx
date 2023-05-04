import s from './Input.module.css';

export const Input = ({ label_name, name, type }) => {
	return (
		<label className={s.label}>
			<span> {label_name}</span>
			{name === 'textarea' ? (
				<textarea type={type} name={name} />
			) : (
				<input type={type} name={name} />
			)}
		</label>
	);
};
