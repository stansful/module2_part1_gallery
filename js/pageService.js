const setNewPage = (value = 1) => {
    localStorage.setItem(PAGE, String(value))
}

const getCurrentPage = () => {
    const page = localStorage.getItem(PAGE)

    if (page) {
        return page
    }

    setNewPage()

    return localStorage.getItem(PAGE)
}

const validatePage = () => {
    const queryRegex = /\?page=[1-5]/

    if (location.search === '') {
        location.search = 'page=1'
    } else {

        if (location.search.match(queryRegex)) {
            const pageNumber = location.search.split('?page=').pop()
            setNewPage(pageNumber)
        } else {
            alert(PAGE_DID_NOT_EXIST)
            setNewPage()
        }

    }


}