import React from "react";

interface INoteListItemProps {
  id: number;
  content: string;
  removeNote: (id: number) => void;
}

export default class NoteListItem extends React.Component<INoteListItemProps> {
  constructor(props: INoteListItemProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.removeNote(this.props.id);
  }

  render() {
    const { id, content } = this.props;
    return (
      <li className="relative mb-2" key={id}>
        <div className="w-3/4 absolute inset-y-0 left-0">{content}</div>
        <div className="w-1/4 absolute top-0 right-0">
          <svg
            className="fill-current text-red-500 h-6"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            onClick={this.handleClick}
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </div>
      </li>
    );
  }
}
