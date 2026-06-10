import express from "express";
import { createNewNote, getAllNotes, getSingleNote, updateExistingNotes, deleteExistingNote } from "../controller/noteController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post(
    "/",
    authMiddleware,
    createNewNote
);

router.get(
    "/",
    authMiddleware,
    getAllNotes
);

router.get(
    "/:noteId",
    authMiddleware,
    getSingleNote
);

router.put(
    "/:noteId",
    authMiddleware,
    updateExistingNotes
);

router.delete(
    "/:noteId",
    authMiddleware,
    deleteExistingNote
);


export default router