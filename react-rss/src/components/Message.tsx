import React from 'react';

type MessageProps = {
  handleClose: () => void;
};

export const Message = ({ handleClose }: MessageProps) => {
  return (
    <div
      className="flex justify-center w-200 h-200"
      onClick={() => {
        handleClose();
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
          onClick={handleClose}
        >
          Click to close message
        </button>
      </h3>
    </div>
  );
};
