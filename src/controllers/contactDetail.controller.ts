import { Request, Response } from "express";
import * as contactDetailService from "../service/contactDetail.service";

export const getAllContactDetails = (req: Request, res: Response) => {
    try {
        const contacts = contactDetailService.getAllContactDetails();
        res.status(200).json(contacts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong!!" });
    }
};

export const saveContactDetail = (req: Request, res: Response) => {
    try {
        const newContact = req.body;
        const validationError = contactDetailService.validateContactDetail(newContact);

        if (validationError) {
            res.status(400).json({ error: validationError });
            return;
        }

        const savedContact = contactDetailService.saveContactDetail(newContact);
        res.status(201).json(savedContact);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong!!" });
    }
};

export const getContactDetail = (req: Request, res: Response) => {
    const email = req.params.email;

    if (!email) {
        res.status(400).json({ error: "Invalid email" });
        return;
    }

    const contact = contactDetailService.getContactDetailByEmail(email);

    if (!contact) {
        res.status(404).json({ error: "Contact not found" });
        return;
    }

    res.status(200).json(contact);
};

export const deleteContactDetail = (req: Request, res: Response) => {
    const email = req.params.email;

    if (!email) {
        res.status(400).json({ error: "Invalid email" });
        return;
    }

    const deleted = contactDetailService.deleteContactDetail(email);

    if (!deleted) {
        res.status(404).json({ error: "Contact not found" });
        return;
    }

    res.status(200).json({ message: "Contact deleted successfully" });
};
