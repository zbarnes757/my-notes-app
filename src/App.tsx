import React from "react";

export default class App extends React.Component {
  notes: String[] = ["a sample", "another one"];

  addNote(note: String) {
    this.notes = [...this.notes, note];
  }

  render() {
    const renderedNotes = this.notes.map(note => (
      <li className="mb-2">{note}</li>
    ));

    return (
      <div className="App h-screen bg-gray-200">
        <div className="note-content bg-white shadow-md rounded">
          <div className="note-header">
            <h1 className="text-sans text-center mt-8 mb-4 text-xl font-bold">
              My Notes
            </h1>
            <div className="border-solid border border-gray-800 w-full" />
          </div>
          <div className="notes mx-8">
            <ol className="list-decimal text-sans">{renderedNotes}</ol>
          </div>
        </div>
      </div>
    );
  }
}
