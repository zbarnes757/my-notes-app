import React from "react";
import { Note } from "./App";

interface INotesListProps {
  notes: Note[];
}

const NotesList: React.SFC<INotesListProps> = ({ notes }) => {
  const renderedNotes = notes.map(note => (
    <li className="mb-2" key={note.id}>
      {note.content}
    </li>
  ));

  return (
    <div className="notes mx-8">
      <ol className="list-decimal text-sans">{renderedNotes}</ol>
    </div>
  );
};

export default NotesList;
