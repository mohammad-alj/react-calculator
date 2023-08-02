import ButtonGrid from './components/ButtonGrid';
import OutputWindow from './components/OutputWindow';

const App = () => {
	return (
		<div>
			{/* <ButtonGrid
				onSelectSymbol={symbol => console.log(symbol)}
				onAllClear={() => console.log('Cleared')}
				onDelete={() => console.log('deleted')}
				onEquals={() => console.log('equals')}
				onSelectPoint={() => console.log('.')}
			/> */}
			<OutputWindow />
		</div>
	);
};

export default App;
