const asyncWrraper = (fn) => {
    return async (req, res, next) => {
        try {
            await fun(req, res, next)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = asyncWrraper
