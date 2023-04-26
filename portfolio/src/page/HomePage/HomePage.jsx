import { NavLink } from 'react-router-dom';
import { Head, PostsList, WorksList } from '../../components';
import s from './HomePage.module.css';

export const HomePage = () => {
	return (
		<>
			<Head />
			<section className={s.posts}>
				<div className="container">
					<div className={s.posts_top}>
						<h2 className="title">Recent posts</h2>
						<NavLink className={s.link} to="/blog">
							View all
						</NavLink>
					</div>
					<PostsList postsAmount={2} type="home" />
				</div>
			</section>
			<section className={s.works}>
				<div className="container">
					<div className={s.works_top}>
						<h2 className="title">Featured works</h2>
					</div>
					<WorksList worksAmount={3} />
				</div>
			</section>
		</>
	);
};
