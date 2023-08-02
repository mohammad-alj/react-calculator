import ButtonGrid from './components/ButtonGrid';
import OutputWindow from './components/OutputWindow';
import './App.css';
import {useState} from 'react';

type Operator = '+' | '-' | '*' | '/';

const App = () => {
	const [expression, setExpression] = useState({operator: '', current: '', previous: ''});
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
				onEquals={() => console.log('equals')}
				onSelectPoint={() => {
					if (expression.current.includes('.')) return;

					if (!expression.current) setExpression({...expression, current: '0.'});
					else setExpression({...expression, current: expression.current + '.'});
				}}
				onIncrement={() => console.log('+')}
				onDecrement={() => console.log('-')}
				onMultiply={() => console.log('*')}
				onDevide={() => console.log('/')}
			/>
		</div>
	);
};

export default App;
