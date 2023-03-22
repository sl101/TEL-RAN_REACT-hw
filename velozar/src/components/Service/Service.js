import style from './Service.module.css';

const Service = ({ background, text, color }) => {
	return (
		<li className={style.service_item} style={{ backgroundColor: background }}>
			<div className={style.decor}></div>
			<p style={{ color }} className={style.text}>
				{text}
			</p>
		</li>
	);
};

export default Service;
