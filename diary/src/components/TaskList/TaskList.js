import s from './TaskList.module.css';
import TaskItem from './../TaskItem/TaskItem';

const TaskList = ({ dayTask, deleteTask, changePriority }) => {
	dayTask.sort((a, b) => a.weight - b.weight);

	return (
		<ul className={s.task_list}>
			{dayTask.map((el, index) => (
				<TaskItem
					key={index}
					{...el}
					deleteTask={deleteTask}
					changePriority={changePriority}
				/>
			))}
		</ul>
	);
};

export default TaskList;
