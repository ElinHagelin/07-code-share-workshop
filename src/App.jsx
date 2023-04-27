import { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import Menu from './components/menu/Menu.jsx'
import ViewSnippets from './components/viewSnippets/ViewSnippets.jsx'
import UploadForm from './components/upload/UploadForm.jsx'
import './App.css'
import { tab } from './constants.js'
import { getLatestSnippets, getBestSnippets } from './utils/ajax'
import snippetState from './atoms/snippets.js'
import bestSnippetState from './atoms/bestSnippets.js'
import tabState from './atoms/selectedTab.js'

function App() {
	// State variables
	const [selectedTab, setSelectedTab] = useRecoilState(tabState)
	const [snippets, setSnippets] = useRecoilState(snippetState)
	const [bestSnippets, setBestSnippets] = useRecoilState(bestSnippetState)

	// const showSnippets = (selectedTab === tab.latest) || (selectedTab === tab.upvotes)
	const latestSnippets = selectedTab === tab.latest
	const mostUpvotedSnippets = selectedTab === tab.upvotes
	const uploadSnippets = selectedTab === tab.upload

	// useEffect
	useEffect(() => {
		getLatestSnippets(setSnippets)
		getBestSnippets(setBestSnippets)

		// const interval = setInterval(() => {
		// getLatestSnippets(setSnippets)
		// getBestSnippets(setBestSnippets)
		// }, 10000);
		// return () => clearInterval(interval);

		// VG-version: vänta 1 minut och hämta sedan snippets igen (uppdatera datan innan den blir för gammal)
	}, [selectedTab])


	return (
		<div className="App">
			<header>
				<h1> Code share </h1>
			</header>
			<main className="show-components">
				<Menu />

				{latestSnippets || mostUpvotedSnippets ? <ViewSnippets /> : null}

				{uploadSnippets && <UploadForm />}
			</main>
		</div>
	)
}

export default App
