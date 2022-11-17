import { useStore } from '../store';

export const InfoBox = () => {
	const store = useStore((state) => state);
	return (
		<div className="infoBox">
			<h2>Another component:</h2>

			{/* MESSAGE */}
			<div className="row">
				<label>Message:</label>
				<span className="theValue"> {store.message}</span>
			</div>

			{/* COLORS */}
			<div className="row">
				<label>Colors:</label>{' '}
				<span className="theValue">
					{store.colors.map((m) => m).join(', ')}
				</span>
			</div>
		</div>
	);
};
