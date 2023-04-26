import { WorksList } from '../../components';

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
