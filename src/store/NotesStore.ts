import { observable } from "mobx";
import Note from "../types/Note";
import { createContext } from "react";

class NotesStore {
  @observable notes: Note[] = [];
  @observable currentId: number = 0;

  removeNote(id: number): void {
    this.notes = this.notes.filter(({ id: i }) => i !== id);
  }

  addNote(content: string): void {
    this.currentId++;
    const newNote: Note = { id: this.currentId, content };
    this.notes = [...this.notes, newNote];
  }
}

export const NotesStoreContext = createContext(new NotesStore());
