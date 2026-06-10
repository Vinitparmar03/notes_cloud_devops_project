import Note from "../models/notesModel.js";
import {createNote, getUserNotes, getNoteById, updateNote, deleteNote}from "../services/noteService.js";

const createNewNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    if(!title || !content){
        return res.status(400).json({
            message: "title and content are required"
        })
    }

    const savedNote = await createNote(req.user.userId, title, content);
    res.status(201).json(savedNote);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getAllNotes = async (req, res) =>{
    try {
        const notes = await getUserNotes(req.user.userId);

        return res.status(200).json({
            success: true,
            count: notes.length,
            notes
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const getSingleNote = async(req, res) => {
    try {
        const {noteId} = req.params;

        const note = await getNoteById(req.user.userId, noteId);
        
        if(!note){
            res.status(404).json({
                message: "Note not found"
            })
        }

        return res.status(200).json({
            success: true,
            note
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const updateExistingNotes = async(req, res) =>{
    try {
        const {noteId} = req.params;
        const {title, content} = req.body;
        const note = await updateNote(req.user.userId, noteId, title, content);
        return res.status(200).json({
            success: true,
            note: updated
        });
    }catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const deleteExistingNote = async(req, res) =>{
    try{
        const {noteId} = req.params;

        await deleteNote(req.user.userId, noteId);

        return res.status(200).json({
            success: true,
            message:
            "Note deleted successfully"
        });
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

export {
    createNewNote,
    getAllNotes,
    getSingleNote,
    updateExistingNotes,
    deleteExistingNote
}