import "./sideBar.css";

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sideBarItem">
				<span className="sideBarTitle">ABOUT ME</span>
				<img
					className="sideBarImg"
					src="https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
					alt=""
				/>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
					accusamus.
				</p>
			</div>
			<div className="sideBarItem">
				<span className="sideBarTitle">CATEGORIES</span>
				<ul className="sideBarList">
					<li className="sideBarListItem">Tech</li>
					<li className="sideBarListItem">Sports</li>
					<li className="sideBarListItem">Video Games</li>
					<li className="sideBarListItem">Movies</li>
					<li className="sideBarListItem">Fashion</li>
				</ul>
			</div>
			<div className="sideBarItem">
				<span className="sideBarTitle">FOLLOW US</span>
				<span className="sideBarSocial">
					<i className="sideBarIcons fab fa-twitter-square"></i>
					<i className="sideBarIcons fab fa-facebook-square"></i>
					<i className="sideBarIcons fab fa-instagram-square"></i>
					<i className="sideBarIcons fab fa-github-square"></i>
				</span>
			</div>
		</div>
	);
}
