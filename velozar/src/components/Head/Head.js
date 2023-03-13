import style from './Head.module.css';
import picture from './media/head.png';

const Head = () => {
	return (
		<section className={style.head}>
			<div className={style.content}>
				<h1 className={style.title}>Веломастерская “Велозар”</h1>
				<div className={style.description}>
					Мы, мастера веломастерской «Велозар», как раз те самые счастливые
					люди, которые смогли превратить свое увлечение и хобби в профессию. Мы
					сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам
					только радость и удовольствие от езды.
				</div>
			</div>
			<img
				className={style.image}
				src={picture}
				alt="Рисунок динозавр на велосипеде"
			/>
		</section>
	);
};

export default Head;
