import React, { useContext } from "react";
import NoteListItem from "./NoteListItem";
import { NotesStoreContext } from "../store/NotesStore";
import Note from "../types/Note";

interface INotesListProps {
  notes: Note[];
}

const NotesList: React.FC<INotesListProps> = ({ notes }) => {
  const notesStore = useContext(NotesStoreContext);
  const renderedNotes = notes.map(note => (
    <NoteListItem
      content={note.content}
      id={note.id}
      removeNote={() => notesStore.removeNote(note.id)}
    />
  ));

  return (
    <div className="notes mx-8">
      <ol className="list-decimal text-sans">{renderedNotes}</ol>
    </div>
  );
};

export default NotesList;
