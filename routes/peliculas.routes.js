import express from 'express'
import {
    obtenerPeliculas,
    obtenerPelicula,
    crearPelicula,
    actualizarPelicula,
    eliminarPelicula
} from '../services/peliculas.service.js'

const router = express.Router()

router.get('/', async (req, res) => {
    res.json(await obtenerPeliculas())
})

router.get('/:id', async (req, res) => {
    res.json(await obtenerPelicula(req.params.id))
})

router.post('/', async (req, res) => {
    res.json(await crearPelicula(req.body))
})

router.put('/:id', async (req, res) => {
    const pelicula = await actualizarPelicula(req.params.id, req.body)

    if (!pelicula) {
        return res.status(404).json({ mensaje: 'Pelicula no encontrada' })
    }

    res.json(pelicula)
})

router.delete('/:id', async (req, res) => {
    const eliminado = await eliminarPelicula(req.params.id)

    if (!eliminado) {
        return res.status(404).json({ mensaje: 'Pelicula no encontrada' })
    }

    res.json({ mensaje: 'Pelicula eliminada' })
})

export default router