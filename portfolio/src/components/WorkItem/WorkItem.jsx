import s from './WorkItem.module.css';

export const WorkItem = ({
	title,
	date,
	image,
	alt,
	meta_tags,
	description,
}) => {
	return (
		<li>
			<div className={s.img_wrapper}>
				<img src={image} alt={alt} />
			</div>
			<div className={s.content}>
				<h3 className={s.work_title}>{title}</h3>
				<div className={s.meta_wrapper}>
					<span>{date}</span>
					<span>{meta_tags.join(', ')}</span>
				</div>
				<div className={s.description}>
					<p>{description}</p>
				</div>
			</div>
		</li>
	);
};
