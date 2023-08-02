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
				onAllClear={() => console.log('Cleared')}
				onDelete={() => console.log('deleted')}
				onEquals={() => console.log('equals')}
				onSelectPoint={() => console.log('.')}
				onIncrement={() => console.log('+')}
				onDecrement={() => console.log('-')}
				onMultiply={() => console.log('*')}
				onDevide={() => console.log('/')}
			/>
		</div>
	);
};

export default App;
