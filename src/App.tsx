import ButtonGrid from './components/ButtonGrid';
import OutputWindow from './components/OutputWindow';
import './App.css';
import {useState} from 'react';

type Operator = '+' | '-' | '*' | '/';

const App = () => {
	const [expression, setExpression] = useState({operator: '', current: '', previous: ''});
	const evaluate = () => {
		if (!expression.current || expression.previous) expression.previous;
		if (!expression.current || !expression.previous) return '';
		const current = parseInt(expression.current);
		const previous = parseInt(expression.previous);

		switch (expression.operator) {
			case '+':
				return previous + current;

			case '-':
				return previous - current;

			case '*':
				return previous * current;

			case '/':
				if (current === 0) throw new Error('Cant devide by zero.');
				return previous / current;
		}
	};

	return (
		<div className='calculator'>
			<OutputWindow
				previous={expression.previous}
				operator={expression.operator as Operator}
				current={expression.current}
			/>
			<ButtonGrid
				onSelectSymbol={symbol =>
					setExpression({...expression, current: expression.current + symbol})
				}
				onAllClear={() => setExpression({operator: '', current: '', previous: ''})}
				onDelete={() => {
					setExpression({...expression, current: expression.current.substring(0, -1)});
				}}
				onEquals={() => {
					if (!expression.current) {
						setExpression({...expression});
						return;
					}
					if (!expression.previous) {
						setExpression({previous: expression.current, current: '', operator: '+'});
						return;
					}

					try {
						const result = evaluate();
						setExpression({
							previous: '',
							operator: '',
							current: result?.toString() as string,
						});
					} catch (err) {
						setExpression({
							current: 'ERR',
							previous: 'cant devide by zero!',
							operator: '/',
						});
					}
				}}
				onSelectPoint={() => {
					if (expression.current.includes('.')) return;

					if (!expression.current) setExpression({...expression, current: '0.'});
					else setExpression({...expression, current: expression.current + '.'});
				}}
				onSelectOperator={o => {
					if (o === '-' && !expression.current) {
						setExpression({...expression, current: '-'});
					} else if (expression.current && expression.previous) {
						try {
							const result = evaluate();
							console.log(result);
							setExpression({
								operator: o,
								previous: result?.toString() as string,
								current: '',
							});
						} catch (err) {
							setExpression({
								current: 'ERR',
								previous: 'cant devide by zero!',
								operator: '/',
							});
						}
					} else if (expression.current) {
						setExpression({operator: o, previous: expression.current, current: ''});
					}
				}}
			/>
		</div>
	);
};

export default App;
