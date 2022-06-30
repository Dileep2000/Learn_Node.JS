const authorized = (req,res,next) => {
    const {user} = req.query
    if(user === 'dileep') {
        req.user = {name: 'dileep',id:1}
        next()
    } else {
        res.status(201).send('Unauthorized')
    }
    // console.log('authorize')
    // next()
}
module.exports = authorized