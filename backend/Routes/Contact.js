
const router = require("express").Router();


router.route('/', (req,res) =>{
    res.send('Hello')
})



module.exports = router;