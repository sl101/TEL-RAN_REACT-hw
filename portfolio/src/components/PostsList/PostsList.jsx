import s from './PostsList.module.css';
import { blogPost } from '../../store/blogPosts';
import { PostItem } from './../PostItem/PostItem';

export const PostsList = ({ postsAmount }) => {
	const posts = blogPost;
	return (
		<ul className={s.posts_list}>
			{posts.map((elem, index) =>
				!postsAmount ? (
					<PostItem key={index} {...elem} />
				) : (
					index < postsAmount && <PostItem key={index} {...elem} />
				)
			)}
		</ul>
	);
};
