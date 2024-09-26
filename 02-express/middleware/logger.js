const logger = (req, res, next) => {
    const methode = req.method
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(methode, url, time);
    next(a)
}

module.exports = logger