import Service from '../Service/Service';
import style from './ServiceList.module.css';

const ServiceList = () => {
	const services = [
		{ text: 'Годовое ТО', background: 'var(--color-200)' },
		{ text: 'Выравнивание	колес', background: 'var(--color-2c1)' },
		{ text: 'Настройка переключателей', background: 'var(--color-700)' },
	];
	return (
		<section className="services">
			<ul className={style.list}>
				{services.map((el, index) => (
					<Service background={el.background} text={el.text} key={index} />
				))}
			</ul>
		</section>
	);
};

export default ServiceList;
