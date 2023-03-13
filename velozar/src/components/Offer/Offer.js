import style from './Offer.module.css';

const Offer = ({ background, color, flex, title, description, image, alt }) => {
	return (
		<section
			className={style.offer}
			style={{ flexDirection: flex, backgroundColor: background, color: color }}
		>
			<div className={style.content}>
				<h2 className={style.title}>{title}</h2>
				<p className={style.description}>{description}</p>
			</div>
			<img className={style.image} src={image} alt={alt} />
		</section>
	);
};

export default Offer;
