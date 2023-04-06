import { taskWeights, weekDays } from '../../data/data';
import s from './Form.module.css';
import React from 'react';

const Form = ({ formSubmit }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		formSubmit(e.target);
	};

	return (
		<form className={s.form} onSubmit={handleSubmit}>
			<div className={s.form_wrapper}>
				<div className={s.select_wrapper}>
					<div className={s.select_day}>
						<select name="day" required>
							{weekDays.map((el, index) => (
								<option key={index} value={el.mark}>
									{el.value}
								</option>
							))}
						</select>
					</div>

					<div className={s.select_weight}>
						<select name="weight" required>
							{taskWeights.map((el, index) => (
								<option key={index} value={index}>
									{el}
								</option>
							))}
						</select>
					</div>
				</div>
				<input
					className={s.thema}
					type="text"
					name="thema"
					placeholder="Описание"
					required
				/>
			</div>
			<button className={s.btn}>Добавить</button>
		</form>
	);
};

export default React.memo(Form);
