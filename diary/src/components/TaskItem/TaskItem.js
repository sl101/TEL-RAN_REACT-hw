import CloseButton from '../CloseButton/CloseButton';
import s from './TaskItem.module.css';
import React, { useContext, useState } from 'react';
import { RemoveTaskContext } from '../../context/RemoveTaskContext';
import { TaskPriorityContext } from '../../context/TaskPriorityContext';

const TaskItem = ({ id, weight, thema }) => {
	const { removeTask } = useContext(RemoveTaskContext);
	const { changePriority } = useContext(TaskPriorityContext);

	const itemColor = weight === 1 ? 'var(--color-accent)' : 'var(--color-brand)';

	let [opacity, setOpasity] = useState({ opacity: 0, visibility: 'hidden' });

	const handleMouseOver = (event) => {
		if (event.type === 'mouseover') {
			const tempOpacity = {
				opacity: 1,
				visibility: 'visible',
			};
			setOpasity(tempOpacity);
		}
	};

	const handleMouseOut = (event) => {
		if (event.type === 'mouseout') {
			const tempOpacity = {
				opacity: 0,
				visibility: 'hidden',
			};
			setOpasity(tempOpacity);
		}
	};

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

export default React.memo(TaskItem);
