import { useState } from 'react';
import './App.scss';
import { InfoBox } from './components/InfoBox';

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

        <section className="dataArea">
          <InfoBox message={message} />
        </section>
			</main>
		</div>
	);
}

export default App;
