import { Link } from 'react-router-dom';
import s from './WorkItem.module.css';

export const WorkItem = ({
	id,
	title,
	year,
	main_img,
	full_title,
	tags,
	text,
	animation,
}) => {
	return (
		<li className={`${animation} ${s.work_item}`}>
			<div className={s.img_wrapper}>
				<img src={main_img} alt={full_title} />
			</div>
			<div className={s.content}>
				<Link to={`/works/${id}`}>
					<h3 className={s.work_title}>{title}</h3>
				</Link>
				<div className={s.meta_wrapper}>
					<span>{year}</span>
					<span>{tags.join(', ')}</span>
				</div>
				<div className={s.description}>
					<p>{text}</p>
				</div>
			</div>
		</li>
	);
};
