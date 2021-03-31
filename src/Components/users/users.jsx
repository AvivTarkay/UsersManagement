import React, { useContext } from "react";
import UserCard from "./user/userCard";
import { usersContext } from "../ReuseableComponent/usersContext";

//*users api => https://next.json-generator.com/api/json/get/E1iKSS0bq
import "./usersStyle.css";

const Users = () => {
	const { getUsers } = useContext(usersContext);

	return (
		<section className="card-list">
			{getUsers.length > 0 &&
				React.Children.toArray(
					getUsers.map(user => {
						return <UserCard usersData={user} />;
					})
				)}
		</section>
	);
};
export default Users;
