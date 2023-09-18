import React from "react"

const Square = ({board}) => {

  //destructure a specific property
//{board} - referencing the name assigned to the prop passed from App.js
console.log("board", board)

  return (
    <>
      (board.map((square, index) => {
        return(
          <div className="square" key={index}>
            {square}
          </div>
        )
      })}
    </>
  )
}
export default Square
