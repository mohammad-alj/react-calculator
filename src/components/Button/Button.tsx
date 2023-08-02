import styles from './Button.module.css';

interface Props {
	children: string;
	style: 'number' | 'operator' | 'symbol' | 'operation';
	onclick?: () => void;
}

const Button = ({children, style, onclick}: Props) => {
	return (
		<button className={[styles.btn, styles['btn-' + style]].join(' ')} onClick={onclick}>
			{children}
		</button>
	);
};

export default Button;
