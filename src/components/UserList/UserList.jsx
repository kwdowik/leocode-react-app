import React, { useState } from "react";
import "./UserList.css";
import users from "../../Utils/userApi";

function UserList() {
  const [userList, setUserList] = useState([]);
  users().then((res) => setUserList(res));
  console.log(userList);
  return (
    <ol className="list">
      {userList.map((user) => (
        <li>
          <span>{user.name}</span> @{user.username}
        </li>
      ))}
    </ol>
  );
}

export default UserList;
