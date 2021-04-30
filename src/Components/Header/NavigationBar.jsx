import React, { useContext } from "react";
import { usersContext } from "../ReuseableComponent/usersContext";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import TemporaryDrawer from "./SideBar/Drawer";

const NavigationBar = ({ setHomeOrForm }) => {
	const { AvatarName, userEmail, validUsers } = useContext(usersContext);
	const classes = useStyles();

	return (
		<section className={classes.rgb}>
			<nav className={classes.root}>
				<TemporaryDrawer setHomeOrForm={setHomeOrForm} />
				<div className={classes.logos}>
					<a href="">
						<img
							className={classes.image}
							src={process.env.PUBLIC_URL + "/codeIn.jpeg"}
							alt="#"
						/>
					</a>
					<a>
						<img
							className={classes.image}
							src={process.env.PUBLIC_URL + "/tecCareer.jpeg"}
							alt="#"
						/>
					</a>
					<a href="https://www.younglod.com/" target="_blank">
						<img
							className={classes.image}
							src={process.env.PUBLIC_URL + "/theStation.jpeg"}
							alt="#"
						/>
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
		justifyContent: "space-between",
	},
	logos: {
		width: "50%",
		display: "flex",
		justifyContent: "space-around",
	},
	rgb: {
		background: "#097e78",
	},
	userDefColor: {
		background: "none",
	},
	image: {
		width: "190px",
		height: "90px",
	},
}));

export default NavigationBar;
