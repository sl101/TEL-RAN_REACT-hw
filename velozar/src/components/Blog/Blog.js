import style from './Blog.module.css';

const Blog = () => {
	return (
		<div className={style.blog}>
			<q>
				Приехав к нам однажды, многие наши клиенты становятся постоянными, а
				часть из них даже друзьями.
			</q>
			<q>
				А также в нашей мастерской можно отремонтировать электросамокат и
				электровелосипед.
			</q>
		</div>
	);
};

export default Blog;
