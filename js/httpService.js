const httpPost = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    return response.json()
}

const httpGet = async (path = '', token = '') => {
    const response = await fetch(path, {
        method: 'GET',
        headers: {
            Authorization: token
        }
    })

    return response.json()
}