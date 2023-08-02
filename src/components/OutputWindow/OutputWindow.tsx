import styles from './OutputWindow.module.css';

interface Props {
	previous: string;
	current: string;
	operator: '+' | '-' | '*' | '/';
}

const OutputWindow = ({previous, current, operator}: Props) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.previous}>
				{previous} {operator}
			</div>
			<div className={styles.current}>{current}</div>
		</div>
	);
};

export default OutputWindow;
