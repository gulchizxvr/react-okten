import './App.css';
import Users from "./components/taskUser/users/Users";
import {Launches} from "./components/taskSpaceX";


function App() {
  return (
    <div className="App">
        <div><Users/></div>
        <div><Launches/></div>
    </div>
  );
}

export default App;
