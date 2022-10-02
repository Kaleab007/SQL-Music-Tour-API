'use strict'

const {model} = require ('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Band extends Model {
        static associate({MeetGreet, SetTime}) {
            Band.hasMany(MeetGreet, {
                foreignKey: "band_id", as: "meet_greets"
            })
        
        Band.hasMany(SetTime, {
            foreignKey: "band_id",
            as:"set_times"
        })
    }
}
    Band.init({
        band_id: DataTypes.INTEGER,
        name: DataTypes.String,
        genre:DataTypes.Text,
        available_start_time: DataTypes.Data,
        end_time: DataTypes.Data
    },{
        sequelize,
        modelName: 'Band',
    })
    return Band
}