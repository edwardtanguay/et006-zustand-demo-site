import { useStore } from './store';
import './App.scss';
import { InfoBox } from './components/InfoBox';

function App() {
	const store = useStore((state) => state);
	return (
		<div className="App">
			<h2>Zustand Demo</h2>

			<main>
				<section className="controlArea">
					{/* MESSAGE */}
					<div className="data">
						<label>Message:</label>
						<input
							type="text"
							value={store.message}
							onChange={(e) => store.setMessage(e.target.value)}
						/>
						Message: {store.message}
					</div>

					{/* COLORS */}
					<div className="data">
						<label>Colors:</label>
						<div>
							<button onClick={() => store.addColor('blue')}>
								blue
							</button>
							<button onClick={() => store.addColor('red')}>
								red
							</button>
							<button onClick={() => store.addColor('yellow')}>
								yellow
							</button>
							<button onClick={() => store.addColor('purple')}>
								purple
							</button>
						</div>
						<button onClick={() => store.deleteColor()}>
							delete color
						</button>
						<button onClick={() => store.setColors([])}>
							delete all colors
						</button>
					</div>

					{/* MULTIPLE VALUES */}
					<div className="data">
						<label>Change multiple values:</label>
						<div>
							<button
								onClick={() => store.deleteVowelsAndColorRed()}
							>
								delete vowels from message and color red from
								colors
							</button>
						</div>
					</div>

					{/* OBJECT */}
					<div className="data">
						<label>Object:</label>
						<div>
							<button
								onClick={() =>
									store.toggleCurrentUserStatusOnline()
								}
							>
								toggle online status
							</button>
							<button
								onClick={() =>
									store.toggleCurrentUserStatusEmail()
								}
							>
								toggle email status
							</button>
						</div>
					</div>
				</section>

				<section className="dataArea">
					<InfoBox />
				</section>
			</main>
		</div>
	);
}

export default App;
