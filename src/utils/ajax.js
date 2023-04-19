
async function getLatestSnippets(setSnippets) {
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

async function uploadSnippet(title, content) {
	const url = `https://www.forverkliga.se/JavaScript/api/api-snippets.php?add&title=${title}&content=${content}`
	console.log('uploadSnippet, url is: ', url)
	const response = await fetch(url, { method: 'POST' })
	// OBS! Om du missar att ange method=POST kommer API:et returnera HTML, som inte är JSON. Nästa rad kommer i så fall att faila.
	const data = await response.json()
	console.log('uploadSnippet: data is: ', data)
}

export { getLatestSnippets, uploadSnippet }
