import ButtonGrid from './components/ButtonGrid';
import OutputWindow from './components/OutputWindow';
import './App.css';

const App = () => {
	return (
		<div className='calculator'>
			<OutputWindow previous='2' operator='+' current='4' />
			<ButtonGrid
				onSelectSymbol={symbol => console.log(symbol)}
				onAllClear={() => console.log('Cleared')}
				onDelete={() => console.log('deleted')}
				onEquals={() => console.log('equals')}
				onSelectPoint={() => console.log('.')}
			/>
		</div>
	);
};

export default App;
