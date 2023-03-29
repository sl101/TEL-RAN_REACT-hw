import s from './CloseButton.module.css';

const CloseButton = ({ id, deleteAction, opacity }) => {
	return (
		<button
			style={opacity}
			className={s.close_button}
			onClick={() => deleteAction(id)}
		>
			X
		</button>
	);
};

export default CloseButton;
