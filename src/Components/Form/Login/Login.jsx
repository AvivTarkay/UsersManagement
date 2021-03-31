import React, { useContext, useState } from "react";
import { usersContext } from "../../ReuseableComponent/usersContext";
import { Link, useHistory } from "react-router-dom";
import Button from "../../Button/Button";
import { makeStyles } from "@material-ui/core/styles";
import TogglePassword from "../../ReuseableComponent/togglePassword/TogglePassword";

const Login = () => {
	const {
		setWantLogout,
		errMsg,
		setErrMsg,
		setAvatarName,
		setValidUsers,
		setBtnDisable,
		setUserEmail,
		selected,
	} = useContext(usersContext);

	const [user, setUser] = useState("");
	const [pass, setPass] = useState("");
	const history = useHistory();
	const styleCss = useStyle();

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
					<input
						type="text"
						onChange={getUserNameInfo}
						autoFocus
						required
						className={styleCss.formInput}
					/>
					{errMsg && (
						<p className="error">login info are incorrect, please try again.</p>
					)}
					<label>Password</label>
					<input
						type={selected ? "text" : "password"}
						onChange={getUserPassInfo}
						autoFocus
						autoFocus
						required
						className={styleCss.formInput}
					/>
					{errMsg && (
						<p className="error">login info are incorrect, please try again.</p>
					)}
					<TogglePassword />
					<div className="btnContainer">
						<Button type="submit" />
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
const useStyle = makeStyles({
	formInput: {
		width: "50%",
		height: "40px",
		borderRadius: "15px",
		border: "none",
		outline: "none",
	},
});
export default Login;
