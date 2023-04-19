// import { useState, useEffect } from 'react'
// import { getLatestSnippets } from '../../utils/ajax'
import './ViewSnippets.css'

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



const ViewSnippets = ({ snippets }) => {

	return (
		<div className="component">

			<section className="framed">
				<span className="intro">
					The latest snippets from coders like you!
				</span>
			</section>

			<section>
				{snippets === null
					? <p> Please wait, retrieving data... </p>
					: snippets.map(snippet => (
					<div key={snippet.id} className="vote">
						<code> {snippet.content} </code>
						<div className="vote-buttons">
							<button className="vote">🗑️</button>
							<button className="vote">✍️</button>
							<button className="vote">👍</button>
							<button className="vote">👎</button>
							<span className="score"> {snippet.score} </span>
						</div>
					</div>
				))}
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
