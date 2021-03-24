import "./App.css";
import React from "react";
// import fire from "./fire";
import { UsersContext } from "./Components/ReuseableComponent/usersContext";
import UsersOutput from "./Components/ReuseableComponent/UsersOutput";

export default function App() {
	return (
		<div className="App">
			<UsersContext>
				<UsersOutput />
			</UsersContext>
		</div>
	);
}
