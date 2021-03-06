import React, { useContext } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import { usersContext } from "../../ReuseableComponent/usersContext";

const useStyles = makeStyles({
	root: {
		width: 250,
		backgroundColor: "#097e78",
		boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
	},
	fullList: {
		width: "auto",
	},
});

export default function TemporaryDrawer({ setHomeOrForm }) {
	const {
		setCurrentUser,
		setWantLogout,
		setValidUsers,
		setBtnDisable,
		setErrMsg,
		setAvatarName,
		setUserEmail,
	} = useContext(usersContext);
	const classes = useStyles();
	const [state, setState] = React.useState({
		top: false,
	});
	const HandleLogOut = () => {
		setWantLogout(prevState => !prevState);
		setHomeOrForm(prevState => !prevState);
		setValidUsers(false);
		setBtnDisable(true);
		setErrMsg("");
		setAvatarName("");
		setUserEmail("");
	};

	const toggleDrawer = (anchor, open) => event => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = anchor => (
		<div
			className={clsx(classes.root, {
				[classes.fullList]: anchor === "top" || anchor === "bottom",
			})}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				<ListItem button onClick={HandleLogOut}>
					<ListItemIcon>
						<InboxIcon />
					</ListItemIcon>
					<ListItemText primary="LOGOUT" />
				</ListItem>

				<ListItem
					button
					onClick={() => {
						setCurrentUser(prevState => !prevState);
					}}
				>
					<ListItemIcon>
						<MailIcon />
					</ListItemIcon>
					<ListItemText primary="USERS" />
				</ListItem>
			</List>
		</div>
	);

	return (
		<div className={classes.btnContainer}>
			{["MENU"].map(anchor => (
				<React.Fragment key={anchor}>
					<Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
					<Drawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
					>
						{list(anchor)}
					</Drawer>
				</React.Fragment>
			))}
		</div>
	);
}
