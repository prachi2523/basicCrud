const mongoose = require('mongoose');
const crudSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    sub: {
        type: String,
        required: true
    }
})
module.exports=crudSchema;
crudSchema.set('timestamps', true)
module.exports = mongoose.model('crud', crudSchema);     