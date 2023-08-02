import Button from './components/Button';

const App = () => {
	return (
		<div>
			<Button onclick={() => console.log('clicked')}>click me</Button>
		</div>
	);
};

export default App;
