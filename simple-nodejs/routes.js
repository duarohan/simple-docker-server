const express= require('express');

router = express.Router()

router.get('/v1/users', function (req,res,next){
    res.status(200).send({})
});

module.exports = router;