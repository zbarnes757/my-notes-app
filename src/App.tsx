import React, { useState } from "react";
import AddNoteButton from "./components/AddNoteButton";
import NotesList from "./components/NotesList";
import NoteHeader from "./components/NoteHeader";
import AddNoteForm from "./components/AddNoteForm";
import AuthenticationBox from "./components/AuthenticationBox";
import AuthService from "./lib/AuthService";
import Note from "./types/Note";

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isAddingNote, setIseAddingNote] = useState(false);
  const [currentNoteId, setCurrentNoteId] = useState(0);
  const [isSignedIn, setIsSignedIn] = useState(AuthService.isAuthorized());

  const toggleIsAddingNote = (): void => setIseAddingNote(!isAddingNote);

  const addNote = (note: string): void => {
    const id = currentNoteId + 1;
    const newNote: Note = { id, content: note };
    setNotes([...notes, newNote]);
    setCurrentNoteId(id);
  };

  const removeNote = (id: number): void =>
    setNotes(notes.filter(({ id: i }) => i !== id));

  const authenticate = (
    action: "login" | "signup",
    username: string,
    password: string
  ): void => {
    AuthService.authenticate({ action, username, password }).then(() =>
      setIsSignedIn(AuthService.isAuthorized())
    );
  };

  let mainContent: JSX.Element;

  if (!isSignedIn) {
    mainContent = <AuthenticationBox authenticate={authenticate} />;
  } else if (isAddingNote) {
    mainContent = (
      <AddNoteForm addNote={addNote} toggleIsAddingNote={toggleIsAddingNote} />
    );
  } else {
    mainContent = (
      <div>
        <NotesList notes={notes} removeNote={removeNote} />

        <AddNoteButton onClick={toggleIsAddingNote} />
      </div>
    );
  }

  return (
    <div className="App h-screen bg-gray-200">
      <div className="note-content bg-white shadow-md rounded">
        <NoteHeader />

        {mainContent}
      </div>
    </div>
  );
};

export default App;
