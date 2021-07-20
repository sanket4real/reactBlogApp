import React from "react";
import { Link } from "react-router-dom";
import "./topBar.css";

export default function TopBar() {
	const user = false;
	return (
		<div className="topBar">
			<div className="topBarLeft">
				<i className="topBarIcons fab fa-twitter-square"></i>
				<i className="topBarIcons fab fa-facebook-square"></i>
				<i className="topBarIcons fab fa-instagram-square"></i>
				<i className="topBarIcons fab fa-github-square"></i>
			</div>
			<div className="topBarCenter ">
				<ul className="topBarList">
					<li className="topBarListItem">
						<Link className="link" to="/">
							HOME
						</Link>
					</li>
					<li className="topBarListItem">
						<Link className="link" to="/about">
							ABOUT
						</Link>
					</li>
					<li className="topBarListItem">
						<Link className="link" to="/contact">
							CONTACT
						</Link>
					</li>
					<li className="topBarListItem">
						<Link className="link" to="/write">
							WRITE
						</Link>
					</li>
					{user && <li className="topBarListItem">LOGOUT</li>}
				</ul>
			</div>
			<div className="topBarRight">
				{user ? (
					<Link className="link" to="/settings">
						<img
							className="topBarImg"
							src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
							alt=""
						/>
					</Link>
				) : (
					<ul className="topBarList">
						<li className="topBarListItem">
							<Link className="link" to="/login">
								LOGIN
							</Link>
						</li>
						<li className="topBarListItem">
							<Link className="link" to="/register">
								REGISTER
							</Link>
						</li>
					</ul>
				)}
				<i className="topBarSearchIcon fas fa-search"></i>
			</div>
		</div>
	);
}
