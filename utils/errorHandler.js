function errorHanlder(error) {
    
    let privateErrorFormat = { 
        "message": error.message,
        "locations": error.locations,
        "path": error.path,
        stack: error.stack ? error.stack.split('\n') : []
    }

    let publicErrorFormat = {
        "message": error.message,
        locations: (!error.path) ? error.locations : null
    }

    console.error(new Date(Date.now()), privateErrorFormat)

    return publicErrorFormat
}

module.exports = errorHanlder