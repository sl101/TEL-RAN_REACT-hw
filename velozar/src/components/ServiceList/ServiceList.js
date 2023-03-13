import Service from '../Service/Service';
import style from './ServiceList.module.css';
import { services } from '../../data/services';

const ServiceList = () => {
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
