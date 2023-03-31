import s from './TaskList.module.css';
import TaskItem from './../TaskItem/TaskItem';

const TaskList = ({ dayTask, changePriority }) => {
	dayTask.sort((a, b) => a.weight - b.weight);

	return (
		<ul className={s.task_list}>
			{dayTask.map((el, index) => (
				<TaskItem key={index} {...el} changePriority={changePriority} />
			))}
		</ul>
	);
};

export default TaskList;
