import express from 'express'
import peliculasRoutes from './routes/peliculas.routes.js'
import authRoutes from './routes/auth.routes.js'
import logger from './middlewares/logger.js'
import validarApiKey from './middlewares/validarApiKey.js'

const app = express()

app.use(express.json())
app.use(logger)

// login público
app.use('/auth', authRoutes)

// API KEY desde aquí
app.use(validarApiKey)

// rutas protegidas
app.use('/peliculas', peliculasRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`)
})
