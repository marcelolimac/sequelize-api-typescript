import { Sequelize } from 'sequelize-typescript';

import { User } from '../models/User'

const dbConfig = require('../config/database')

const connection = new Sequelize(dbConfig)

User.init(connection)

// Cliente.init(connection)

// Produto.associate(connection.models)

module.exports = connection