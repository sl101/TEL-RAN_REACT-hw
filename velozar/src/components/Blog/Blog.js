import style from './Blog.module.css';
import { posts } from '../../data/posts';

const Blog = () => {
	return (
		<div className={style.blog}>
			{posts.map((el, key) => (
				<q key={key}>{el}</q>
			))}
		</div>
	);
};

export default Blog;
