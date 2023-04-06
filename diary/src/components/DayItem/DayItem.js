import CloseButton from '../CloseButton/CloseButton';
import TaskList from '../TaskList/TaskList';
import s from './DayItem.module.css';
import { useCallback, useState } from 'react';

const DayItem = ({ day, tasks, deleteDay }) => {
	const dayTask = tasks.filter((el) => el.day === day.dayCount);
	const sortedDayTask = [...dayTask].sort((a, b) => a.weight - b.weight);

	let [opacity, setOpacity] = useState({ opacity: 0, visibility: 'hidden' });

	const handleMouseOver = useCallback((event) => {
		event.stopPropagation();
		if (event.type === 'mouseover') {
			const tempOpacity = {
				opacity: 1,
				visibility: 'visible',
			};
			setOpacity(tempOpacity);
		}
	}, []);

	const handleMouseOut = useCallback((event) => {
		event.stopPropagation();
		if (event.type === 'mouseout') {
			const tempOpacity = {
				opacity: 0,
				visibility: 'hidden',
			};
			setOpacity(tempOpacity);
		}
	}, []);

	return (
		<>
			{dayTask.length > 0 && (
				<li
					className={`day_item ${s.day_item}`}
					onMouseOut={handleMouseOut}
					onMouseOver={handleMouseOver}
				>
					<p className={s.day_mark}>{day.dayValue}</p>
					<TaskList dayTask={sortedDayTask} />
					<CloseButton
						opacity={opacity}
						deleteAction={deleteDay}
						id={day.dayCount}
					/>
				</li>
			)}
		</>
	);
};

export default DayItem;
