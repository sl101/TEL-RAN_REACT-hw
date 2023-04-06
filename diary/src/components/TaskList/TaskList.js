import s from './TaskList.module.css';
import TaskItem from './../TaskItem/TaskItem';

const TaskList = ({ dayTask }) => {
	return (
		<ul className={s.task_list}>
			{dayTask.map((el, index) => (
				<TaskItem key={index} {...el} />
			))}
		</ul>
	);
};

export default TaskList;
