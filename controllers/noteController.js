// In-memory data (resets every time the server restarts)
let notes = [
    { id: 1, title: "Learn Node.js", content: "Finish sessions 43 to 45", category: "Study" },
    { id: 2, title: "Grocery List", content: "Milk, eggs, bread", category: "Personal" },
    { id: 3, title: "Team Meeting", content: "Discuss project deadline on Friday", category: "Work" },
];

const getAllNotes = (req, res) => {
    res.status(200).json(notes);
};

const getNoteById = (req, res) => {
    const id = Number(req.params.id);
    const note = notes.find((n) => n.id === id);

    if (!note) {
        return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json(note);
};

const createNote = (req, res) => {
    const { title, content, category } = req.body;

    const newNote = {
        id: Date.now(),
        title,
        content,
        category,
    };

    notes.push(newNote);
    res.status(201).json(newNote);
};

const updateNote = (req, res) => {
    const id = Number(req.params.id);
    const note = notes.find((n) => n.id === id);

    if (!note) {
        return res.status(404).json({ message: "Note not found" });
    }

    const { title, content, category } = req.body;

    if (title !== undefined) note.title = title;
    if (content !== undefined) note.content = content;
    if (category !== undefined) note.category = category;

    res.status(200).json(note);
};

const deleteNote = (req, res) => {
    const id = Number(req.params.id);
    const index = notes.findIndex((n) => n.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Note not found" });
    }

    const deleted = notes.splice(index, 1);
    res.status(200).json({ message: "Note deleted", note: deleted[0] });
};

module.exports = {
    getAllNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote,
};