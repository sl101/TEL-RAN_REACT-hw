import { useState, useEffect } from 'react';
import s from './FormFilter.module.css';
import { getCategories } from './../../requests/categories_requests';
import FormSelect from '../FormSelect/FormSelect';

const FormFilter = ({
	// categories,
	sorting,
	category,
	filterByCategories,
	sortBy,
}) => {
	// console.log(FormFilter);
	const [categories, setCategories] = useState([]);

	const sorter = [
		'new hits',
		'price: high first',
		'price: low first',
		'rating',
	];

	useEffect(() => getCategories(setCategories), []);

	return (
		<form className={s.form_filter}>
			<FormSelect
				defaultValue={category}
				array={categories}
				handleSelect={filterByCategories}
			/>
			<div className={s.sorter}>
				<span className={s.sorter_by}>sort by:</span>
				<FormSelect
					defaultValue={sorting}
					array={sorter}
					handleSelect={sortBy}
				/>
			</div>
		</form>
	);
};

export default FormFilter;
