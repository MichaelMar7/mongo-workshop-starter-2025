import { v4 as uuid } from "uuid";
import { initialContacts } from "./initial-contacts.js";

import { Contact } from "./contacts-schema.js"

const contacts = [...initialContacts];

/**
 * Retrieves all contacts from the database.
 *
 * @returns a list of contacts
 */
export async function retrieveContacts() {
  return await Contact.find();

  // return contacts;
}

/**
 * Creates a new contact.
 *
 * @param contact the contact to create. Must have a name. optionally a phoneNumber and funFact.
 * @returns the newly created contact, including a uniquely generated _id value.
 * @throws error if the contact has no name, or a non-unique name.
 */
export async function createContact(contact) {
  const dbContact = new Contact(contact);
  await dbContact.save();
  return dbContact;

  // if (!contact?.name) throw "New contacts must have a name.";

  // const existingContact = contacts.find((c) => c.name === contact.name);
  // if (existingContact) throw `The name '${contact.name}' is already taken.`;

  // const dbContact = { _id: uuid(), ...contact };
  // contacts.push(dbContact);
  // return dbContact;
}

/**
 * Updates the contact with the given _id.
 * @param id the id to search
 * @param contact the update info
 * @returns true if a contact was updated, false otherwise.
 * @throws error if trying to update the contact's name to another name that's already taken.
 */
export async function updateContact(id, contact) {
  const dbContact = await Contact.findByIdAndUpdate(id, contact, { new: true, runValidators: true });
  return dbContact;

  // const index = contacts.findIndex((c) => c._id === id);
  // if (index < 0) return false;

  // delete contact._id; // No overwriting the id!

  // // Check for duplicate name if required
  // if (contact?.name) {
  //   const existingName = contacts.find((c) => c._id !== id && c.name === contact.name);
  //   if (existingName) throw `The name '${contact.name}' is already taken.`;
  // }

  // contacts[index] = { ...contacts[index], ...contact };

  // return contacts[index];
}

/**
 * Deletes the contact with the given id, if any.
 *
 * @param id the id to search
 */
export async function deleteContact(id) {
  const dbContact = await Contact.findByIdAndDelete(id);
  return dbContact;
  
  // const index = contacts.findIndex((c) => c._id === id);
  // if (index < 0) return;

  // contacts.splice(index, 1);
}
