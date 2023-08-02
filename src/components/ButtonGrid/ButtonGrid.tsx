import styles from './ButtonGrid.module.css';
import Button from '../Button';

const ButtonGrid = () => {
	return (
		<div className={styles.grid}>
			{/* row 1 */}
			<Button style='operation'>AC</Button>
			<Button style='operation'>C</Button>
			<Button style='operation'>DEL</Button>
			<Button style='operator'>/</Button>
			{/* row 2 */}
			<Button style='number'>7</Button>
			<Button style='number'>8</Button>
			<Button style='number'>9</Button>
			<Button style='operator'>*</Button>
			{/* row 3 */}
			<Button style='number'>4</Button>
			<Button style='number'>5</Button>
			<Button style='number'>6</Button>
			<Button style='operator'>-</Button>
			{/* row 4 */}
			<Button style='number'>1</Button>
			<Button style='number'>2</Button>
			<Button style='number'>3</Button>
			<Button style='operator'>+</Button>
			{/* row 5 */}
			<Button style='symbol'>(</Button>
			<Button style='number'>0</Button>
			<Button style='symbol'>)</Button>
			<Button style='operator'>=</Button>
		</div>
	);
};

export default ButtonGrid;
