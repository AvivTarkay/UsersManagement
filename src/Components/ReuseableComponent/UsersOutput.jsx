import React, { useContext, useState } from "react";
import Users from "../users/users";
import Login from "../ReuseableComponent/Login/Login";
import { usersContext } from "./usersContext";
import SingleUser from "./singleUser/SingleUser";
import NavigationBar from "../NavBar/NavigationBar";
import FormSignUp from "../Form/FormSignUp";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import "./usersOutput.css";
import Footer from "../footer/footer";

export default function UsersOutput() {
	const { haveAccount, wantLogout, currentUser } = useContext(usersContext);
	return (
		<React.Fragment>
			<NavigationBar />

			<Router>
				<Switch>
					<Route exact path="/" component={FormSignUp} />
					<Route path="/Users" component={Users} />
					<Route path="/Login" component={Login} />
				</Switch>
				<Switch>
					{currentUser ? (
						<Route exact path="/User/:_id" component={SingleUser} />
					) : (
						<Redirect from="/User/:_id" to="/Users" />
					)}
				</Switch>
				<Switch>{haveAccount && <Redirect to="/Login" />}</Switch>
				<Switch>{wantLogout && <Redirect to="/Login" />}</Switch>
			</Router>
			<Footer />
		</React.Fragment>
	);
}
