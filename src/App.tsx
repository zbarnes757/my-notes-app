import React, { useState, useContext } from "react";
import { observer } from "mobx-react-lite";
import AddNoteButton from "./components/AddNoteButton";
import NotesList from "./components/NotesList";
import NoteHeader from "./components/NoteHeader";
import AddNoteForm from "./components/AddNoteForm";
import AuthenticationBox from "./components/AuthenticationBox";
import AuthService from "./lib/AuthService";
import { NotesStoreContext } from "./store/NotesStore";

const App: React.FC = observer(() => {
  const notesStore = useContext(NotesStoreContext);
  const [isAddingNote, setIseAddingNote] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(AuthService.isAuthorized());

  const toggleIsAddingNote = (): void => setIseAddingNote(!isAddingNote);

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
    mainContent = <AddNoteForm toggleIsAddingNote={toggleIsAddingNote} />;
  } else {
    mainContent = (
      <div>
        <NotesList notes={notesStore.notes} />

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
});

export default App;
