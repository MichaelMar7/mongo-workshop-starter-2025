import "dotenv/config"
import mongoose from "mongoose";

import { initialContacts } from "./init-contacts.js";
import {Contact} from "../data/contacts-schema.js";

// Connect to the database
await mongoose.connect(process.env.DB_URL);
console.log("Connected to database!");

// Clear database
await Contact.deleteMany({});

const contacts = initialContacts.map((contact) => new Contact(contact));
const result = await Contact.insertMany(contacts);
console.log(`Inserted ${result.length} contacts into the database!`);

// Disconnect when complete
await mongoose.disconnect();
console.log("Disconnected from database!");