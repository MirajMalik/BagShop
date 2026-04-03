const userModel = require("../models/user.model");
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const generateToken = require('../utils/generateToken');


const registerUser = async function (req,res) {
    const saltRounds = 10;
    try {
        let { fullname,email,password } = req.body;

        if (!fullname || !email || !password) {
            //  400 Bad Request status code for validation errors
            return res.status(400).json({ message: 'credentials are required' });
        }
 
        let alreadyRegistered = await userModel.findOne({email: email});

        if(alreadyRegistered) {
            return res.status(400).send("You already have an account, please login.");
        }
        
        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(password, saltRounds, async function (err,hash) {
                if(err) return res.send(err.message);
                else {      
                    let newUser = await userModel.create({
                        fullname,
                        email,
                        password: hash,
                    });

                   let token = generateToken(newUser);
                   res.cookie('token', token);

                   res.status(201).json({
                   message: "Successfully created user",
                   payload: newUser
                });
                    
            }

               
        });
    });



       

    } catch(err) {
        res.status(500).json({ message: err.message });
    }
   
};


const loginUser = async function (req,res) {
    
    try {
        let { email, password } = req.body;
        if(!email || !password) {
            return res.status(400).json({ message: 'credentials are required' });
        }

        let user = await userModel.findOne({ email: email });

        if(!user) {
            return res.status(401).json({ message: 'Email or Password is incorrect' });
        }

        let hashedPassword = user.password;
        
        bcrypt.compare( password, hashedPassword, function (err, result) {
            if(result) {
                let token = generateToken(user);
                res.cookie('token', token);
                res.redirect('/shop');
            } else {
                return res.status(401).json({ message: 'Email or Password is incorrect' });
            }
        })
        
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
   
};

const logoutUser = function (req,res) {
    res.cookie("token", "");
    res.render('index');
};


module.exports = {registerUser, loginUser, logoutUser};