const notFound = (req, res) => {
    res.status(404).send("Route does'n exist")
}

module.exports = notFound
