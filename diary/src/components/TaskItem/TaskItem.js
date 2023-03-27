import CloseButton from '../CloseButton/CloseButton';
import s from './TaskItem.module.css';

const TaskItem = ({ id, weight, thema, deleteTask }) => {
	const itemColor = weight == 1 ? 'var(--color-accent)' : 'var(--color-brand)';
	return (
		<li
			className={`task_item ${s.task_item}`}
			style={{ backgroundColor: itemColor }}
		>
			<div className={s.task_content}>
				<p>{thema}</p>
				<CloseButton close="close_task" deleteAction={deleteTask} id={id} />
			</div>
		</li>
	);
};

export default TaskItem;
