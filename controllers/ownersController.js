const getOwner = function (req,res) {
    res.send("Retrieving Owner");
}

const createOwner = function (req,res) {
    res.send("new owner is created");
}


module.exports = {
getOwner, 
createOwner,
};