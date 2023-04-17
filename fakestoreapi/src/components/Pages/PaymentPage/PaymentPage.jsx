import { useNavigate } from 'react-router-dom';
import HandleButton from '../../HandleButton/HandleButton';
import s from './PaymentPage.module.css';

const PaymentPage = () => {
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	};

	return (
		<section className={s.payment_page}>
			<div className="container">
				<h2 className={s.payment_title}>Order Payment Page</h2>
				<HandleButton text="<<< Go Back" goBack={goBack} />
			</div>
		</section>
	);
};

export default PaymentPage;
