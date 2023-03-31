import CloseButton from '../CloseButton/CloseButton';
import TaskList from '../TaskList/TaskList';
import s from './DayItem.module.css';
import { useState } from 'react';

const DayItem = ({ day, tasks, deleteDay }) => {
	const dayTask = tasks.filter((el) => el.day == day.dayValue);

	let [opacity, setOpasity] = useState();

	const handleMouseOver = (event) => {
		event.stopPropagation();
		if (event.type === 'mouseover') {
			const tempOpacity = {
				opacity: 1,
				visibility: 'visible',
			};
			setOpasity(tempOpacity);
		}
	};

	const handleMouseOut = (event) => {
		event.stopPropagation();
		if (event.type === 'mouseout') {
			const tempOpacity = {
				opacity: 0,
				visibility: 'hidden',
			};
			setOpasity(tempOpacity);
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
					<TaskList dayTask={dayTask} />
					<CloseButton opacity={opacity} deleteAction={deleteDay} id={day.id} />
				</li>
			)}
		</>
	);
};

export default DayItem;
