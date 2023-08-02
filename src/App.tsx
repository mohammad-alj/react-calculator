import Button from './components/Button';

const App = () => {
	return (
		<div>
			<Button onclick={() => console.log('1')} style='number'>
				1
			</Button>
			<Button onclick={() => console.log('2')} style='number'>
				2
			</Button>
			<Button onclick={() => console.log('3')} style='number'>
				3
			</Button>
			<Button onclick={() => console.log('=')} style='operator'>
				=
			</Button>
			<Button onclick={() => console.log(')')} style='symbol'>
				)
			</Button>
			<Button onclick={() => console.log('DEL')} style='operation'>
				DEL
			</Button>
		</div>
	);
};

export default App;
