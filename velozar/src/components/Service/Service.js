import style from './Service.module.css';
const Service = ({ background, text }) => {
	return (
		<li className={style.service_item} style={{ backgroundColor: background }}>
			<div className={style.decor}></div>
			<p className={style.text}>{text}</p>
		</li>
	);
};

export default Service;
