interface Props {
	children: string;
	onclick?: () => void;
}

const Button = ({children, onclick = () => {}}: Props) => {
	return <button onClick={onclick}>{children}</button>;
};

export default Button;
