import mongoose from "mongoose";

const Schema = mongoose.Schema;

/** TODO Your schema here! */
const pokemoneSpeciesSchema = new Schema({
    dexNumber: {type: Number, required: true, unique: true},
    name: {type: String, required: true},
    dexEntry: {type: String, required: true},
    types: [{type: String, required: true}],
})

const trainerSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    // gender: { type: String, enum: ["Male", "Female", "Nonbinary", "Other"] },
    team: [{ nickname: String, species: { type: Schema.Types.ObjectId, ref: "PokemonSpecies" } }]
});

export const PokemonSpecies = mongoose.model("PokemonSpecies", pokemoneSpeciesSchema);
export const Trainer = mongoose.model("Trainer", trainerSchema);
