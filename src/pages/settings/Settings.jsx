import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";

export default function Settings() {
	return (
		<div className="settings">
			<div className="settingsWrapper">
				<div className="settingsTitle">
					<span className="settingsUpdateTitle">Update Your Account</span>
					<span className="settingsDeleteTitle">Delete Account</span>
				</div>
				<form className="settingsForm">
					<label>Profile Picture</label>
					<div className="settingsProfilePic">
						<img
							src="https://images.pexels.com/photos/1561020/pexels-photo-1561020.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
							alt=""
						/>
						<label htmlFor="fileInput">
							<i className="settingsPPIcon far fa-user-circle"></i>
						</label>
						<input type="file" id="fileInput" style={{ display: "none" }} />
					</div>
					<label>Username</label>
					<input type="text" placeholder="Sanket" />
					<label>Email</label>
					<input type="email" placeholder="sanket@gmail.com" />
					<label>Password</label>
					<input type="password" />
					<button className="settingsSubmit">Update</button>
				</form>
			</div>
			<Sidebar />
		</div>
	);
}
