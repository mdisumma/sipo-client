export const Header = (props) => {
	return (
		<header>
			<img src={props.src} alt="sipo logo"></img>
			{props.logout}
		</header>
	);
};
