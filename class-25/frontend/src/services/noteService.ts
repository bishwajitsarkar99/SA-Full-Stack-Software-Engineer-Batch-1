import api from "./api";

export const noteService = {
  // Methods for Session-protected notes
  getNotesSession: () => api.get("/notes/session"),
  createNoteSession: (data: any) => api.post("/notes/session", data),
  updateNoteSession: (id: number, data: any) => api.put(`/notes/session/${id}`, data),
  deleteNoteSession: (id: number) => api.delete(`/notes/session/${id}`),

  // Methods for JWT-protected notes
  getNotesJWT: () => api.get("/notes/jwt"),
  createNoteJWT: (data: any) => api.post("/notes/jwt", data),
  updateNoteJWT: (id: number, data: any) => api.put(`/notes/jwt/${id}`, data),
  deleteNoteJWT: (id: number) => api.delete(`/notes/jwt/${id}`),
};
