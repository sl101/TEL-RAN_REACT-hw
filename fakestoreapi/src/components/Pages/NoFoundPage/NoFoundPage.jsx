import s from './NoFoundPage.module.css';
import HandleButton from './../../HandleButton/HandleButton';
import { useNavigate } from 'react-router-dom';

export const NoFoundPage = () => {
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	};

	return (
		<section className={s.nofound_section}>
			<span>404</span>
			<p>Page Not Found</p>
			<HandleButton text="<<< Go Back" goBack={goBack} />
		</section>
	);
};
