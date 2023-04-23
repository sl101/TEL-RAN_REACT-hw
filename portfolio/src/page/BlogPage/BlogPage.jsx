import { PostsList } from '../../components';
import s from './BlogPage.module.css';

export const BlogPage = () => {
	return (
		<>
			<div className="container">
				<h1 className="page_title">Blog</h1>
				<PostsList />
			</div>
		</>
	);
};
