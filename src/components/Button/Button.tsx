import styles from './Button.module.css';

interface Props {
	children: string;
}

const Button = ({children}: Props) => {
	return <button className={[styles.btn, styles.btnNumber].join(' ')}>{children}</button>;
};

export default Button;
