import "./App.css";
import UserList from "./components/UserList/UserList.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Users list</h1>
      </header>
      <input type="text" placeholder="Search by user name..." />
      <UserList />
    </div>
  );
}

export default App;
