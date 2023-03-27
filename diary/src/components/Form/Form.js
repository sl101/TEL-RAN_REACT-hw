import { useState } from 'react';
import s from './Form.module.css';

const Form = ({ formSubmit, weekDays, taskWeights }) => {
	const [thema, setThema] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		formSubmit(e.target);
		setThema('');
	};

	return (
		<form className={s.form} onSubmit={handleSubmit}>
			<select className={`${s.select} ${s.select_day}`} name="day" required>
				{weekDays.map((el, index) => (
					<option key={index} value={el.mark}>
						{el.value}
					</option>
				))}
			</select>

			<select
				className={`${s.select} ${s.select_weight}`}
				name="weight"
				required
			>
				{taskWeights.map((el, index) => (
					<option key={index} value={el.mark}>
						{el.value}
					</option>
				))}
			</select>
			<input
				className={s.thema}
				onChange={(e) => setThema(e.target.value)}
				type="text"
				name="thema"
				value={thema}
				placeholder="Описание"
				required
			/>
			<button className={s.btn}>Добавить</button>
		</form>
	);
};

export default Form;
