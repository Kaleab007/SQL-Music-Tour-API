const stages = require('express').Router()
const db = require('../models')
const { Op } = require('sequelize')
const { stage } = db
stages.get('/', async (req,res) => {
    try {
        const foundStages = await Stage.findAll({
            where: {
                stage_name: {[Op.like]: `%${req.query.stage_name? req.query.stage_name : ''}%`}
            }
        }) 
        res.status(200).json(foundStages)
    } catch(err){
        res.status(500).json(err)
    }
})
stages.get('/:id', async(req, res) =>{
    try {
        const foundStages = await Stage.findOne ({
            where: { stage_id: req.params.id}
        }) 
    res.status(200).json(foundStage)
    } catch (err) {
        res.status(500).json(err)
       
    } 
})
stages.post('/', async (req, res) => {
    try {
        const newStage = await Stage.create(req.body)
        res.status(200).json ({
            message: 'Successfully inserted a new stage ',
            data: newStage
})   
 } catch(err){
    res.status(500).json(err)
 }
})
stages.put('/:id', async (req, res) =>{
    try {
        const updatedStages = await Stage.update(req,body, {
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json ({
            message:`Successfully updated ${updatedStages} stage(s)`
        })
    } catch(err){
        res.status(500).json(err)
    }
})
stages.delete('/:id',async (req,res) => {
    try {
        const deletedStages = await Stage.destroy({
            where: {
                stage_id: req.params.id
            }
        })
    res.status(200).json({
        message:`Successfully deleted ${deletedStages} stage(s)`
    })
} catch(err){
    res.status(500).json(err)
}
})
module.exports = stages