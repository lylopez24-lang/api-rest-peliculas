import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db.sqlite'
})

const Pelicula = sequelize.define('Pelicula', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: DataTypes.STRING,
    director: DataTypes.STRING,
    anio: DataTypes.INTEGER,
    genero: DataTypes.STRING
})

await sequelize.sync()

export default Pelicula