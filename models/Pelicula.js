import { Sequelize, DataTypes } from 'sequelize'

const sequelize = process.env.DATABASE_URL
    ? new Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    })
    : new Sequelize({
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