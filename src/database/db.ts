import { Sequelize } from 'sequelize'

export const db = new Sequelize('postgres://postgres:36257@localhost:5432/postgres')
