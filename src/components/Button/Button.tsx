import styles from './Button.module.css';

interface Props {
	children: string;
	onclick?: () => void;
}

const Button = ({children}: Props) => {
	return <button className={[styles.btn, styles.btnOperation].join(' ')}>{children}</button>;
};

export default Button;
