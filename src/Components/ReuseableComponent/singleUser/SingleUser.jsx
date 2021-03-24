import React, { useContext, useEffect } from "react";
import { usersContext } from "../usersContext";
import { Link } from "react-router-dom";
import "./singleUser.css";

const SingleUser = () => {
	const { userInfo, setCurrentUser } = useContext(usersContext);

	const { age, name, company, email, phone, address } = userInfo;

	const { first, last } = name;

	return (
		<React.Fragment>
			<article className="singleCard">
				<header className="card-user">
					<h2 id="userName">{`${first} ${last}`}</h2>
				</header>
				<div className="card-user">
					<a className="user-avatar" href="#">
						<img src={process.env.PUBLIC_URL + "/userAvatar.png"} />
					</a>
					<svg className="half-circle-avatar" viewBox="0 0 106 57">
						<path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
					</svg>
				</div>
				<div className="author-info">
					<span class="span-name-prefix">Age: </span>
					{age}
					<span class="span-name-prefix">Address: </span>
					{address}
					<span class="span-name-prefix">Email: </span>
					{email}
					<span class="span-name-prefix">Company: </span>
					{company}
					<span class="span-name-prefix">Phone: </span>
					{phone}
					<div className="card-user">
						<Link to="/Users">
							<h2
								id="leaveBack"
								onClick={() => {
									setCurrentUser(prevState => !prevState);
								}}
							>
								Leave Profile
							</h2>
						</Link>
					</div>
				</div>
			</article>
		</React.Fragment>
	);
};
export default SingleUser;
