import {Route, Routes} from "react-router-dom";


import {Post} from "./components";
import {TodosPage} from "./pages/";
import {CommentsPage} from "./pages";
import {AlbumPage} from "./pages";

import MainLayout from "./layout/MainLayout/MainLayout";

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'todos'} element={<TodosPage/>}/>
                        <Route path={'comments'} element={<CommentsPage/>}>
                            <Route path={':postId'} element={<Post/>}/>
                         </Route>
                            <Route path={'albums'} element={<AlbumPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App