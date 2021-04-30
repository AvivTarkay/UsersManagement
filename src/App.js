import React, { useState } from "react";
// import fire from "./fire";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Form from "./Components/Form/Form";
import "./App.scss";
import UsersOutput from "./Components/ReuseableComponent/UsersOutput";
import { UsersContext } from "./Components/ReuseableComponent/usersContext";

export default function App() {
	const [homeOrForm, setHomeOrForm] = useState(false);
	return (
		<div className="App">
			<UsersContext>
				<Router>
					<Switch>
						<Route exact path="/">
							<Form setHomeOrForm={setHomeOrForm} />
						</Route>
						<Route exact path="/Home">
							<UsersOutput setHomeOrForm={setHomeOrForm} />
						</Route>
					</Switch>
					<Switch>
						{homeOrForm ? <Redirect to="/Home" /> : <Redirect to="/" />}
					</Switch>
				</Router>
			</UsersContext>
		</div>
	);
}
