import style from './Content.module.css';

const Content = ({
	title,
	title_style,
	description,
	content_style,
	description_style,
	image,
	alt,
}) => {
	return (
		<section className={style.content} style={{ ...content_style }}>
			<div className={style.inner}>
				{title_style && (
					<h1 className={style.title} style={{ ...title_style }}>
						{title}
					</h1>
				)}
				{!title_style && <h2 className={style.title}>{title}</h2>}
				<p className={style.description} style={{ ...description_style }}>
					{description}
				</p>
			</div>
			<img className={style.image} src={image} alt={alt} />
		</section>
	);
};

export default Content;
