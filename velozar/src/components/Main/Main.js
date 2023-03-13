import Content from '../Content/Content';
import Blog from '../Blog/Blog';
import ServiceList from '../ServiceList/ServiceList';
import { head } from '../../data/head';
import { offer } from '../../data/offer';
import { rental } from '../../data/rental';

const Main = () => {
	return (
		<main>
			<Content {...head} />
			<Content {...offer} />
			<Blog />
			<ServiceList />
			<Content {...rental} />
		</main>
	);
};

export default Main;
