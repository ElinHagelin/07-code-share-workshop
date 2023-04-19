import { useState } from 'react'
import { uploadSnippet } from '../../utils/ajax.js'

const UploadForm = () => {
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')

	const titleIsValid = title.length > 0
	const contentIsValid = content.length > 0
	const formIsValid = titleIsValid && contentIsValid
	// TODO: gör bättre validering, på samma sätt som vi gjorde på en tidigare lektion

	const handleSubmit = () => {
		uploadSnippet(title, content)
		// TODO: vänta på att request ska bli färdigt, och hämta 'latest' igen
	}

	return (
		<div className="component">
			<section className="framed">
				<span className="intro">
					Upload a new code snippet to the cloud!
				</span>
			</section>
			<section className="form">
				<label htmlFor="i1"> Title </label>
				<input id="i1" type="text"
					value={title}
					onChange={event => setTitle(event.target.value)}
					/>

				<label htmlFor="i2"> Content </label>
				<textarea id="i2" rows="8"
					value={content}
					onChange={event => setContent(event.target.value)}
					/>

				<button type="submit"
					disabled={!formIsValid}
					onClick={handleSubmit}
					> Upload </button>
			</section>
		</div>
	)
}

export default UploadForm
