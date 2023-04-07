const bcrypt = require('bcrypt');
const Joi = require('Joi');
const User = require('../models/user');
const router = require('express').Router();
const gravatar = require('gravatar');
const getAuthToken = require('../middlewares/genAuthToken');

/**
 * Register the User
 */


router.post("/", async(req, res) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        email:Joi.string().min(3).max(200).required(),
        password: Joi.string().min(6).max(15).required(),
        phoneNo:Joi.number().min(6).required(),
    });
    const {error} = schema.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    let user = await User.findOne({email: req.body.email});
    if(user) return res.status(400).send('User already exists');

    user = new User({
        name : req.body.name,
        email: req.body.email,
        phoneNo: req.body.phoneNo,
        password: await bcrypt.hash(req.body.password, 10),
        avatar: gravatar.url(req.body.email, { s: '200', r: 'pg', d: 'mm' }),
        isAdmin:req.body.isAdmin
    })
    await user.save();
const token = getAuthToken(user);
res.status(201).send({dataUser : user ,token});        
})

module.exports = router;