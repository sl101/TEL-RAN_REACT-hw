import s from './PostItem.module.css';

export const PostItem = ({
	title,
	date,
	tags,
	description,
	classType,
	animation,
}) => {
	const [year, month, day] = date.split('-');
	const formattedDate = `${day} ${new Date(month + ' 1').toLocaleString('en', {
		month: 'short',
	})} ${year}`;

	return (
		<li className={`${animation} ${s.post_item}  ${classType && s[classType]}`}>
			<h3 className={`${s.post_title}  ${classType && s[classType]}`}>
				{title}
			</h3>
			<div className={s.meta_wrapper}>
				<span>{formattedDate}</span>
				<span>{tags.join(', ')}</span>
			</div>
			<div className={s.description}>
				<p>{description}</p>
			</div>
		</li>
	);
};
