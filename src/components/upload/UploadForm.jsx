

const UploadForm = () => (
	<div className="component">
		<section className="framed">
			<span className="intro">
				Upload a new code snippet to the cloud!
			</span>
		</section>
		<section className="form">
			<label htmlFor="i1"> Title </label>
			<input id="i1" type="text" />

			<label htmlFor="i2"> Content </label>
			<textarea id="i2" rows="8" value="" />

			<button disabled> Upload </button>
		</section>
	</div>
)

export default UploadForm
