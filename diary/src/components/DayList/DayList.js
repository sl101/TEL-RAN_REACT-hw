import s from './DayList.module.css';
import DayItem from './../DayItem/DayItem';

const DayList = ({ tasks, days, deleteDay, changePriority }) => {
	return (
		<ul className={s.day_list}>
			{days.map((elem, index) => (
				<DayItem
					key={index}
					day={elem}
					tasks={tasks}
					deleteDay={deleteDay}
					changePriority={changePriority}
				/>
			))}
		</ul>
	);
};

export default DayList;
