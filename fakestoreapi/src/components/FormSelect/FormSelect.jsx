import s from './FormSelect.module.css';

const FormSelect = ({ defaultValue, array, handleSelect }) => {
	return (
		<div className={s.select_wrapper}>
			<select
				value={defaultValue}
				className={s.form_select}
				onChange={(event) => handleSelect(event.target.value)}
			>
				{array.map((elem, index) => (
					<option key={index} value={elem}>
						{elem}
					</option>
				))}
			</select>
		</div>
	);
};

export default FormSelect;
