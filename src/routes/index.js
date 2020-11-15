const Point = require('../database/models/point')

const router = require('express').Router()

router.post('/spot', async (req, res)=> {
    try {
        const { longitude, latitude,  } = req.body
        const point = await Point.create({coordinates: [latitude, longitude]})
        res.json(point)
    } catch (error) {
        console.error(err)
        res.status(400).send('Ocorreu um erro, tente novamente mais tarde')
    }
    
})
router.get('/spot', async (req, res)=> {
    
    try {
        const points = await Point.find()
        const pointsWithCoordinates = points.map(point => point.coordinates)
        res.json(pointsWithCoordinates)
    } catch (err) {
        console.error(err)
        res.status(400).send('Ocorreu um erro, tente novamente mais tarde')     
    }
    
})

module.exports = router