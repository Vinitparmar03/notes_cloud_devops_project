import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import API from "../api/notesApi";

import Navbar from "../components/Navbar";

function NoteDetails() {
    const [editingNote, setEditingNote] = useState(null);


    const { noteId } = useParams();

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

    const [note, setNote] =
        useState(null);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {
        console.log(noteId);

        const fetchNote =
            async () => {

                try {

                    const response =
                        await API.get(
                            `/notes/${noteId}`
                        );

                    setNote(
                        response.data.note
                    );

                } catch (error) {

                    console.log(error);

                } finally {

                    setLoading(false);
                }
            };

        fetchNote();

    }, [noteId]);

    if (loading) {
        return (
            <div className="text-center mt-20">
                Loading...
            </div>
        );
    }

    if (!note) {
        return (
            <div className="text-center mt-20">
                Note not found
            </div>
        );
    }

    return (
        <>
            <Navbar />

            <div
                className="
        max-w-4xl
        mx-auto
        px-6
        py-10
        "
            >
                <div
                    className="
          bg-white
          rounded-2xl
          shadow-lg
          p-8
          "
                >
                    <h1
                        className="
            text-4xl
            font-bold
            mb-6
            "
                    >
                        {note.title}
                    </h1>

                    <p
                        className="
            text-gray-500
            mb-8
            "
                    >
                        Created:
                        {" "}
                        {new Date(
                            note.createdAt
                        ).toLocaleString()}
                    </p>

                    <div
                        className="
            whitespace-pre-wrap
            leading-8
            text-lg
            text-gray-700
            "
                    >
                        {note.content}
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default NoteDetails;