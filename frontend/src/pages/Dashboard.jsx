import { useState, useEffect } from "react"
import API from "../api/notesApi";
import Navbar from "../components/Navbar";
import NoteForm from "../components/NoteForm";
import NoteCard from "../components/NoteCard";

const Dashboard = () => {
    const [notes, setNotes] = useState([]);

    const [editingNote, setEditingNote] = useState(null);

    const fetchNotes = async () => {
        try {
            const response = await API.get("/notes");
            setNotes(response.data.notes);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchNotes();
    }, [notes]);

    const createNote = async (data) => {
        try {
            await API.post("/notes", data);
            await fetchNotes();
        } catch (error) {
            console.log(error)
        }
    }

    const updateNote = async (data) => {
        try {
            await API.put(`/notes/${editingNote.noteId}`, data);
            setEditingNote(null);
            fetchNotes();
        } catch (error) {
            console.log(error)
        }
    }

    const deleteNote = async (noteId) => {
        try {
            await API.delete(`/notes/${noteId}`);
            fetchNotes();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto p-6">
                <NoteForm editingNote={editingNote} onSubmit={editingNote ? updateNote : createNote} />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                            notes.length === 0 ? (

                                <div
                                    className="col-span-full text-center py-20"
                                >
                                    <h2
                                        className="text-2xl font-semibold text-gray-500"
                                    >
                                        No Notes Yet
                                    </h2>

                                    <p
                                        className="text-gray-400 mt-2"
                                    >
                                        Create your first note.
                                    </p>
                                </div>

                            ) : (

                                notes.map((note) => (
                                    <NoteCard
                                        key={note.noteId}
                                        note={note}
                                        onDelete={deleteNote}
                                        onEdit={setEditingNote}
                                    />
                                ))

                            )
                    }
                </div>
                
            </div>
        </>
    )
}


export default Dashboard