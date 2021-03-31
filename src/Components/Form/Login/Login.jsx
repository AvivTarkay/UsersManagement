import React, { useContext, useState } from "react";
import { usersContext } from "../../ReuseableComponent/usersContext";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
	const {
		setWantLogout,
		errMsg,
		setErrMsg,
		setAvatarName,
		setValidUsers,
		setBtnDisable,
		setUserEmail,
	} = useContext(usersContext);
	const [user, setUser] = useState("");
	const [pass, setPass] = useState("");
	const history = useHistory();

	const validateUserAndSignIn = e => {
		e.preventDefault();
		const someUser = JSON.parse(localStorage.getItem(user));
		if (
			someUser !== null &&
			user === someUser.userName &&
			pass === someUser.password
		) {
			setAvatarName(user.toUpperCase());
			setValidUsers(prevState => !prevState);
			setBtnDisable(false);
			setWantLogout(false);
			setUserEmail(someUser.email);
			history.push("/Users");
			setErrMsg(false);
		} else {
			setErrMsg(true);
		}
	};

	const getUserNameInfo = e => {
		setUser(e.target.value);
	};
	const getUserPassInfo = e => {
		setPass(e.target.value);
	};
	return (
		<section className="login">
			<div className="loginContainer">
				<form onSubmit={validateUserAndSignIn}>
					<label htmlFor="">userName</label>
					<input type="text" onChange={getUserNameInfo} autoFocus required />
					{errMsg && (
						<p className="error">
							something went wrong check userName or password
						</p>
					)}
					<label>Password</label>
					<input
						type="password"
						onChange={getUserPassInfo}
						autoFocus
						autoFocus
						required
					/>
					{errMsg && (
						<p className="error">
							something went wrong check userName or password
						</p>
					)}
					<div className="btnContainer">
						<button type="submit">Sign in</button>
						<p>
							Don't Have an account ?
							<Link to="/">
								<span>Sign in</span>
							</Link>
						</p>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Login;
