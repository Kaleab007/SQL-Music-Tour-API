const events = require('express').Router()
const db = require('.../model')
const { json } = require('express')
const { Event } = db
const { Op } = require('sequelize')

events.get('/', async (req, res) => {
    try {
        const foundEvents = await Event.findAll({
            order: [['data', 'ASC']],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name :''}&`}
            }
        })
        res.status(200).json(foundEvents)
    } 
    catch (err) {
        res.status(500).json(err)
    }
})
events.get('/:id',async (req,res) => {
try {
    const foundEvent = await Event.findOne({
        where: {event_id: req.params.id}
    }) 
    res.status(200).json(foundEvent)
} catch (err) {
    res.status(500).json(err)
}
})
events.post('/', async (req,res) => {
    try{
        const newEvent = await Event.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new event',
            data: newEvent

        })
    } catch (err) {
        res.status(500).json(err)
    }
})
events.put('/:id', async (req,res) => {
    try {
        const updatedEvents = await Event.updated(req.body, {
            where: {
                event_id:req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedEvents} event(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

events.delete('/:id', async (res,res)=> {
    try {
        const deleteEvents = await Event.destroy({
            where :{ 
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deleteEvents} event(s)`
        })
    } 
    catch(err) {
        res.status(500).json(err)
    }
})
module.exports = events