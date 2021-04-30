import React, { useContext, useState } from "react";
import { usersContext } from "../../ReuseableComponent/usersContext";
import { Link, useHistory } from "react-router-dom";
import Button from "../../Button/Button";
import { makeStyles } from "@material-ui/core/styles";
import TogglePassword from "../../ReuseableComponent/togglePassword/TogglePassword";
import {
	faLinkedin,
	faGoogle,
	faTwitter,
	faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Person, Lock } from "@material-ui/icons";

const Login = ({ setHomeOrForm }) => {
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
			setHomeOrForm(prevState => !prevState);
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
		<form onSubmit={validateUserAndSignIn} className="sign-in-form">
			<h2 className="title">Sign in</h2>
			<div className="input-field">
				<i>
					<Person className="icon" />
				</i>
				<input
					type="text"
					onChange={getUserNameInfo}
					autoFocus
					required
					placeholder="Username"
				/>
				{errMsg && (
					<p className="error">login info are incorrect, please try again.</p>
				)}
			</div>
			<div className="input-field">
				<i>
					<Lock className="icon" />
				</i>
				<input
					type="password"
					onChange={getUserPassInfo}
					autoFocus
					required
					placeholder="Password"
				/>
				{errMsg && (
					<p className="error">login info are incorrect, please try again.</p>
				)}
			</div>
			<input type="submit" value="Login" className="btn solid" />
			<p className="social-text">Or Sign in with social platforms</p>
			<div className="social-media">
				<a href="#" className="social-icon">
					<FontAwesomeIcon icon={faFacebook} className="icon gh" />
				</a>
				<a href="#" className="social-icon">
					<FontAwesomeIcon icon={faTwitter} className="icon gh" />
				</a>
				<a href="#" class="social-icon">
					<FontAwesomeIcon icon={faGoogle} className="icon gh" />
				</a>
				<a href="#" className="social-icon">
					<FontAwesomeIcon icon={faLinkedin} className="icon gh" />
				</a>
			</div>
		</form>
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

// <section className="login">
// 	<div className="loginContainer">
// 		<form onSubmit={validateUserAndSignIn}>
// 			<label htmlFor="">userName</label>
// 			<input
// 				type="text"
// 				onChange={getUserNameInfo}
// 				autoFocus
// 				required
// 				className={styleCss.formInput}
// 			/>
// 			{errMsg && (
// 				<p className="error">login info are incorrect, please try again.</p>
// 			)}
// 			<label>Password</label>
// 			<input
// 				type={selected ? "text" : "password"}
// 				onChange={getUserPassInfo}
// 				autoFocus
// 				autoFocus
// 				required
// 				className={styleCss.formInput}
// 			/>
// 			{errMsg && (
// 				<p className="error">login info are incorrect, please try again.</p>
// 			)}
// 			<TogglePassword />
// 			<div className="btnContainer">
// 				<Button type="submit" />
// 				<p>
// 					Don't Have an account ?
// 					<Link to="/">
// 						<span>Sign in</span>
// 					</Link>
// 				</p>
// 			</div>
// 		</form>
// 	</div>
// </section>
