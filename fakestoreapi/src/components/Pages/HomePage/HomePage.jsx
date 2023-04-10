import s from './HomePage.module.css';

const HomePage = () => {
	return (
		<section className={s.home_page}>
			<div className="container">
				<div className={s.home_wrapper}>
					<h1 className={s.home_title}>FAKE STORE</h1>
					<span>Home Page</span>
				</div>
			</div>
		</section>
	);
};

export default HomePage;
