const setToken = (token, timeToLive = TOKEN_TIME_TO_LIVE_IN_MINUTES) => {
    localStorage.setItem(TOKEN, token)
    setTokenExpirationTime(timeToLive)
}

const setTokenExpirationTime = (minutes) => {
    const expirationTimeInMilliSeconds = minutes * 60 * 1000
    localStorage.setItem(TOKEN_EXPIRES_TIME, `${expirationTimeInMilliSeconds}`)
}

const getTokenExpirationTime = () => {
    return Number(localStorage.getItem(TOKEN_EXPIRES_TIME))
}

const getToken = () => {
    return localStorage.getItem(TOKEN)
}

const checkTokenForExpiration = () => {
    return Date.now() > Number(localStorage.getItem(TOKEN_EXPIRES_TIME))
}

const removeToken = () => {
    localStorage.removeItem(TOKEN)
    localStorage.removeItem(TOKEN_EXPIRES_TIME)
}

const removeTokenWithTimeout = () => {
    const expiresTime = getTokenExpirationTime()
    setTimeout(() => {
        redirectToIndex()
    }, expiresTime)
}