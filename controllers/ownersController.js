const ownerModel = require('../models/owner.model');

const getOwner = function (req,res) {
    res.send("Retrieving Owner");
}

const createOwner = async function (req,res) {
    let existedOwner = await ownerModel.find();

    if(existedOwner.length > 0) {
        return res.status(503).send("you don't have permission to create a owner");
    }

    let {fullname,email,password,contact} = req.body;

    let createdOwner = await ownerModel.create({
    fullname: fullname,
    email: email,
    password: password,
    contact: contact,
    });

    res.status(201).send(createdOwner);

};


module.exports = {
getOwner, 
createOwner,
};