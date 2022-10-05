import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {UsersPage} from "./pages";
import {PostsPage} from "./pages";
import {HomePage} from "./pages";
import {CommentsPage} from "./pages";

function App() {
    return (
        <Routes>
        <Route path={'/'} element={<MainLayout />}>
            <Route index element={<Navigate to={'home'}/>}/>
            <Route path={'home'} element={<HomePage/>}/>
            <Route path={'/users'} element={<UsersPage/>}/>
            <Route path={'/posts'} element={<PostsPage/>}/>
            <Route path={'/comments'} element={<CommentsPage/>}/>

        </Route>
        </Routes>
    );
}

export default App;
