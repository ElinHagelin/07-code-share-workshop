import { useState } from 'react'
import Menu from './components/menu/Menu.jsx'
import ViewSnippets from './components/viewSnippets/ViewSnippets.jsx'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="App">
			<header>
				<h1> Code share </h1>
			</header>
			<main className="show-components">
				<Menu />

				<ViewSnippets />

				<div className="component">
					<section className="framed">
						<span className="intro">
							Upload a new code snippet to the cloud!
						</span>
					</section>
					<section className="form">
						<label htmlFor="i1"> Title </label>
						<input id="i1" type="text" />

							<label htmlFor="i2"> Content </label>
							<textarea id="i2" rows="8" value="" />

							<button disabled> Upload </button>
					</section>
				</div>

			</main>
		</div>
	)
}

export default App
