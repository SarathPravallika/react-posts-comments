import React, { useEffect, useState } from "react";
import { chessboardProps } from "./Chessboard.props";
import { validateKnightPosition } from "./Chessboard.utils";
import "./Chessboard.css";

const DEFAULT_POS = {
  row: -1,
  column: -1,
};

const Chessboard = (props: chessboardProps) => {
  const { rows, columns } = props;

  const [startKnightPosition, setStartKnightPosition] = useState(DEFAULT_POS);
  const [endKnightPosition, setEndKnightPosition] = useState(DEFAULT_POS);
  const [isValid, setIsValid] = useState(false);

  const handleClearPositions = () => {
    setStartKnightPosition(DEFAULT_POS);
    setEndKnightPosition(DEFAULT_POS);
    setIsValid(false);
  };

  const handleRowClick = (row: number, column: number) => {
    if (startKnightPosition.row < 0) {
      // Handling the first click and marking it as knight starting position
      setStartKnightPosition({ row, column });
    } else if (endKnightPosition.row < 0) {
      if (
        startKnightPosition.row === row &&
        startKnightPosition.column === column
      ) {
        // Validating if the second click is the same as the first click
        alert("Starting and ending positions can't be same");
      } else {
        // Handling the second click and marking it as knight ending position
        setEndKnightPosition({ row, column });
      }
    } else {
      alert(
        "You can only select two positions, Click on 'Clear positions' button to start again"
      );
    }
  };

  const getPositionColors = (row: number, column: number) => {
    if (
      row === startKnightPosition.row &&
      column === startKnightPosition.column
    )
      return "chess-board__cell--startpos-knight";
    else if (
      row === endKnightPosition.row &&
      column === endKnightPosition.column
    ) {
      return "chess-board__cell--endpos-knight";
    }
    return "";
  };

  useEffect(() => {
    if (startKnightPosition.row >= 0 && endKnightPosition.row >= 0) {
      setIsValid(
        validateKnightPosition(startKnightPosition, endKnightPosition)
      );
    }
  }, [startKnightPosition, endKnightPosition]);

  return (
    <div id="board">
      <div className="chess-board">
        {Array.from({ length: rows }).map((_, rowIndex) => {
          return (
            <div key={rowIndex} className="chess-board__row">
              {Array.from({ length: columns }).map((_, columnIndex) => {
                const isBlack = (rowIndex + columnIndex) % 2 === 0;
                return (
                  <div
                    key={`${rowIndex}-${columnIndex}`}
                    onClick={handleRowClick.bind(this, rowIndex, columnIndex)}
                    className={`chess-board__cell ${
                      isBlack
                        ? "chess-board__cell--is-black"
                        : "chess-board__cell--is-white"
                    } ${getPositionColors(rowIndex, columnIndex)}`}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="information">
        <button onClick={handleClearPositions}>Clear positions</button>
        <div className="instructions">
          <b>Instructions:</b>
          <br />
          1. Click on a cell to mark the starting position of the knight - Cell
          will be highlighted in blue color
          <br />
          2. Click on another cell to mark the ending position of the knight -
          Cell will be highlighted in yellow color
          <br />
          3. Validation will be performed if the ending position of knight is
          valid or not <br />
          4. Click on 'Clear positions' button to start again
        </div>
        {startKnightPosition.row >= 0 && endKnightPosition.row >= 0 && (
          <div
            className={`user-message ${
              isValid ? "user-message--is-valid" : "user-message--is-invalid"
            }`}
          >{`New knight position is ${isValid ? "valid" : "invalid"}`}</div>
        )}
      </div>
    </div>
  );
};

export default Chessboard;
