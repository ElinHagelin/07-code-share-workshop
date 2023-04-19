import { useState, useEffect } from 'react'
import Menu from './components/menu/Menu.jsx'
import ViewSnippets from './components/viewSnippets/ViewSnippets.jsx'
import UploadForm from './components/upload/UploadForm.jsx'
import './App.css'
import { tab } from './constants.js'
import { getLatestSnippets } from './utils/ajax'

function App() {
	// State variables
	const [selectedTab, setSelectedTab] = useState(tab.latest)
	const [snippets, setSnippets] = useState(null)


	// useEffect
	useEffect(() => {
		getLatestSnippets(setSnippets)
		// VG-version: vänta 1 minut och hämta sedan snippets igen (uppdatera datan innan den blir för gammal)
	}, [])


	// Local variables
	const showSnippets = (selectedTab === tab.latest) || (selectedTab === tab.upvotes)

	return (
		<div className="App">
			<header>
				<h1> Code share </h1>
			</header>
			<main className="show-components">
				<Menu selected={selectedTab} setSelected={setSelectedTab} />

				{showSnippets && <ViewSnippets snippets={snippets} />}

				{selectedTab === tab.upload && <UploadForm />}
			</main>
		</div>
	)
}

export default App
