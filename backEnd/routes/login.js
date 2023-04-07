const bcrypt = require('bcrypt');
const Joi = require('Joi');
const User = require('../models/user');
const router = require('express').Router();
const getAuthToken = require('../middlewares/genAuthToken');

router.post('/',async(req,res) => {
    const schema = Joi.object({
        email:Joi.string().min(3).max(200).required(),
        password: Joi.string().min(6).max(15).required(),
    });
    const {error} = schema.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    let user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send('Invalid User');
    const isMatchBcrypt = await bcrypt.compare(req.body.password,user.password);
    if(!isMatchBcrypt){
        res.status(401).send('Invalid Email and Password');
    }
    const token = getAuthToken(user);
    res.status(201).send({dataUser : user ,token});        
})

module.exports = router;