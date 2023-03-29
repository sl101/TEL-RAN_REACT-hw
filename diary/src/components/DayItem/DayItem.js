import CloseButton from '../CloseButton/CloseButton';
import TaskList from '../TaskList/TaskList';
import s from './DayItem.module.css';
import { useState } from 'react';

const DayItem = ({ day, tasks, deleteDay, deleteTask }) => {
	const dayTask = tasks.filter((el) => el.day == day.dayValue);

	let btn_style = {
		opacity: '0',
		visibility: 'hidden',
	};
	let [opacity, setOpasity] = useState(btn_style);

	const handleMouseOver = (event) => {
		event.stopPropagation();
		if (event.type === 'mouseover') {
			btn_style.opacity = '1';
			btn_style.visibility = 'visible';
			setOpasity(btn_style);
		}
	};

	const handleMouseOut = (event) => {
		event.stopPropagation();
		if (event.type === 'mouseout') {
			btn_style.opacity = '0';
			btn_style.visibility = 'hidden';
			setOpasity(btn_style);
		}
	};

	return (
		<>
			{dayTask.length > 0 && (
				<li
					className={`day_item ${s.day_item}`}
					onMouseOut={handleMouseOut}
					onMouseOver={handleMouseOver}
				>
					<p className={s.day_mark}>{day.dayValue}</p>
					<TaskList dayTask={dayTask} deleteTask={deleteTask} />
					<CloseButton
						opacity={opacity}
						close="close_day"
						deleteAction={deleteDay}
						id={day.id}
					/>
				</li>
			)}
		</>
	);
};

export default DayItem;
