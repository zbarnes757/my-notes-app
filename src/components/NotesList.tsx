import React from "react";
import Note from "../types/Note";
import NoteListItem from "./NoteListItem";

interface INotesListProps {
  notes: Note[];
  removeNote: (id: number) => void;
}

const NotesList: React.FC<INotesListProps> = ({ notes, removeNote }) => {
  const renderedNotes = notes.map(note => (
    <NoteListItem
      content={note.content}
      id={note.id}
      removeNote={() => removeNote(note.id)}
    />
  ));

  return (
    <div className="notes mx-8">
      <ol className="list-decimal text-sans">{renderedNotes}</ol>
    </div>
  );
};

export default NotesList;
