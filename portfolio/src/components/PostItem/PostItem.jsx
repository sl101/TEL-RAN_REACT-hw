import s from './PostItem.module.css';

export const PostItem = ({ title, date, meta_tags, description }) => {
	return (
		<li className={s.post_item}>
			<h3 className={s.post_title}>{title}</h3>
			<div className={s.meta_wrapper}>
				<span>{date}</span>
				<span>{meta_tags.join(', ')}</span>
			</div>
			<div className={s.description}>
				<p>{description}</p>
			</div>
		</li>
	);
};
