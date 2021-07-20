import "./register.css";
import { Link } from "react-router-dom";

export default function Register() {
	return (
		<div className="register">
			<span className="registerTitle">Register</span>
			<form className="registerForm">
				<label htmlFor="">Email</label>
				<input
					className="registerInput"
					type="text"
					placeholder="Enter your email..."
				/>
				<label htmlFor="">Username</label>
				<input
					className="registerInput"
					type="text"
					placeholder="Enter your useername..."
				/>
				<label htmlFor="">Password</label>
				<input
					className="registerInput"
					type="password"
					placeholder="Enter your Password..."
				/>
				<button className="registerFormButton">Register</button>
			</form>
			<button className="loginButton">
				<Link className="link" to="/login">
					Login
				</Link>
			</button>
		</div>
	);
}
