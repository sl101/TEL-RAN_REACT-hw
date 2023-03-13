import style from './Content.module.css';

const Content = ({
	content_padding,
	gap,
	background,
	color,
	flex,
	title,
	title_style,
	description,
	description_style,
	image,
	alt,
}) => {
	return (
		<section
			className={style.content}
			style={{
				padding: content_padding,
				gap: gap,
				flexDirection: flex,
				backgroundColor: background,
				color: color,
			}}
		>
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
