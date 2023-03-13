import style from './Button.module.css';
const Button = ({ text }) => <button className={style.btn}>{text}</button>;
export default Button;
