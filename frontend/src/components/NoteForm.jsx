import { useState } from "react";

const NoteForm = ({ onSubmit, editingNote }) => {
    const [title, setTitle] = useState(editingNote ? editingNote.title : "");
    const [content, setContent] = useState(editingNote ? editingNote.content : "");

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit({
            title,
            content
        });

        setTitle("");
        setContent("");
    }
    return (
        <form
            onSubmit={handleSubmit}
            className="
                    bg-white
                    p-5
                    rounded-xl
                    shadow-md
                    mb-8
            "
        >
            <h2
                className="
                    text-xl
                    font-bold
                    mb-4
            "
            >
                {
                    editingNote
                        ? "Edit Note"
                        : "Create Note"
                }
            </h2>

            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) =>
                    setTitle(
                        e.target.value
                    )
                }
                required
                className="
                    w-full
                    border
                    p-3
                    rounded-lg
                    mb-3
                "
            />

            <textarea
                rows="4"
                placeholder="Content"
                value={content}
                onChange={(e) =>
                    setContent(
                        e.target.value
                    )
                }
                required
                className="
                    w-full
                    border
                    p-3
                    rounded-lg
                    mb-3
                "   
            />

            <button
                className="
                    bg-green-600
                    text-white
                    px-5
                    py-2
                    rounded-lg
                "
            >
                {
                    editingNote
                        ? "Update"
                        : "Create"
                }
            </button>
        </form>
    )
}

export default NoteForm