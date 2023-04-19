import { useState } from 'react'
import Menu from './components/menu/Menu.jsx'
import ViewSnippets from './components/viewSnippets/ViewSnippets.jsx'
import UploadForm from './components/upload/UploadForm.jsx'
import './App.css'

function App() {
	const [count, setCount] = useState(0)
	// Lägg till en state-variabel här, som avgör om ViewSnippets eller formuläret ska visas

	return (
		<div className="App">
			<header>
				<h1> Code share </h1>
			</header>
			<main className="show-components">
				<Menu />

				<ViewSnippets />

				<UploadForm />
			</main>
		</div>
	)
}

export default App
