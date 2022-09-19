const _urlSpace = 'https://api.spacexdata.com/v3/launches/'

const getLaunches = () => {
    return fetch(_urlSpace).then(value => value.json())
}

export {getLaunches}