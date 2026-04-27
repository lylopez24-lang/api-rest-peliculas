const validarApiKey = (req, res, next) => {
    const apiKey = req.headers['x-api-key']

    if (apiKey !== '12345') {
        return res.status(401).json({
            mensaje: 'API Key invalida'
        })
    }

    next()
}

export default validarApiKey