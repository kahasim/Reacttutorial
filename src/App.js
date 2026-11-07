import { useState } from 'react';

function Square({value, handleClick}) {

   // const [value, setValue] = useState(null);

  // function handleClick(){
  //   //setValue('X');
  // }




  return <button className="square" onClick={handleClick}>{value}</button>;

}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true);
  
  function setSquare(i){
    const nextSquares = squares.slice();
    if(xIsNext){
    nextSquares[i] = 'X';
    }
    else{nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <button className="square">Kahasim's Button</button> <br />
      <br />
      {/* <button className="square">Miranda's Button</button> <br />
      <br />
      <button className="square">Zion's Button</button> <br />
      <br />
      <button className="square">Princess's Button</button> <br />
      <br />
      <button className="square">Nikki's Button</button> <br />
      <br />
      <button className="square">Bill's Button</button> <br />
      <br />
      <br /> */}
      <div className="board-row">
        <Square value={squares[0]} handleClick={() => setSquare(0)} />
        <Square value={squares[1]} handleClick={() => setSquare(1)} />
        <Square value={squares[2]} handleClick={() => setSquare(2)} />
      </div>
      <div className="board-row">
        <Square  value={squares[3]} handleClick={() => setSquare(3)} />
        <Square  value={squares[4]} handleClick={() => setSquare(4)} />
        <Square  value={squares[5]} handleClick={() => setSquare(5)} />
      </div>
      <div className="board-row">
        <Square  value={squares[6]} handleClick={() => setSquare(6)} />
        <Square  value={squares[7]} handleClick={() => setSquare(7)} />
        <Square  value={squares[8]} handleClick={() => setSquare(8)}/>
      </div>
     
    </>
  );
}
