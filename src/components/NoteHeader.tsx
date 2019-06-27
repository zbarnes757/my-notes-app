import React from "react";

const NoteHeader: React.FC = () => {
  return (
    <div className="note-header">
      <h1 className="text-sans text-center mt-8 mb-4 text-xl font-bold">
        My Notes
      </h1>
      <div className="border-solid border border-gray-800 w-full" />
    </div>
  );
};

export default NoteHeader;
