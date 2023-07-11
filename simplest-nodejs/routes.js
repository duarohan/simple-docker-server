const express = require('express');
router = express.Router()
const usersInfo = require('./users');
const models = require('./models/index');

router.get('/v1/users',function (req,res,next){
    const {users} = usersInfo
    res.status(200).send({users});
})

router.get('/db', async(req, res) => {
  try{
    await models.Modules.findAll().then(users => {
      console.log("All users:", JSON.stringify(users, null, 4));
      res.status(200).send(
        {
          users
        },
      );  
      })
  }catch(err){
    console.log(err)
    res.status(500).send('Internal Server Error');  
  }
 });
module.exports = router;