import "./App.css";
import UserList from "./components/UserList/UserList.jsx";
import React, { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  //This function is going to be fired each time a change event is detected in the input field
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Users list</h1>
      </header>
      <input
        type="text"
        placeholder="Search by user name..."
        value={searchTerm}
        onChange={handleChange}
      />
      <UserList />
    </div>
  );
}

export default App;
