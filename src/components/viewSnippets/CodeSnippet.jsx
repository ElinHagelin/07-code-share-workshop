const CodeSnippet = ({ snippet }) => (
	<div  className="vote">
		<code> {snippet.content} </code>
		<div className="vote-buttons">
			<button className="vote">🗑️</button>
			<button className="vote">✍️</button>
			<button className="vote">👍</button>
			<button className="vote">👎</button>
			<span className="score"> {snippet.score} </span>
		</div>
	</div>
)

export default CodeSnippet
