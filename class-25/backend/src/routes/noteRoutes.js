const express = require("express");
const NoteController = require("../controllers/noteController");
const { sessionAuth, jwtAuth } = require("../middleware/authMiddleware");

const router = express.Router();

// Routes protected by Session
router.post("/session", sessionAuth, NoteController.createNote);
router.get("/session", sessionAuth, NoteController.getNotes);
router.put("/session/:id", sessionAuth, NoteController.updateNote);
router.delete("/session/:id", sessionAuth, NoteController.deleteNote);

// Routes protected by JWT
router.post("/jwt", jwtAuth, NoteController.createNote);
router.get("/jwt", jwtAuth, NoteController.getNotes);
router.put("/jwt/:id", jwtAuth, NoteController.updateNote);
router.delete("/jwt/:id", jwtAuth, NoteController.deleteNote);

module.exports = router;
