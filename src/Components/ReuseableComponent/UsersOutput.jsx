import React, { useContext } from "react";
import Users from "../users/users";
import { usersContext } from "./usersContext";
import SingleUser from "./singleUser/SingleUser";
import NavigationBar from "../Header/NavigationBar";
import Footer from "../footer/footer";
import Form from "../Form/Form";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import "./usersOutput.css";

export default function UsersOutput() {
	const { currentUser, validUsers, wantLogout } = useContext(usersContext);
	return (
		<React.Fragment>
			<NavigationBar />
			<Form />
			<Router>
				<Switch>
					<Route path="/Users" component={Users} />
				</Switch>
				<Switch>
					{currentUser ? (
						<Route exact path="/User/:_id" component={SingleUser} />
					) : (
						<Redirect from="/User/:_id" to="/Users" />
					)}
				</Switch>
				<Switch>{validUsers && <Redirect to="/Users" />}</Switch>
				<Switch>{wantLogout && <Redirect to="/Login" />}</Switch>
			</Router>
			<Footer />
		</React.Fragment>
	);
}
