import s from './UsersPage.module.css';

const UsersPage = () => {
	return (
		<section className={s.users_page}>
			<div className="container">
				<div className={s.users_wrapper}>
					<h2 className={s.users_title}>Users Page</h2>
				</div>
			</div>
		</section>
	);
};

export default UsersPage;
