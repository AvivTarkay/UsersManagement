import React, { useContext } from "react";
import { usersContext } from "../../ReuseableComponent/usersContext";
import { Link } from "react-router-dom";
import "./userCard.css";

const UserCard = ({ usersData }) => {
	const { loadCurrentItem, setCurrentUser } = useContext(usersContext);
	const {
		_id,
		isActive,
		picture,
		age,
		name,
		company,
		email,
		phone,
		address,
	} = usersData;
	const { first, last } = name;
	const style = {
		backgroundColor: isActive ? "green" : "red",
	};
	return (
		<React.Fragment>
			<article class="card">
				<header class="card-header">
					<Link id="user" to={`/User/:${_id}`}>
						<h2
							onClick={() => {
								loadCurrentItem(usersData);
								setCurrentUser(prevState => !prevState);
							}}
						>
							{`${first} ${last}`}
						</h2>
					</Link>
				</header>
				<div class="author-name">
					<span class="author-name-prefix">Company: </span>
					{company}
				</div>
				<div class="card-author">
					<a class="author-avatar" href="#">
						<img src={process.env.PUBLIC_URL + "/userAvatar.png"} />
					</a>
					<svg class="half-circle" viewBox="0 0 106 57">
						<path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
					</svg>
				</div>
				<div class="tags">
					<a href="#" style={style}>
						{isActive ? "Active" : "Loged-Out"}
					</a>
					<a href="#">hey</a>
					<a href="#">web-dev</a>
				</div>
			</article>
		</React.Fragment>
	);
};

export default UserCard;
