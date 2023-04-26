import { Vote, deleteSnippet } from "../../utils/ajax";

const CodeSnippet = ({ snippet }) => {


	return (
		<div className="vote">
			<code> {snippet.content} </code>
			<div className="vote-buttons">
				<button className="vote" onClick={() => deleteSnippet(snippet)}>🗑️</button>
				<button className="vote">✍️</button>
				<button className="vote" onClick={() => <Vote snippet={snippet} type={'upvote'} />} >👍</button>
				<button className="vote" onClick={() => <Vote snippet={snippet} type={'downvote'} />}>👎</button>
				<span className="score"> {snippet.score} </span>
			</div>
		</div>
	)
}


export default CodeSnippet
