const erroHandllerMiddleware = (err, req, res, next) => {
    return res.status(500).json({ msg: "Something went wrong, please try again later!"})
}

module.exports = erroHandllerMiddleware
