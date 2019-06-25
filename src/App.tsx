import React from "react";
import AddNoteButton from "./AddNoteButton";
import NotesList from "./NotesList";
import NoteHeader from "./NoteHeader";
import AddNoteForm from "./AddNoteForm";

export type Note = {
  id: number;
  content: string;
};

interface IAppProps {}

interface IAppState {
  notes: Note[];
  isAddingNote: boolean;
  currentNoteId: number;
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      notes: [],
      isAddingNote: false,
      currentNoteId: 0
    };

    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.toggleIsAddingNote = this.toggleIsAddingNote.bind(this);
  }

  addNote(note: string) {
    const newNote: Note = { id: this.state.currentNoteId + 1, content: note };
    this.setState(({ notes, currentNoteId }) => ({
      notes: [...notes, newNote],
      currentNoteId: currentNoteId + 1
    }));
  }

  removeNote(id: number) {
    this.setState(({ notes }) => {
      const newNotes = notes.filter(({ id: i }) => i !== id);
      return { notes: newNotes };
    });
  }

  toggleIsAddingNote() {
    this.setState(({ isAddingNote }) => ({ isAddingNote: !isAddingNote }));
  }

  render() {
    const { isAddingNote, notes } = this.state;
    const mainContent = isAddingNote ? (
      <AddNoteForm
        addNote={this.addNote}
        toggleIsAddingNote={this.toggleIsAddingNote}
      />
    ) : (
      <NotesList notes={notes} removeNote={this.removeNote} />
    );

    return (
      <div className="App h-screen bg-gray-200">
        <div className="note-content bg-white shadow-md rounded">
          <NoteHeader />

          {mainContent}

          {!isAddingNote && <AddNoteButton onClick={this.toggleIsAddingNote} />}
        </div>
      </div>
    );
  }
}
