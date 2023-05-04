import s from './ContactForm.module.css';
import { Button, Input } from '../UI';
import { AiOutlineClose } from 'react-icons/ai';

export const ContactForm = ({ toggleContacts }) => {
	const onSubmit = (e) => {
		e.preventDefault();
		const [name, email, message] = e.target;
		// console.log(name.value);
		// console.log(email.value);
		// console.log(message.value);
		toggleContacts();
		e.target.reset();
	};

	return (
		<div className={s.form_container}>
			<AiOutlineClose className={s.close_icon} onClick={toggleContacts} />
			<form className={s.form} onSubmit={onSubmit}>
				<Input type="text" name="name" label_name="Your name:" />
				<Input type="email" name="email" label_name="Your e-mail:" />
				<Input type="text" name="textarea" label_name="Your message:" />
				<Button text="Send message" style={{ maxWidth: '90%' }} />
			</form>
		</div>
	);
};
