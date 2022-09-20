
function InfoUser({item:user}) {
    return (
            <div>
                <h3>{user.name} {user.username}</h3>
                <p>email : {user.email} <br/> phone : {user.phone}</p>
            </div>
    );
}

export {InfoUser}