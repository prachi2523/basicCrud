const crudSchema = require('../model/crudSchema')


const getUser = async (req, res) => {
    try {
        console.log("get request");
        const cruddata = await crudSchema.find();
        res.json(cruddata)
    }
    catch (err) {
        res.send("errror" + err)
    }
};

const createUser = async (req, res) => {
    console.log(req.body);
    const cruddata = new crudSchema({
        Name: req.body.Name,
        Email: req.body.Email,
        sub: req.body.sub,
    });

    try {
        const addres = await cruddata.save();
        res.json({
            status: "successfull",
            data: addres
        });

    }
    catch (err) {
        res.send({
            status: "failure",
            message: "err_occured" + err.message
        });

    }
}

const updateUser = async (req, res) => {
    console.log(req.params.id);
    try {
        const crud = await crudSchema.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        res.json(crud);
    }
    catch (err) {
        res.send("error " + err)
    }
}

module.exports = {
    getUser,
    createUser,
    updateUser
};