import s from './PostsList.module.css';
import { PostItem } from './../PostItem/PostItem';
import { blogs_data } from '../../store/blogsData';

export const PostsList = ({ postsAmount }) => {
	const posts = blogs_data;

	const isHomeClass = postsAmount ? 'home' : '';

	return (
		<ul className={`${s.posts_list} ${isHomeClass && s[isHomeClass]}`}>
			{posts
				.slice(0, !postsAmount ? posts.length : postsAmount)
				.map((elem, index) => (
					<PostItem key={index} {...elem} classType={isHomeClass} />
				))}
		</ul>
	);
};
