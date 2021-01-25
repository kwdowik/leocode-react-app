import React, { useState, useEffect } from "react";
import "./UserList.css";
import users from "../../Services/userApi";
const getUsers = async () => {
  const usersResponse = await users().then((response) => response);
  return usersResponse;
};
function UserList(props) {
  const [userList, setUserList] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getUsers().then((res) => setUserList(res));
  }, [props]);

  useEffect(() => {
    //users().then((response) => setUserList(response));
    //let reResponse = getUsers();
    if (userList.length) {
      const results = userList.filter((user) =>
        user.name.toLowerCase().includes(props.searchTerm)
      );
      setSearchResults(results);
    }
  }, [userList, props]);
  const data = searchResults;
  return (
    <ol className="list">
      {data.length ? (
        data.map((user) => (
          <li>
            <span>{user.name}</span> @{user.username}
          </li>
        ))
      ) : (
        <li></li>
      )}
    </ol>
  );
}

export default UserList;
