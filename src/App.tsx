import { useState } from 'react';
import './App.scss';

function App() {
	const [message, setMessage] = useState('test');

	return (
		<div className="App">
			<h2>Zustand Demo</h2>

			<main>
				<section className="controlArea">
					<div className="data">
						<label>Message:</label>
						<input
							type="text"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
						Message: {message}
					</div>
				</section>
			</main>
		</div>
	);
}

export default App;
