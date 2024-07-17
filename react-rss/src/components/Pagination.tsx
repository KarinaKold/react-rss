import React from 'react';

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<Props> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      <button
        data-testid="prev-btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Back
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        data-testid="next-btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
