import s from './WorksList.module.css';
import { worksList } from './../../store/worksList';
import { WorkItem } from './../WorkItem/WorkItem';

export const WorksList = ({ worksAmount }) => {
	const works = worksList;

	return (
		<ul className={s.works_list}>
			{works.map((elem, index) =>
				!worksAmount ? (
					<WorkItem key={index} {...elem} />
				) : (
					index < worksAmount && <WorkItem key={index} {...elem} />
				)
			)}
		</ul>
	);
};
