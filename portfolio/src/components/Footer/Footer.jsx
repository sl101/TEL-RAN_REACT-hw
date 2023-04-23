import s from './Footer.module.css';
import { NavLink } from 'react-router-dom';
import { mediaIcons } from '../../store/media';

export const Footer = () => {
	return (
		<footer className={s.footer}>
			<div className="container">
				<div className={s.wrapper}>
					<ul className={s.media_list}>
						{mediaIcons.map((el, index) => (
							<li key={index}>
								<NavLink className={s.link} to="#">
									{el}
								</NavLink>
							</li>
						))}
					</ul>
					<p>Copyright ©2020 All rights reserved</p>
				</div>
			</div>
		</footer>
	);
};
