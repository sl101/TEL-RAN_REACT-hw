import s from './HomePage.module.css';

const HomePage = () => {
	return (
		<section className={s.home_page}>
			<div className="container">
				<div className={s.home_wrapper}>
					<h2 className={s.home_title}>Home Page</h2>
				</div>
			</div>
		</section>
	);
};

export default HomePage;
