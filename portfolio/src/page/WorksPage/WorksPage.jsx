import { WorksList } from '../../components';
import s from './WorksPage.module.css';

export const WorksPage = () => {
	return (
		<>
			<div className="container">
				<h1 className="page_title">Work</h1>
				<WorksList worksAmount={4} />
			</div>
		</>
	);
};
