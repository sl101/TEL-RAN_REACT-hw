import s from './CloseButton.module.css';

const CloseButton = ({ id, close, deleteAction, opacity }) => {
	// console.log('opacity: ', opacity);

	return (
		<button
			style={opacity}
			// className={`close_btn ${close} ${s.close_button}`}
			// className={`${close} ${s.close_button}`}
			className={s.close_button}
			onClick={() => deleteAction(id)}
		>
			X
		</button>
	);
};

export default CloseButton;
