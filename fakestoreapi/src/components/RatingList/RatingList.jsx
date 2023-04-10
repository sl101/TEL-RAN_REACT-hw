import s from './RatingList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as star } from '@fortawesome/free-solid-svg-icons';

const RatingList = ({ rating }) => {
	const ratingValue = Math.round(rating.rate);
	const ratingStars = [];
	for (let index = 0; index < 5; index++) {
		let starColor =
			index < ratingValue ? 'var(--gold-color)' : 'var(--black-color)';
		ratingStars.push(
			<FontAwesomeIcon
				className={s.star}
				icon={star}
				style={{ color: starColor }}
			/>
		);
	}
	return (
		<ul className={s.rating_list}>
			{ratingStars.map((elem, index) => (
				<li className={s.rating_item} key={index}>
					{elem}
				</li>
			))}
		</ul>
	);
};

export default RatingList;
