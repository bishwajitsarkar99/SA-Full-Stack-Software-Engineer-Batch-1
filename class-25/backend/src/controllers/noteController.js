const { createNote, getNotesByUserId, updateNote, deleteNote } = require("../models/noteModel");

const createNoteHandler = async (req, res) => {
  try {
    const { title, content } = req.body;
    const user_id = req.user ? req.user.id : req.session.userId; // Handle both JWT and Session

    if (!title || !content) {
      return res.status(400).json({ message: "Title and content required" });
    }

    const note = await createNote({ user_id, title, content });
    res.status(201).json({ success: true, data: note });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getNotesHandler = async (req, res) => {
  try {
    const user_id = req.user ? req.user.id : req.session.userId;
    const notes = await getNotesByUserId(user_id);
    res.json({ success: true, data: notes });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateNoteHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const user_id = req.user ? req.user.id : req.session.userId;

    const result = await updateNote(id, user_id, { title, content });
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteNoteHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const user_id = req.user ? req.user.id : req.session.userId;

    const result = await deleteNote(id, user_id);
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  createNote: createNoteHandler,
  getNotes: getNotesHandler,
  updateNote: updateNoteHandler,
  deleteNote: deleteNoteHandler,
};
