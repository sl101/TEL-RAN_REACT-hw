import s from './WorksList.module.css';
import { works_data } from '../../store/worksData';
import { WorkItem } from './../WorkItem/WorkItem';

export const WorksList = ({ worksAmount }) => {
	const works = works_data;

	return (
		<ul className={s.works_list}>
			{works
				.slice(0, !worksAmount ? works.length : worksAmount)
				.map((elem, index) => (
					<WorkItem key={index} {...elem} />
				))}
		</ul>
	);
};
