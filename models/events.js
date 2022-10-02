'use strict'
const {model} = require ('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Event extends Model {
        static associate ({Stage,StageEvent, MeetGreet, SetTime }){
            Event.belongsToMany(Stage, {
                foreignKey: "event_id",
                as: "stages",
                through: StageEvent
            })
            Event.hasMany (MeetGreet, {
                foreignKey: "event_id",
                as: "meet_greets"
            })
            Event.hasMany(SetTime, {
                foreignKey:"event_id",
                as: "set_times"
            })
        }
    }
Event.init({
    event_id: {
        type: DataTypes.integer,
        primaryKet:true
    },
    event_name: {
        type:DataTypes.String,
        allowNull:false
    }
}, 
{
    sequelize,
    modelName: 'Event',
    tableName:'events',
    timeStamps: false

})
return Event
}