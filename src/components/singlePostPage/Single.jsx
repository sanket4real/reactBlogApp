import Sidebar from "../sidebar/Sidebar";
import SinglePostComp from "../singlePostComponent/SinglePostComp";
import "./single.css";

export default function Single() {
	return (
		<div className="singlePost">
			<SinglePostComp />
			<Sidebar />
		</div>
	);
}
