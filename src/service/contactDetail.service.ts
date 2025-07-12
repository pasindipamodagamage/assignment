import { Contact } from "../model/contactDetail.model";
import { contactDetailList } from "../db/db";

export const getAllContactDetails = (): Contact[] => {
    return contactDetailList;
};

export const saveContactDetail = (contact: Contact): Contact => {
    contactDetailList.push(contact);
    return contact;
};

// export const getContactDetailByEmail = (email: string): Contact | undefined => {
//     return contactDetailList.find(contact => contact.email === email);
// };
//
// export const deleteContactDetail = (email: string): boolean => {
//     const index = contactDetailList.findIndex(contact => contact.email === email);
//     if (index === -1) return false;
//     contactDetailList.splice(index, 1);
//     return true;
// };

export const validateContactDetail = (contact: Contact): string | undefined => {
    if (!contact.email || !contact.subject || !contact.message) {
        return "All fields are required!";
    }
};
