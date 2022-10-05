import {NavLink, Outlet} from "react-router-dom";

const MainLayout = () => {

    return (
        <div>
            <h1>Howework Redux base</h1>
            <NavLink to={'/home'}>home</NavLink>
            <NavLink to={'/users'}>Show users</NavLink>
            <NavLink to={'/posts'}>Show posts</NavLink>
            <NavLink to={'/comments'}>Show comment</NavLink>
            <Outlet/>
        </div>
            );
};

export {MainLayout}