import React, { useContext } from "react";
import { usersContext } from "../ReuseableComponent/usersContext";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import TemporaryDrawer from "./Drawer";

const NavigationBar = () => {
	const { AvatarName, userEmail, validUsers } = useContext(usersContext);
	const classes = useStyles();

	return (
		<section className="navLinks">
			<nav>
				<TemporaryDrawer />
				<div className="logosContainer">
					<a href="">
						<img src={process.env.PUBLIC_URL + "/codeIn.jpeg"} alt="#" />
					</a>
					<a>
						<img src={process.env.PUBLIC_URL + "/tecCareer.jpeg"} alt="#" />
					</a>
					<a href="https://www.younglod.com/" target="_blank">
						<img src={process.env.PUBLIC_URL + "/theStation.jpeg"} alt="#" />
					</a>
				</div>

				<div id="Avatar" className={classes.root}>
					<span id="userEmail">{userEmail}</span>
					<Avatar
						className={validUsers ? classes.rgb : classes.userDefColor}
						alt={`${AvatarName}`}
						src="/static/images/avatar/1.jpg"
					/>
				</div>
			</nav>
		</section>
	);
};
const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		// "& > *": {
		// 	// margin: theme.spacing(1),
		// },
	},
	rgb: {
		background: "green",
	},
	userDefColor: {
		background: "none",
	},
}));

export default NavigationBar;
