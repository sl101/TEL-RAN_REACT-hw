import { useDispatch } from 'react-redux';
import s from './ProductItem.module.css';
import {
	decrementByIdAction,
	incrementByIdAction,
	removeByIdAction,
} from '../../store/productsReduser';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { MdDeleteOutline } from 'react-icons/md';

export const ProductItem = ({ id, title, count, type }) => {
	const dispatch = useDispatch();
	return (
		<li className={s.item}>
			<h3 className={s.title}>{title}</h3>
			{type !== 'empty' && (
				<div className={s.item_content}>
					<div className={s.counter_wrapper}>
						<div
							className={`${s.btn} ${s.btn_plus}`}
							onClick={() => dispatch(incrementByIdAction(id))}
						>
							<AiOutlinePlus className={s.btn_icon} />
						</div>
						<div
							className={`${s.btn} ${s.btn_minus}`}
							onClick={() => dispatch(decrementByIdAction(id))}
						>
							<AiOutlineMinus className={s.btn_icon} />
						</div>
						<p className={s.counter}>{count}</p>
					</div>
					<MdDeleteOutline
						className={s.trush_icon}
						onClick={() => dispatch(removeByIdAction(id))}
					/>
				</div>
			)}
		</li>
	);
};
