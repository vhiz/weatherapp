const router = require('express').Router()
require('dotenv/config')
const weatherData = require('./data')


router.get('/', async(req, res) => {
    const address = req.query.address
    if (!address) return res.status(400).send('you must input location')
   try {
       weatherData(address, (error, {temperature, cityName, description}={}) => {
           if (!error) {
               return res.status(200).send({
                   temperature,
                   cityName,
                   description
               })
           } else {
               return res.status(400).send(error)
           }
           
    })
   } catch (error) {
    res.status(400).send(error)
   }
    
})

module.exports = router