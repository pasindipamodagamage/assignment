import { Router } from "express";
import {
    getAllContactDetails,
    saveContactDetail,
    getContactDetail,
    deleteContactDetail,
} from "../controllers/contactDetail.controller";

const contactRouter: Router = Router();

contactRouter.get("/all", getAllContactDetails);
contactRouter.post("/save", saveContactDetail);
contactRouter.get("/:email", getContactDetail);
contactRouter.delete("/delete/:email", deleteContactDetail);

export default contactRouter;
