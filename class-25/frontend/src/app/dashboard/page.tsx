"use client";

import { useEffect, useState } from "react";
import { noteService } from "@/services/noteService";
import { authService } from "@/services/authService";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { LogOut, Plus, Trash2, Edit3, Shield, Zap } from "lucide-react";

export default function Dashboard() {
  const [notes, setNotes] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authType, setAuthType] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // auth checking bad practice 
  useEffect(() => {
    const storedAuthType = localStorage.getItem("auth_type"); // bad practice
    const storedUser = localStorage.getItem("user"); // bad practice
    
    if (!storedAuthType || !storedUser) {
      router.push("/login");
      return;
    }

    setAuthType(storedAuthType);
    setUser(JSON.parse(storedUser));
    fetchNotes(storedAuthType);
  }, []);

  const fetchNotes = async (type: string) => {
    try {
      const response = type === "session" 
        ? await noteService.getNotesSession() 
        : await noteService.getNotesJWT();
      setNotes(response.data.data);
    } catch (error: any) {
      toast.error("Failed to fetch notes");
      if (error.response?.status === 401) router.push("/login");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;
    
    try {
      const payload = { title, content };
      authType === "session" 
        ? await noteService.createNoteSession(payload) 
        : await noteService.createNoteJWT(payload);
      
      toast.success("Note created!");
      setTitle("");
      setContent("");
      fetchNotes(authType!);
    } catch (error) {
      toast.error("Failed to create note");
    }
  };

  const handleDeleteNote = async (id: number) => {
    try {
      authType === "session" 
        ? await noteService.deleteNoteSession(id) 
        : await noteService.deleteNoteJWT(id);
      toast.success("Note deleted");
      fetchNotes(authType!);
    } catch (error) {
      toast.error("Failed to delete note");
    }
  };

  const handleLogout = async () => {
    try {
      await authService.logout();
      localStorage.clear();
      toast.success("Logged out");
      router.push("/login");
    } catch (error) {
      localStorage.clear();
      router.push("/login");
    }
  };

  if (loading) return <div className="flex min-h-screen items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            <div className="flex items-center gap-2 font-bold text-xl text-indigo-600">
              AuthMaster <span className="text-gray-400 text-sm font-normal">| Dashboard</span>
            </div>
            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${
                authType === "jwt" ? "bg-indigo-50 text-indigo-700 border-indigo-200" : "bg-purple-50 text-purple-700 border-purple-200"
              }`}>
                {authType === "jwt" ? <Zap size={12} /> : <Shield size={12} />}
                Logged in via {authType?.toUpperCase()}
              </div>
              <span className="text-sm text-gray-600">{user?.email}</span>
              <button onClick={handleLogout} className="text-gray-400 hover:text-red-500 transition-colors">
                <LogOut size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Create Note Form */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Create New Note</h3>
              <form onSubmit={handleCreateNote} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Note Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Write your note here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center gap-2 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors text-sm font-medium"
                >
                  <Plus size={18} /> Add Note
                </button>
              </form>
            </div>
          </div>

          {/* Notes List */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {notes.length === 0 ? (
                <div className="col-span-full py-20 text-center bg-white rounded-xl border-2 border-dashed border-gray-200 text-gray-500">
                  No notes found. Create your first one!
                </div>
              ) : (
                notes.map((note) => (
                  <div key={note.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{note.title}</h4>
                      <p className="text-gray-600 text-sm whitespace-pre-wrap">{note.content}</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-50 flex justify-between items-center">
                      <span className="text-xs text-gray-400">
                        {new Date(note.created_at).toLocaleDateString()}
                      </span>
                      <div className="flex gap-2">
                        <button onClick={() => handleDeleteNote(note.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
