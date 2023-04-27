import { useEffect, useState } from 'react'
// import { getLatestSnippets } from '../../utils/ajax'
import './ViewSnippets.css'
import CodeSnippet from './CodeSnippet.jsx'
import { useRecoilState } from 'recoil'
import snippetState from '../../atoms/snippets.js'
import bestSnippetState from '../../atoms/bestSnippets.js'
import { tab } from '../../constants.js'
import tabState from '../../atoms/selectedTab'

// TODO: använd "title" fältet också

// 1. Skapa (tillfällig) data, utifrån det som API:et returnerar - en array med minst 1 objekt
// 2. Använd map-funktionen för att rendera <div className="vote"> för varje objekt
const tempData = [
	{
		"id": 1348,
		"content": "while(true){\n echo \"42\\n\";\n}",
		"score": 3,
	},
	{
		"id": 134,
		"content": "// test",
		"score": 12,
	}
]


const ViewSnippets = () => {
	const [selectedTab] = useRecoilState(tabState)
	const [snippets] = useRecoilState(snippetState)
	const [bestSnippets] = useRecoilState(bestSnippetState)
	const [currentSnippets, setCurrentSnippets] = useState([]);

	console.log('snippets är: ', snippets);
	console.log('bestSnippets är: ', bestSnippets);
	useEffect(() => {
		if (selectedTab === tab.latest) {
			setCurrentSnippets(snippets)
		} else if (selectedTab === tab.upvotes) {
			setCurrentSnippets(bestSnippets);
		}
		console.log(currentSnippets);
	}, [selectedTab])
	return (
		<div className="component">

			<section className="framed">
				<span className="intro">
					The latest snippets from coders like you!
				</span>
			</section>

			<section>
				{
					currentSnippets && currentSnippets.map(snippet => (
						<CodeSnippet key={snippet.id} snippet={snippet} />
					))
				}
				{/* {snippets || bestSnippets
					? selectedTab == tab.latest ?
						snippets.map(snippet => (
							<CodeSnippet key={snippet.id} snippet={snippet} />
						)) :
						bestSnippets.map(snippet => (
							<CodeSnippet key={snippet.id} snippet={snippet} />
						))
					: <p> Please wait, retrieving data... </p>

				} */}
			</section>
			<hr />
		</div>
	)
}


export default ViewSnippets

/*<div className="vote">
<code>let x=5;</code>
<div className="vote-buttons">
	<button className="vote">🗑️</button>
	<button className="vote">✍️</button>
	<button className="vote">👍</button>
	<button className="vote">👎</button>
	<span className="score">5</span>
</div>
</div>

<div className="vote">
<textarea className="code" rows="4" value="let y = 8;" />
<div className="vote-buttons">
	<button className="vote">✔️</button>
	<button className="vote">❌</button>
</div>
</div>


<div className="vote">
<code>
// Get a button
	let btn = document.querySelector('&amp;my-button')
</code>
<div className="vote-buttons">
	<button className="vote">🗑️</button>
	<button className="vote">✍️</button>
	<button className="vote">👍</button>
	<button className="vote">👎</button>
	<span className="score">25</span>
</div>
</div>*/
