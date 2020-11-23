const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const ProfessorSchema = new mongoose.Schema({
    prof: { type: String, required: [true, "Professor name is required"], unique:true },
    uni: { type: String, required: [true, "University name is required"] },
    rating: { type: Number, required: [true, "Rating is required"] }
}, { timestamps: true })

ProfessorSchema.plugin(uniqueValidator, { message: 'Error, expected Professor Name to be unique.' });

module.exports = mongoose.model("Professors", ProfessorSchema);