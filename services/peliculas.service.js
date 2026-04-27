import Pelicula from '../models/Pelicula.js'

export const obtenerPeliculas = () => Pelicula.findAll()

export const obtenerPelicula = (id) => Pelicula.findByPk(id)

export const crearPelicula = (data) => Pelicula.create(data)

export const actualizarPelicula = async (id, data) => {
    const pelicula = await Pelicula.findByPk(id)

    if (!pelicula) return null

    await pelicula.update(data)

    return pelicula
}

export const eliminarPelicula = async (id) => {
    const pelicula = await Pelicula.findByPk(id)

    if (!pelicula) return null

    await pelicula.destroy()

    return true
}