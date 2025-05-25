import mongoose from "mongoose";

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: {type: String, required: true, unique: true},
    phoneNumber: String,
    photoUrl: String,
    funFact: String
})

export const Contact = mongoose.model("Contact", contactSchema);
