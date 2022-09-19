let _url = 'https://jsonplaceholder.typicode.com/users'

const getUser = () => {
    return fetch(_url).then(value => value.json())
}

export {getUser}