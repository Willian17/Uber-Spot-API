const Point = require('../database/models/point')

const router = require('express').Router()

router.post('/spot', async (req, res)=> {
    try {
        const { longitude, latitude,  } = req.body
        const point = await Point.create({coordinates: [latitude, longitude]})
        res.json(point)
    } catch (error) {
        console.error(err)
        res.status(500).send(err)     
    }
    
})
router.get('/spot', async (req, res)=> {
    const filters =  {
        'maxDistance': (req.query.distance || 1)/111.12,
        'coordinates': [
            req.query.latitude,
            req.query.longitude
        ]
    }
    
    try {
        const points = await Point.find({coordinates: {
            $near: filters.coordinates,
            $maxDistance: filters.maxDistance
        }})
        res.json(points)
    } catch (err) {
        console.error(err)
        res.status(500).send(err)     
    }
    
})

module.exports = router