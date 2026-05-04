import express from 'express'
import peliculasRoutes from './routes/peliculas.routes.js'
import authRoutes from './routes/auth.routes.js'
import logger from './middlewares/logger.js'
import validarApiKey from './middlewares/validarApiKey.js'

const app = express()

app.use(express.json())
app.use(logger)

// 🔓 Ruta de login (sin seguridad)
app.use('/auth', authRoutes)

// 🔐 A partir de aquí se aplica API KEY
app.use(validarApiKey)

// 🎬 Rutas protegidas
app.use('/peliculas', peliculasRoutes)

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000')
})