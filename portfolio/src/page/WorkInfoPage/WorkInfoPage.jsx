import { useParams } from 'react-router-dom';
import { works_data } from '../../store/worksData';
import s from './WorkInfoPage.module.css';

export const WorkInfoPage = () => {
	const { id } = useParams();

	const work = works_data.find((el) => el.id === +id);

	const { full_title, main_img, year, tags, text, content } = work;

	const contentDetails = content.map((element) => {
		const [key, value] = element;
		return { type: key, content: value };
	});

	const contentElement = contentDetails.map((elem, index) => {
		console.log(elem.type);
		switch (elem.type) {
			case 'h1':
				return <h1 key={index}>{elem.content}</h1>;
			case 'h2':
				return (
					<h2 className={s.page_title} key={index}>
						{elem.content}
					</h2>
				);
			case 'img':
				return (
					<div className={s.image_wrapper} key={index}>
						<img src={elem.content} alt={full_title} />
					</div>
				);
			case 'text':
				return (
					<div className={s.text_content} key={index}>
						<p>{elem.content}</p>
					</div>
				);
			default:
				return null;
		}
	});

	return (
		<section className={s.preview}>
			<div className="container">
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
				{contentElement}
			</div>
		</section>
	);
};
