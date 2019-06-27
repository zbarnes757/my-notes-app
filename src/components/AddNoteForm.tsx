import React from "react";

interface IAddNoteFormProps {
  toggleIsAddingNote: () => void;
  addNote: (note: string) => void;
}

interface IAddNoteFormState {
  value: string;
}

export default class AddNoteForm extends React.Component<
  IAddNoteFormProps,
  IAddNoteFormState
> {
  constructor(props: IAddNoteFormProps) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value });
  }

  handleSubmit() {
    console.log("value", this.state.value);
    this.props.addNote(this.state.value);
    this.props.toggleIsAddingNote();
  }

  handleCancel() {
    this.props.toggleIsAddingNote();
  }

  render() {
    return (
      <div className="notes mx-8">
        <form>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="note"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="You New Note"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={this.handleSubmit}
            >
              Add
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={this.handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}
