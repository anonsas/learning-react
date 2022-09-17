// show-row principle:
// 1. We have data.
// 2. We .sort() our data.
// 3. How to go back to original data structure?.

import React, { useState } from 'react';
import randomColor from 'randomcolor';

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function ShowRow() {
  const [squares, setSquares] = useState([]);

  console.log(squares);

  const addSquare = () => {
    setSquares((s) => [
      ...s,
      {
        color: randomColor(),
        number: rand(100, 999),
        row: s.length,
        show: true,
      },
    ]);
  };

  const sortSquares = () => {
    setSquares((s) => [...s].sort((a, b) => a.number - b.number));
  };

  const reverseSquares = () => {
    setSquares((s) => [...s].sort((a, b) => b.number - a.number));
  };

  const originalSortSquares = () => {
    setSquares((s) => [...s].sort((a, b) => a.row - b.row));
  };

  const showSquaresAbove500 = () => {
    setSquares((s) =>
      s.map((sq) => (sq.number > 500 ? { ...sq, show: true } : { ...sq, show: false }))
    );
  };

  const showAllSquares = () => {
    setSquares((s) => s.map((sq) => ({ ...sq, show: true })));
  };

  return (
    <>
      <div className="squares-list">
        {squares.map((square, i) =>
          square.show ? (
            <div style={{ backgroundColor: square.color }} className="square" key={i}>
              {square.number}
            </div>
          ) : null
        )}
      </div>
      <button onClick={addSquare}>New Square</button>
      <button onClick={sortSquares}>sort A-Z</button>
      <button onClick={reverseSquares}>sort Z-A</button>
      <button onClick={originalSortSquares}>Original sort</button>
      <button onClick={showSquaresAbove500}>show above 500</button>
      <button onClick={showAllSquares}>show all</button>
    </>
  );
}

export default ShowRow;
