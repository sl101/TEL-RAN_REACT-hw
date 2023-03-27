import CloseButton from '../CloseButton/CloseButton';
import TaskList from '../TaskList/TaskList';
import s from './DayItem.module.css';

const DayItem = ({ day, tasks, deleteDay, deleteTask }) => {
	const dayTask = tasks.filter((el) => el.day == day.dayValue);

	return (
		<>
			{dayTask.length > 0 && (
				<li className={`day_item ${s.day_item}`}>
					<p className={s.day_mark}>{day.dayValue}</p>
					<TaskList dayTask={dayTask} deleteTask={deleteTask} />
					<CloseButton close="close_day" deleteAction={deleteDay} id={day.id} />
				</li>
			)}
		</>
	);
};

export default DayItem;
