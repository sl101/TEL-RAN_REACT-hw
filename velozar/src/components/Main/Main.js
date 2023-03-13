import Head from '../Head/Head';
import Offer from '../Offer/Offer';
import service from './media/service.jpg';
import rental from './media/rental.jpg';
import Blog from '../Blog/Blog';
import ServiceList from '../ServiceList/ServiceList';

const Main = () => {
	return (
		<main>
			<Head />
			<Offer
				background="var(--color-600)"
				color="var(--white-color)"
				title="Что мы предлагаем"
				description="В нашей мастерской можно выполнить комплексное техническое
					обслуживание велосипеда, ремонт и настройку всех его узлов,
					шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает
					избежать многих проблем и дорогого ремонта. Все работы выполняем
					качественно и с душой."
				image={service}
				alt="изображение мастерская велосипедов"
			/>
			<Blog />
			<ServiceList />
			<Offer
				flex="row-reverse"
				background="var(--white-color)"
				title="Прокат велосипедов"
				description="У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!"
				image={rental}
				alt="изображение велосипеды"
			/>
		</main>
	);
};

export default Main;
