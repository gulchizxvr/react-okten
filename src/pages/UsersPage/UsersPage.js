import {Users} from "../../components";
import css from "./UserPage.module.css"

const UsersPage = () => {


    return (
        <div className={css.usersPage}>
            <h2>Users</h2>
            <Users/>
        </div>
    );
};

export {UsersPage}