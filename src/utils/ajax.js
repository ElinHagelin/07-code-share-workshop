
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

export { getLatestSnippets }
