import s from './Footer.module.css';

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className={s.footer_wrapper}>
					<p>REACT project</p>
					<p>Slava Zhevaha | 2023</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
