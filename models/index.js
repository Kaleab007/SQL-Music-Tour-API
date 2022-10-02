'use strict',

const fs = require('fs')
const basename = path.basename(__filename)
const env = process.env.NODE_ENV || 'development'
const Sequelize = require ('sequelize')
const config = require (__dirname+ '/../config/config.json')[env]
const db = {}
const path = require ('path')

let sequelize
if (config.use_env_variable) {
    sequelize = new Sequelize (process.env[config.use_env_variable], config)
} else {
    sequelize = new Sequelize(config,database, config.username, config.password, config)
}
fs
    .readdirSync(__dirname).filter(file => {
        return (file.indexOf('.')!==0)&& (file.slice(-3)=== '.js')
    })
    .forEach(file => {
        const model = require (path.join (__dirname,file))(sequelize, Sequelize.DataTypes)
    db[model.name]= model})
    Object.keys(db).forEach(modelName => {
        IF (db[modelName].associate) {
            db[modelName].associate(db)
        }
    })
    db.Sequelize = Sequelize,
    db.sequelize = sequelize,
    module.exports =db