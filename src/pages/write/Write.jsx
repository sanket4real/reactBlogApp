import "./write.css";

export default function Write() {
	return (
		<div className="write">
			<img
				className="writeImg"
				src="https://images.pexels.com/photos/4930548/pexels-photo-4930548.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
				alt=""
			/>
			<form className="writeForm">
				<div className="writeFormGroup">
					<label htmlFor="fileInput">
						<i className="writeIcon fas fa-plus"></i>
					</label>
					<input type="file" id="fileInput" style={{ display: "none" }} />
					<input
						type="text"
						id=""
						placeholder="Title"
						className="writeInput"
						autoFocus={true}
					/>
				</div>
				<div className="writeFormGroup">
					<textarea
						placeholder="Tell your story..."
						type="text"
						className="writeInput writeText"></textarea>
				</div>
				<button className="writeSubmit">Publish</button>
			</form>
		</div>
	);
}
