    import crypto from "node:crypto";

    class Note {
        constructor(userId, title, content) {
            this.userId = userId;
            this.noteId = crypto.randomUUID();
            this.title = title;
            this.content = content;
            this.createdAt = new Date().toISOString();
            this.updatedAt = new Date().toISOString();
        }
    }

    export default Note;