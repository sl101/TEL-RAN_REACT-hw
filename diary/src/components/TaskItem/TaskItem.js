import CloseButton from '../CloseButton/CloseButton';
import s from './TaskItem.module.css';
import { useState } from 'react';

const TaskItem = ({ id, weight, thema, deleteTask }) => {
	const itemColor = weight == 1 ? 'var(--color-accent)' : 'var(--color-brand)';
	let btn_style = {
		opacity: '0',
		visibility: 'hidden',
	};
	let [opacity, setOpasity] = useState(btn_style);

	const handleMouseOver = (event) => {
		event.stopPropagation();
		if (event.type === 'mouseover') {
			btn_style.opacity = '1';
			btn_style.visibility = 'visible';
			setOpasity(btn_style);
		}
	};

	const handleMouseOut = (event) => {
		event.stopPropagation();
		if (event.type === 'mouseout') {
			btn_style.opacity = '0';
			btn_style.visibility = 'hidden';
			setOpasity(btn_style);
		}
	};

	return (
		<li
			className={`task_item ${s.task_item}`}
			style={{ backgroundColor: itemColor }}
			onMouseOut={handleMouseOut}
			onMouseOver={handleMouseOver}
		>
			<div className={s.task_content}>
				<p>{thema}</p>
				<CloseButton
					opacity={opacity}
					close="close_task"
					deleteAction={deleteTask}
					id={id}
				/>
			</div>
		</li>
	);
};

export default TaskItem;
