import React, { Component } from 'react';

type MessageProps = {
  handleClose: () => void;
};

export default class Message extends Component<MessageProps> {
  constructor(props: MessageProps) {
    super(props);
  }

  render() {
    return (
      <div
        className="flex justify-center w-200 h-200"
        onClick={() => {
          this.props.handleClose();
        }}
        data-testid="message"
      >
        <h3
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          Success!
          <button
            className="block min-w-0 my-2 py-1 px-2 flex-auto rounded border border-solid hover:bg-cyan-500 hover:text-gray-200"
            type="button"
            onClick={this.props.handleClose}
          >
            Click to close message
          </button>
        </h3>
      </div>
    );
  }
}
