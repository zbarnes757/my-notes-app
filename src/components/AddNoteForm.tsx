import React, { useState, useContext } from "react";
import { NotesStoreContext } from "../store/NotesStore";

interface IAddNoteFormProps {
  toggleIsAddingNote: () => void;
}

const AddNoteForm: React.FC<IAddNoteFormProps> = ({ toggleIsAddingNote }) => {
  const notesStore = useContext(NotesStoreContext);
  const [noteText, setNoteText] = useState("");

  const handleSubmit = () => {
    notesStore.addNote(noteText);
    toggleIsAddingNote();
  };

  return (
    <div className="notes mx-8">
      <form>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="note"
            type="text"
            value={noteText}
            onChange={e => setNoteText(e.target.value)}
            placeholder="You New Note"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSubmit}
          >
            Add
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={toggleIsAddingNote}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNoteForm;
