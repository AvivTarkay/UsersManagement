import React, { useContext } from "react";
import { usersContext } from "../ReuseableComponent/usersContext";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import FormSignUp from "./SignUp/FormSignUp";
import Login from "./Login/Login";

function Form() {
	const { wantLogout, haveAccount } = useContext(usersContext);
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={FormSignUp} />
				<Route path="/Login" component={Login} />
			</Switch>
			<Switch>{haveAccount && <Redirect to="/Login" />}</Switch>
			<Switch>{wantLogout && <Redirect to="/Login" />}</Switch>
		</Router>
	);
}

export default Form;
