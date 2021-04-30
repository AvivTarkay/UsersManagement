import React, { useContext, useState } from "react";
import { usersContext } from "../ReuseableComponent/usersContext";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import FormSignUp from "./SignUp/FormSignUp";
import Login from "./Login/Login";

function Form({ setHomeOrForm }) {
	const { wantLogout, haveAccount, goToSignUp, setGoToSignUp } = useContext(
		usersContext
	);
	const [addDivName, setAddDivName] = useState("");

	const signUpHandler = () => {
		setAddDivName("sign-up-mode");
		setTimeout(() => {
			setGoToSignUp(prevState => !prevState);
		}, 1000);
	};
	const signInHandler = () => {
		setAddDivName("sign-in-mode");
		setTimeout(() => {
			setGoToSignUp(prevState => !prevState);
		}, 1000);
	};

	return (
		<div className={`container ${addDivName}`}>
			<div className="forms-container">
				<div className="signin-signup">
					<Router>
						<Switch>
							<Route exact path="/">
								<Login setHomeOrForm={setHomeOrForm} />
							</Route>
							<Route path="/SignUp">
								<FormSignUp
									signInHandler={signInHandler}
									setHomeOrForm={setHomeOrForm}
								/>
							</Route>
						</Switch>
						<Switch>
							{goToSignUp ? <Redirect to="/SignUp" /> : <Redirect to="/" />}
						</Switch>
						<Switch>{wantLogout && <Redirect to="/" />}</Switch>
					</Router>
				</div>
			</div>
			<div className="panels-container">
				<div className="panel left-panel">
					<div className="content">
						<h3>New here ?</h3>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
							ex ratione. Aliquid!
						</p>

						<button
							className="btn transparent"
							id="sign-up-btn"
							onClick={signUpHandler}
						>
							Sign up
						</button>
					</div>
					<img src="img/log.svg" className="image" alt="" />
				</div>
				<div className="panel right-panel">
					<div className="content">
						<h3>One of us ?</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
							laboriosam ad deleniti.
						</p>

						<button
							className="btn transparent"
							id="sign-in-btn"
							onClick={signInHandler}
						>
							Sign in
						</button>
					</div>
					<img src="img/register.svg" className="image" alt="" />
				</div>
			</div>
		</div>
	);
}

export default Form;
