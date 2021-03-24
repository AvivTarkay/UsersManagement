import React, { useState, createContext, useEffect } from "react";

// import fire from "../../fire";
const usersApi = "https://next.json-generator.com/api/json/get/E1iKSS0bq";

export const usersContext = createContext();

export const UsersContext = ({ children }) => {
	const [haveAccount, setHaveAccount] = useState(false);
	const [validUsers, setValidUsers] = useState(false);
	const [btnDisable, setBtnDisable] = useState("");
	const [currentUser, setCurrentUser] = useState(false);
	const [wantLogout, setWantLogout] = useState(false);
	const [loggedIn, setLoggedIn] = useState(false);
	const [errMsg, setErrMsg] = useState(false);
	const [AvatarName, setAvatarName] = useState("");
	const [getUsers, setGetUser] = useState([]);
	const [userInfo, setUserInfo] = useState([]);
	const [userEmail, setUserEmail] = useState("");

	const FetchUsers = async () => {
		try {
			const usersResponse = await fetch(usersApi);
			const usersData = await usersResponse.json();
			setGetUser(usersData);
			console.log(usersData);
		} catch (err) {
			throw err;
		} finally {
		}
	};

	const loadCurrentItem = data => {
		setUserInfo(data);
	};

	useEffect(() => {
		FetchUsers();
	}, []);

	const addUsersToLocalStorage = data => {
		localStorage.setItem(data.userName, JSON.stringify(data));
	};

	return (
		<usersContext.Provider
			value={{
				getUsers,
				setGetUser,
				currentUser,
				setCurrentUser,
				userInfo,
				setUserInfo,
				loadCurrentItem,
				loggedIn,
				setLoggedIn,
				haveAccount,
				setHaveAccount,
				validUsers,
				setValidUsers,
				setWantLogout,
				wantLogout,
				addUsersToLocalStorage,
				errMsg,
				setErrMsg,
				AvatarName,
				setAvatarName,
				btnDisable,
				setBtnDisable,
				userEmail,
				setUserEmail,
			}}
		>
			{children}
		</usersContext.Provider>
	);
};
