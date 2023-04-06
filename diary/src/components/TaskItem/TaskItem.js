import CloseButton from '../CloseButton/CloseButton';
import s from './TaskItem.module.css';
import { useCallback, useContext, useState } from 'react';
import { RemoveTaskContext } from '../../context/RemoveTaskContext';
import { TaskPriorityContext } from '../../context/TaskPriorityContext';

const TaskItem = ({ id, weight, thema }) => {
	const { removeTask } = useContext(RemoveTaskContext);
	const { changePriority } = useContext(TaskPriorityContext);

	const itemColor = weight === 1 ? 'var(--color-accent)' : 'var(--color-brand)';

	let [opacity, setOpacity] = useState();

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
		<li
			title="change priority on doubleclick"
			className={`task_item ${s.task_item}`}
			style={{ backgroundColor: itemColor }}
			onMouseOut={handleMouseOut}
			onMouseOver={handleMouseOver}
			onDoubleClick={() => changePriority(id)}
		>
			<div className={s.task_content}>
				<p>{thema}</p>
				<CloseButton opacity={opacity} deleteAction={removeTask} id={id} />
			</div>
		</li>
	);
};

export default TaskItem;
