import React, { useState, useEffect } from "react";
import "./UserList.css";
import users from "../../services/userApi";
import ListItem from "../../app/components/ListItem/ListItem";

const getUsers = async () => {
  const usersResponse = await users();
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
        data.map((user) => (
          <ListItem id={user.id} name={user.name} username={user.username} />
        ))
      ) : (
        <li>{"Loading..."}</li>
      )}
    </ol>
  );
}

export default UserList;
