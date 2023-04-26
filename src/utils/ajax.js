import { useRecoilState } from "recoil"
import snippetState from '../atoms/snippets'
import bestSnippetState from '../atoms/bestSnippets.js'



async function GetLatestSnippets() {
	const [snippets, setSnippets] = useRecoilState(snippetState)
	// 1. skicka request till API:et (fråga efter latest snippets)
	// 2. ta emot resultatet i JSON-format
	// 3. spara i state-variabel
	const url = 'https://www.forverkliga.se/JavaScript/api/api-snippets.php?latest'
	const response = await fetch(url)
	const data = await response.json()
	// Future improvement 1: add try/catch to handle failures
	// Future improvement 2: remove unneccessary data from array before saving it with map
	setSnippets(data)
}

async function GetBestSnippets() {
	const [bestSnippets, setBestSnippets] = useRecoilState(bestSnippetState)
	// 1. skicka request till API:et (fråga efter latest snippets)
	// 2. ta emot resultatet i JSON-format
	// 3. spara i state-variabel
	const url = `https://www.forverkliga.se/JavaScript/api/api-snippets.php?best`
	const response = await fetch(url)
	const data = await response.json()
	// Future improvement 1: add try/catch to handle failures
	// Future improvement 2: remove unneccessary data from array before saving it with map
	setBestSnippets(data)
}

async function uploadSnippet(title, content) {
	// 1. ta fram titel och content
	// stoppa in i url:en

	const url = `https://www.forverkliga.se/JavaScript/api/api-snippets.php?add&title=${title}&content=${content}`

	const data = {
		add: '',
		title: title,
		content: content
	}

	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	}

	const response = await fetch(url, options)
	const statusObject = await response.json()
}


async function deleteSnippet(snippet) {
	// 1. ta fram titel och content
	// stoppa in i url:en

	const url = `https://www.forverkliga.se/JavaScript/api/api-snippets.php?delete&id=${snippet.id}`

	const data = {
		delete: '',
		id: snippet.id,
	}

	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	}

	const response = await fetch(url, options)
	const statusObject = await response.json()
	statusObject.status == 'success' ? console.log('success') : console.log('fail');

}


async function Vote({ snippet, setSnippets, setBestSnippets, type }) {

	let newScore = {
		id: snippet.id,
	}

	type === 'upvote' ? newScore.upvote = '' && (snippet.score = snippet.score + 1) : newScore.downvote = '' && (snippet.score = snippet.score - 1)

	const url = 'https://www.forverkliga.se/JavaScript/api/api-snippets.php'

	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(newScore)
	}

	const response = await fetch(url, options)
	const data = await response.json()
	console.log({ data });

	if (data.status == 'success') {
		getLatestSnippets(setSnippets)
		getBestSnippets(setBestSnippets)
		console.log('success');
	} else {
		console.log('fail');
	}
}


export { GetLatestSnippets, uploadSnippet, GetBestSnippets, Vote, deleteSnippet }
