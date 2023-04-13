import s from './RatingList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as star } from '@fortawesome/free-solid-svg-icons';

const RatingList = ({ rate, ratingStyles: { gap, size } }) => {
	const ratingValue = Math.round(rate);
	const ratingStars = Array.from({ length: 5 }, (_, index) => {
		const starColor =
			index < ratingValue ? 'var(--gold-color)' : 'var(--black-color)';
		return (
			<FontAwesomeIcon
				className={s.star}
				icon={star}
				style={{
					color: starColor,
					width: size,
					height: size,
				}}
			/>
		);
	});

	return (
		<ul className={s.rating_list} style={gap && { gap }}>
			{ratingStars.map((elem, index) => (
				<li className={s.rating_item} key={index}>
					{elem}
				</li>
			))}
		</ul>
	);
};

export default RatingList;
