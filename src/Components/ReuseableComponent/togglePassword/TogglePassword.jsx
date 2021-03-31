import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { usersContext } from "../../ReuseableComponent/usersContext";

function TogglePassword() {
	const { selected, setSelected } = useContext(usersContext);
	const classes = useStyles();

	return (
		<div>
			<input
				type="radio"
				checked={selected}
				value="check"
				className={classes.showPass}
				onClick={() => {
					setSelected(prev => !prev);
				}}
			/>
			<span className={classes.spanMsg}> Show Password</span>
		</div>
	);
}
const useStyles = makeStyles({
	showPass: {
		position: "relative",
		right: "47%",
		top: "18px",
	},
	spanMsg: {
		marginLeft: "25px",
	},
});
export default TogglePassword;
