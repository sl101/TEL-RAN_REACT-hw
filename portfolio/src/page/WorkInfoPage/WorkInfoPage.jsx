import { useParams } from 'react-router-dom';
import { works_data } from '../../store/worksData';
import s from './WorkInfoPage.module.css';

export const WorkInfoPage = () => {
	const { id } = useParams();
	const work = works_data.find((el) => el.id === +id);
	const { full_title, main_img, year, tags, text, content } = work;
	console.log(work);
	return (
		<div>
			<div className="container">
				<section className={s.preview}>
					<h2 className={s.page_title}>{full_title}</h2>
					<div className={s.tags_wrapper}>
						<p className={s.date}>{year}</p>
						<div className={s.tags}>{tags.join(', ')}</div>
					</div>
					<div>
						<p>{text}</p>
					</div>
					<div className={s.image_wrapper}>
						<img src={main_img} alt={full_title} />
					</div>
				</section>
				<section className={s.content}>
					<div className="container">
						<h1>{content.h1}</h1>
						{content.img && (
							<div className={s.image_wrapper}>
								<img src={content.img} alt={full_title} />
							</div>
						)}
						{content.h2 && <h2 className={s.page_title}>{content.h2}</h2>}
						{content.text && (
							<div>
								<p>{content.text}</p>
							</div>
						)}
					</div>
				</section>
			</div>
		</div>
	);
};
