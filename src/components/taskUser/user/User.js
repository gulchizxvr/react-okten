
function User({item:user,info}) {

    return (
        <div>
            <h2>{user.id} - {user.name}</h2>
            <button onClick={
                ()=> {
                    info(user)
                }
            }>DETAILS</button>
        </div>
    );
}

export {User};