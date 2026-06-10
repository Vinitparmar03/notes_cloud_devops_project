import { useNavigate } from "react-router-dom";

const NoteCard = ({ note, onDelete, onEdit }) => {
    const navigate = useNavigate();

    return (
        <div onClick={() =>
            navigate(
                `/notes/${note.noteId}`
            )
        }
            className="cursor-pointer bg-white rounded-xl h-120 shadow-md p-5 flex flex-col">
            <h2 className="text-xl font-bold mb-3">
                {note.title}
            </h2>
            <p className="text-gray-600 mb-4 h-3/4 overflow-hidden line-clamp-14">
                {note.content}
            </p>
            <div className="flex gap-2 align-self-end">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onEdit(note);
                    }}
                    className="z-10 cursor-pointer bg-blue-500 text-white px-3 py-2 rounded"
                >
                    Edit
                </button>

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete(note.noteId);
                    }}
                    className="z-10 cursor-pointer bg-red-500 text-white px-3 py-2 rounded"
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default NoteCard