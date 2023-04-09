import s from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={s.footer}>
			<div className="container">
				<div className={s.footer_wrapper}>
					<p>fake store 2023</p>
					<p>slava zhevaha &#169;</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
