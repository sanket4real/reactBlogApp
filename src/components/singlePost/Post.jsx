import "./post.css";

export default function Post() {
	return (
		<div className="post">
			<img
				className="postImg"
				src="https://images.pexels.com/photos/3233367/pexels-photo-3233367.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
				alt=""
			/>
			<div className="postInfo">
				<div className="postCategories">
					<span className="postCat">Video Games</span>
					<span className="postCat">Tech</span>
				</div>
				<div className="postTitle">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, ut.
				</div>
				<hr />
				<span className="postDate">1 hour ago </span>
			</div>
			<p className="postDetails">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat iusto
				sint quasi totam earum? Quia id velit aspernatur nesciunt adipisci
				reiciendis similique sapiente dolor optio eveniet quos voluptatum
				dolorem quidem eligendi blanditiis
			</p>
		</div>
	);
}
