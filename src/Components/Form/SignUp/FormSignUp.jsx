import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { usersContext } from "../../ReuseableComponent/usersContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./formSignUp.css";
import Button from "../../Button/Button";
import TogglePassword from "../../ReuseableComponent/togglePassword/TogglePassword";
import {
	faLinkedin,
	faGoogle,
	faTwitter,
	faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { Person, Email, Lock } from "@material-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const schema = yup.object().shape({
	userName: yup.string().required(),
	email: yup.string().email().required(),
	password: yup.string().min(4).max(15).required(),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref("password"), null])
		.required(),
});

const FormSignUp = ({ signInHandler }) => {
	const {
		setHaveAccount,
		addUsersToLocalStorage,
		errMsg,
		setErrMsg,
		selected,
		setGoToSignUp,
	} = useContext(usersContext);
	const [errMsgPass, setErrMsgPass] = useState(false);

	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	let allUsers = [];
	for (let i = 0; i < localStorage.length; i++) {
		allUsers.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
	}

	const formSubmitted = data => {
		const checkPass = allUsers.find(item => {
			return item.password === `${data.password}`;
		});
		const checkName = allUsers.find(item => {
			return item.userName === `${data.userName}`;
		});

		if (
			checkPass?.password === data.password ||
			checkName?.userName === data.userName
		) {
			checkPass?.password && setErrMsgPass(true);
			checkName?.userName && setErrMsg(true);
		} else {
			addUsersToLocalStorage(data);
			setErrMsg(false);
			signInHandler();
		}
	};

	const styleCss = useStyle();
	return (
		<form
			onSubmit={handleSubmit(formSubmitted)}
			required
			className="sign-up-form"
		>
			<h2 className="title">Sign up</h2>

			<div className="input-field">
				<i>
					<Person className="icon" />
				</i>
				<input
					type="text"
					autoFocus
					name="userName"
					ref={register}
					placeholder="Username"
				/>
				<p className="error"> {errors.userName?.message} </p>
				{errMsg && <p className="error">User name already in use</p>}
			</div>
			<div className="input-field">
				<i>
					<Email className="icon" />
				</i>
				<input
					type="email"
					autoFocus
					name="email"
					ref={register}
					placeholder="Email"
				/>
				<p className="error"> {errors.email?.message} </p>
			</div>
			<div className="input-field">
				<i>
					<Lock className="icon" />
				</i>
				<input
					type="password"
					autoFocus
					name="password"
					ref={register}
					placeholder="Password"
				/>
				<p className="error"> {errors.password?.message} </p>
				{errMsgPass && <p className="error">Password already in use</p>}
			</div>
			<div className="input-field">
				<i>
					<Lock className="icon" />
				</i>
				<input
					type="password"
					autoFocus
					name="confirmPassword"
					ref={register}
					placeholder="Confirm Password"
				/>
				<p className="error">
					{errors.confirmPassword && "Passwords Should Match!"}
				</p>
			</div>
			<input type="submit" class="btn" value="Sign up" />
			<p className="social-text">Or Sign up with social platforms</p>
			<div className="social-media">
				<a href="#" className="social-icon">
					<FontAwesomeIcon icon={faLinkedin} className="icon gh" />
				</a>
				<a href="#" className="social-icon">
					<FontAwesomeIcon icon={faGoogle} className="icon gh" />
				</a>
				<a href="#" className="social-icon">
					<FontAwesomeIcon icon={faTwitter} className="icon gh" />
				</a>
				<a href="#" className="social-icon">
					<FontAwesomeIcon icon={faFacebook} className="icon gh" />
				</a>
			</div>
		</form>
	);
};

const useStyle = makeStyles({
	root: {
		display: "flex",
		backgroundColor: "lightGrey",
		justifyContent: "space-around",
		alignItems: "center",
		height: "80vh",
	},
	form: {
		height: "60vh",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
	formWrap: {
		display: "flex",
		justifyContent: "flex-end",
		width: "400px",
	},
	formLabel: {
		position: "relative",
		top: "5px",
		left: "-25%",
		fontWeight: "24px",
		fontSize: "18px",
		color: "#000",
	},
	formInput: {
		width: "50%",
		height: "40px",
		borderRadius: "15px",
		border: "none",
		outline: "none",
	},
	formButton: {
		width: "50%",
		height: "40px",
		alignSelf: "center",
	},
	error: {
		color: "red",
	},
});

export default FormSignUp;

// <section className="login">
// 	<div className="loginContainer">
// 		<form onSubmit={handleSubmit(formSubmitted)} required>
// 			<label htmlFor="userName">User Name:</label>
// 			<input
// 				type="text"
// 				autoFocus
// 				name="userName"
// 				ref={register}
// 				className={styleCss.formInput}
// 			/>
// 			<p className="error"> {errors.userName?.message} </p>
// 			{errMsg && <p className="error">User name already in use</p>}
// 			<label htmlFor="email">Email:</label>
// 			<input
// 				type="text"
// 				autoFocus
// 				name="email"
// 				ref={register}
// 				className={styleCss.formInput}
// 			/>
// 			<p className="error"> {errors.email?.message} </p>
// 			<label htmlFor="password">Password:</label>
// 			<input
// 				type={selected ? "text" : "password"}
// 				autoFocus
// 				name="password"
// 				ref={register}
// 				className={styleCss.formInput}
// 			/>
// 			<p className="error"> {errors.password?.message} </p>
// 			{errMsgPass && <p className="error">Password already in use</p>}
// 			<label htmlFor="confirmPassword">Confirm Password:</label>
// 			<input
// 				type={selected ? "text" : "password"}
// 				autoFocus
// 				name="confirmPassword"
// 				ref={register}
// 				className={styleCss.formInput}
// 			/>
// 			<p className="error">
// 				{errors.confirmPassword && "Passwords Should Match!"}{" "}
// 			</p>
// 			<TogglePassword />
// 			<div className="btnContainer">
// 				{
// 					<React.Fragment>
// 						<Button type="submit" />
// 						<p>
// 							Have an account ?
// 							<Link to="/Login">
// 								<span>Sign in</span>
// 							</Link>
// 						</p>
// 					</React.Fragment>
// 				}
// 			</div>
// 		</form>
// 	</div>
// </section>
