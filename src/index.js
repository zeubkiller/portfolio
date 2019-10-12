import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {

    render() {
      return (
        <button className="square" onClick={()=> this.props.onClick()}>
          {this.props.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {squareValue: Array(9).fill(null), xIsNext:true};
    }

    nextPlayer() {
        return this.state.xIsNext? "X" : "O";
    }

    handleClick(i) {
        let squareValue = this.state.squareValue.slice();
        squareValue[i] = this.nextPlayer();
        this.setState({squareValue: squareValue, xIsNext: !this.state.xIsNext});
    }

    checkWinner() {
      let winner = null;

      const compareObject = {
        row1: [0, 1, 2],
        row2 : [3, 4, 5],
        row3 : [6, 7, 8],

        column1 : [0, 3, 6],
        column2 : [1, 4, 7],
        column3 : [2, 5, 8],

        diagonal1 : [0, 4, 8],
        diagonal2 : [2, 4, 6]
      };
      
      for(const propertyName in compareObject){
        let previousValue = null;

        const filteredWinner = compareObject[propertyName].filter( (index) => {
          const currentValue = this.state.squareValue[index];

          if(currentValue !== null && (previousValue === null || previousValue === currentValue)) {
            previousValue = currentValue;

            return true;
          }
          else
            return false;
        });

        if(filteredWinner.length === 3) {
          winner = previousValue;
          break;
        }

        console.log("----------------------------------------------------");
      }

      return winner;
    }

    renderSquare(i) {
      return <Square    value={this.state.squareValue[i]}
                        onClick={()=> this.handleClick(i)}
      />;
    }
  
    render() {
      const status = 'Next player: ' + this.nextPlayer() ;
      const winner = 'The winner is: ' + this.checkWinner() ;
  
      return (
        <div>
          <div className="status">{winner}</div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  