import { useState } from 'react'
import Menu from './components/menu/Menu.jsx'
import ViewSnippets from './components/viewSnippets/ViewSnippets.jsx'
import UploadForm from './components/upload/UploadForm.jsx'
import './App.css'
import { tab } from './constants.js'

function App() {
	const [selectedTab, setSelectedTab] = useState(tab.latest)

	const showSnippets = (selectedTab === tab.latest) || (selectedTab === tab.upvotes)

	return (
		<div className="App">
			<header>
				<h1> Code share </h1>
			</header>
			<main className="show-components">
				<Menu selected={selectedTab} setSelected={setSelectedTab} />

				{showSnippets && <ViewSnippets />}

				{selectedTab === tab.upload && <UploadForm />}
			</main>
		</div>
	)
}

export default App
