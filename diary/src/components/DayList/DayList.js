import s from './DayList.module.css';
import DayItem from './../DayItem/DayItem';

const DayList = ({ tasks, days, deleteDay, deleteTask }) => {
	return (
		<ul className={s.day_list}>
			{days.map((elem, index) => (
				<DayItem
					key={index}
					day={elem}
					tasks={tasks}
					deleteDay={deleteDay}
					deleteTask={deleteTask}
				/>
			))}
		</ul>
	);
};

export default DayList;
