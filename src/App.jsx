import { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import Menu from './components/menu/Menu.jsx'
import ViewSnippets from './components/viewSnippets/ViewSnippets.jsx'
import UploadForm from './components/upload/UploadForm.jsx'
import './App.css'
import { tab } from './constants.js'
import { GetLatestSnippets, GetBestSnippets } from './utils/ajax'
import snippetState from './atoms/snippets.js'
import bestSnippetState from './atoms/bestSnippets.js'

function App() {
	// State variables
	const [selectedTab, setSelectedTab] = useState(tab.latest)
	const [snippets, setSnippets] = useRecoilState(snippetState)
	const [bestSnippets, setBestSnippets] = useRecoilState(bestSnippetState)

	// const showSnippets = (selectedTab === tab.latest) || (selectedTab === tab.upvotes)
	const latestSnippets = selectedTab === tab.latest
	const mostUpvotedSnippets = selectedTab === tab.upvotes
	const uploadSnippets = selectedTab === tab.upload

	// useEffect
	useEffect(() => {
		<>
			<GetLatestSnippets />
			<GetBestSnippets />
		</>
		// const interval = setInterval(() => {
		// 	getLatestSnippets(setSnippets)
		// 	getBestSnippets(setBestSnippets)
		// }, 10000);
		// return () => clearInterval(interval);

		// VG-version: vänta 1 minut och hämta sedan snippets igen (uppdatera datan innan den blir för gammal)
	}, [])


	// Local variables
	// const showSnippets = (selectedTab === tab.latest) || (selectedTab === tab.upvotes)

	return (
		<div className="App">
			<header>
				<h1> Code share </h1>
			</header>
			<main className="show-components">
				<Menu selected={selectedTab} setSelected={setSelectedTab} />

				{latestSnippets || mostUpvotedSnippets && <ViewSnippets selected={selectedTab} />}

				{uploadSnippets && <UploadForm />}
			</main>
		</div>
	)
}

export default App
