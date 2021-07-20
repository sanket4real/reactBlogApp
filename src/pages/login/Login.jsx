import { Link } from "react-router-dom";
import "./login.css";

export default function login() {
	return (
		<div className="login">
			<span className="loginTitle">Login</span>
			<form className="loginForm">
				<label htmlFor="">Email</label>
				<input
					className="loginInput"
					type="text"
					placeholder="Enter your email..."
				/>
				<label htmlFor="">Password</label>
				<input
					className="loginInput"
					type="password"
					placeholder="Enter your Password..."
				/>
				<button className="loginButton">Login</button>
				<button className="registerButton">
					<Link className="link" to="/register">
						Register
					</Link>
				</button>
			</form>
		</div>
	);
}
