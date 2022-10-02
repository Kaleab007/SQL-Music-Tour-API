'use strict'

const {model} = require('sequelize, DataTypes') => {
    class MeetGreet extends model {
        static associate ({Band,Event}) {
            MeetGreet.belongsTo(Band, {
            foreignKey: "band_id",
            as:"band"
     })
        MeetGreet.belongsTo(Event, {
            foreignKey: "event_id",
            as:"event"
        }) 
        }
            
    }
MeetGreet.init ({
    meet_greet_id:{
        type:DataTypes.integer,
        primaryKey:true,
        autoIncrement:true,
    },
    event_id: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    band_id: {
        type:DataTypes.SMALLINT,
        allowNull:false
    },
    meet_start_time: {
        type: DataTypes.DATA,
        allowNull:false
    },
    meet_end_time: {
        type:DataTypes.DATE,
        allowNull: false
    }

}, {
    sequelize,
    modelName: 'MeetGreet',
    tableName: 'meet_greets',
    timestamps: false
})
return MeetGreet
}