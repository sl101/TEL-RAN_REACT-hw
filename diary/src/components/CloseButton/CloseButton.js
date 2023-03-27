import s from './CloseButton.module.css';

const CloseButton = ({ id, close, deleteAction }) => {
	return (
		<button
			className={`${close} ${s.close_button}`}
			onClick={() => deleteAction(id)}
		>
			X
		</button>
	);
};

export default CloseButton;
