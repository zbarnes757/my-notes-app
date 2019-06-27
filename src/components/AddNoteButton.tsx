import React from "react";

interface IAddNoteButtonProps {
  onClick: () => void;
}

const AddNoteButton: React.SFC<IAddNoteButtonProps> = props => {
  return (
    <div className="add-note flex content-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-auto"
        onClick={props.onClick}
      >
        Add Note
      </button>
    </div>
  );
};

export default AddNoteButton;
