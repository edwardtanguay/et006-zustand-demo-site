interface IProps {
	message: string;
}

export const InfoBox = ({message}: IProps) => {
	return (
		<div className="infoBox">
			<h2>Another component:</h2>
			<div className="row">
				<label>Message:</label>
				<span className="theValue"> {message}</span>
			</div>
		</div>
	);
};
