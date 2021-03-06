import React, { useState } from 'react';
import './style.css';

export default function Pagination({ totalPages, callback, pageSize }) {
  const [currentPage, setCurrentPage] = useState(1);
  let items = [];

  let leftSide = currentPage - 2;
  if (leftSide <= 0) leftSide = 1;
  let rightSide = currentPage + 2;
  if (rightSide > totalPages) rightSide = totalPages;

  for (let number = leftSide; number <= rightSide; number++) {
    items.push(
      <div
        key={number}
        className={(number === currentPage ? 'round-effect active' : 'round-effect')}
        onClick={() => {
          setCurrentPage(number);
          callback(number, pageSize);
        }}>
        {number}
      </div>,
    );
  }
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      callback(currentPage+1, pageSize)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      callback(currentPage-1, pageSize)
    }
  }

  const paginationRender = (
    <div className="flex-container">
      <div className="paginate-ctn">
        <div className="round-effect" onClick={prevPage}> &lsaquo; </div>
        {items}
        <div className="round-effect" onClick={nextPage}> &rsaquo; </div>
      </div>
    </div>
  );
  return (paginationRender);
}