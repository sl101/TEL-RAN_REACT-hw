import s from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={s.footer}>
			<div className="container">
				<div className={s.footer_wrapper}>
					<p>REACT project</p>
					<p>slava zhevaha | 2023</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
