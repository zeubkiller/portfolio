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

    renderSquare(i) {
      return <Square    value={this.props.square[i]}
                        onClick={()=> this.props.onClick(i)}
      />;
    }
  
    render() {
      const status = 'Next player: ' + this.props.nextPlayer ;
      const winner = 'The winner is: ' + this.props.winner ;
  
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

    constructor(props) {
      super(props)

      this.state = {history: [{square: Array(9).fill(null) , xIsNext:true}], currentIndex:0};
    }

  nextPlayer() {
    return this.getCurrentBoard().xIsNext? "X" : "O";
  }

  getCurrentBoard() {
    return this.state.history[this.state.currentIndex]
  }

  handleClick(i) {
      let squareValue = this.getCurrentBoard().square.slice();
      squareValue[i] = this.nextPlayer();

      const newHistory = this.state.history.slice();
      newHistory.push({square: squareValue, xIsNext: !this.getCurrentBoard().xIsNext});

      this.setState({history: newHistory, currentIndex:newHistory.length - 1});
  }

  jumpTo(index) {
    this.setState({history: this.state.history.slice(0, index + 1), currentIndex:index});
  }

  checkWinner(square) {
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
        const currentValue = square[index];

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

    render() {

      const moves = this.state.history.map((boards, index) => {
        const desc = "Move to #" + index;
        return <li>
            <button onClick={() => this.jumpTo(index)}>{desc}</button>
          </li>
      })

      return (
        <div className="game">
          <div className="game-board">
            <Board nextPlayer={this.nextPlayer()} winner={this.checkWinner(this.getCurrentBoard().square)} square={this.getCurrentBoard().square} onClick={(i)=> this.handleClick(i)}/>
          </div>
          <div className="game-info">
            <ol>{moves}</ol>
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
  