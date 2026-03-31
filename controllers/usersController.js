const userModel = require("../models/user.model");

const getUser = function (req,res) {
    res.send("Retrieving User");
}

const registerUser = async function (req,res) {

    try {
        let { fullname,email,password } = req.body;

        if (!fullname || !email || !password) {
            //  400 Bad Request status code for validation errors
            return res.status(400).json({ message: 'credentials are required' });
        }

        let alreadyRegistered = await userModel.findOne({email: email});

        console.log(alreadyRegistered);


        if(alreadyRegistered) {
            return res.status(400).send("Already Registered");
        }


        let newUser = await userModel.create({
            fullname,
            email,
            password
        });

        res.status(201).json({
            message: "Successfully created user",
            payload: newUser
        });

    } catch(err) {
        res.status(500).json({ message: err.message });
    }
   
};


module.exports = {
getUser,
registerUser,
};