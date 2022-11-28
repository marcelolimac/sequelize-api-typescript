const { Model, DataTypes } = require('sequelize')
import { Sequelize } from "sequelize-typescript"

export class User extends Model {
    static init(connection: Sequelize) {
        super.init({
            
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            
        }, {
            sequelize: connection
        })
    }

}
