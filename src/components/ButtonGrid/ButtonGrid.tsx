import styles from './ButtonGrid.module.css';
import Button from '../Button';

interface Props {
	onSelectSymbol: (value: string) => void;
	onEquals: () => void;
	onAllClear: () => void;
	onDelete: () => void;
	onSelectPoint: () => void;
}

const ButtonGrid = ({onSelectSymbol, onEquals, onAllClear, onDelete, onSelectPoint}: Props) => {
	return (
		<div className={styles.grid}>
			{/* row 1 */}
			<Button style='operation' onclick={() => onAllClear()}>
				AC
			</Button>
			<Button style='operation' onclick={onDelete}>
				DEL
			</Button>
			<Button style='symbol' onclick={onSelectPoint}>
				.
			</Button>
			<Button style='operator' onclick={() => onSelectSymbol('/')}>
				/
			</Button>
			{/* row 2 */}
			<Button style='number' onclick={() => onSelectSymbol('7')}>
				7
			</Button>
			<Button style='number' onclick={() => onSelectSymbol('8')}>
				8
			</Button>
			<Button style='number' onclick={() => onSelectSymbol('9')}>
				9
			</Button>
			<Button style='operator' onclick={() => onSelectSymbol('*')}>
				*
			</Button>
			{/* row 3 */}
			<Button style='number' onclick={() => onSelectSymbol('4')}>
				4
			</Button>
			<Button style='number' onclick={() => onSelectSymbol('5')}>
				5
			</Button>
			<Button style='number' onclick={() => onSelectSymbol('6')}>
				6
			</Button>
			<Button style='operator' onclick={() => onSelectSymbol('-')}>
				-
			</Button>
			{/* row 4 */}
			<Button style='number' onclick={() => onSelectSymbol('1')}>
				1
			</Button>
			<Button style='number' onclick={() => onSelectSymbol('2')}>
				2
			</Button>
			<Button style='number' onclick={() => onSelectSymbol('3')}>
				3
			</Button>
			<Button style='operator' onclick={() => onSelectSymbol('+')}>
				+
			</Button>
			{/* row 5 */}
			<Button style='symbol' onclick={() => onSelectSymbol('(')}>
				(
			</Button>
			<Button style='number' onclick={() => onSelectSymbol('0')}>
				0
			</Button>
			<Button style='symbol' onclick={() => onSelectSymbol(')')}>
				)
			</Button>
			<Button style='operator' onclick={onEquals}>
				=
			</Button>
		</div>
	);
};

export default ButtonGrid;
