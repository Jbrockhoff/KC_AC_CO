const { Schema, model } = require("mongoose");

const phoneSchema = new Schema ({
    areaCode: {
        type: Number,
        required: true
    },
    exchangeCode: {
        type: Number,
        required: true
    },
    lineNumber: {
        type: Number,
        required: true
    }
});

const contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: phoneSchema
})

const Contact = model('Contact', contactSchema)