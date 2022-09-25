import {Users} from "./components";
import {useState} from "react";
import {userService} from "./services";
import {Posts} from "./components";

function App() {
  const [posts, setPosts] = useState([]);
  const getId = (userId) => {
    userService.getPosts(userId).then(({data})=>setPosts(data))
  }
  return (
    <div className="App">
      <Posts posts={posts} />
      <Users getId={getId}/>
    </div>
  );
}

export default App;
