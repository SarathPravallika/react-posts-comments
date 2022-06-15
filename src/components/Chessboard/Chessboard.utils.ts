import { Position } from "./Chessboard.props";

const validateKnightPosition = (
  startKnightPosition: Position,
  endKnightPosition: Position
) => {
  const { row: startRow, column: startColumn } = startKnightPosition;
  const { row: endRow, column: endColumn } = endKnightPosition;

  const rowDifference = Math.abs(startRow - endRow);
  const columnDifference = Math.abs(startColumn - endColumn);

  return (
    (rowDifference === 2 && columnDifference === 1) ||
    (rowDifference === 1 && columnDifference === 2)
  );
};

export { validateKnightPosition };
