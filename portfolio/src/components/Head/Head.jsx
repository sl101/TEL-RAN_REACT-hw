import s from './Head.module.css';
import image from './media/john_avatar.jpg';

export const Head = () => {
	return (
		<section className={s.head}>
			<div className="container">
				<div className={s.wrapper}>
					<div className={s.content}>
						<h1 className="animate__animated animate__fadeInDown page_title">
							<span>Hi, I am John,</span>
							Creative Technologist
						</h1>
						<div className={s.description}>
							<p>
								Amet minim mollit non deserunt ullamco est sit aliqua dolor do
								amet sint. Velit officia consequat duis enim velit mollit.
								Exercitation veniam consequat sunt nostrud amet.
							</p>
						</div>
						<div
							className={`animate__animated animate__fadeInUp ${s.head_btn}`}
						>
							<button type="button">Download Resume</button>
						</div>
					</div>
					<div className={`animate__animated animate__fadeInRight ${s.image}`}>
						<img src={image} alt="Smiling young man in cap" />
					</div>
				</div>
			</div>
		</section>
	);
};
