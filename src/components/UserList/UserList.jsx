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
  }, []);

  useEffect(() => {
    if (userList.length) {
      const results = userList.filter((user) =>
        user.name.toLowerCase().includes(props.searchTerm)
      );
      setSearchResults(results);
    }
  }, [userList, props]);

  const data = searchResults;

  return (
    <ol className="list" data-testid="list" id="list">
      {data.length ? (
        data.map((user, index) => (
          <li key={index}>
            <span>{user.name}</span> @{user.username}
          </li>
        ))
      ) : (
        <li>{"Loading..."}</li>
      )}
    </ol>
  );
}

export default UserList;
