let App = React.createClass({
  getInitialState() {
    return {
      board: {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: ''
      },
      turn: "X",
      playing: true
    }
  },

  start() {
    let newBoard = {
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
      9: ""
    }

    this.setState({
      board: newBoard,
      turn: "X",
      playing: true
    });
  },

  clickSquare(num) {
    let { board, turn, playing } = this.state;
    let newBoard = board;
    let newTurn = turn;

    if (newBoard[num] === '' && playing === true) {
      if (turn === "X") {
        newBoard[num] = "X";
        newTurn = "O";
      } else {
        newBoard[num] = "O";
        newTurn = "X";
      }

      this.setState({
        board: newBoard,
        turn: newTurn
      })

      this.winner(turn);
      // console.log(num, 'square clicked');
      // console.log("state", this.state);
    }
  },

  gameOver(winner) {
    let decaration = winner + " WINS!";
    this.setState({
      playing: false
    }, () => {alert(decaration)});
  },

  winner(mark) {
    let { board } = this.state;
    let b = board;
    let winningRows = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
    let over = false;

    function doesItMatch(arr, mark) {
      let win = true;
      arr.forEach((n) => {
        if (board[n] !== mark) {
          win = false;
        }
      })
      if (win) {
        over = true;
      }
    }

    for (let r in winningRows) {
      doesItMatch(winningRows[r], mark);
    }

    if (over) {
      this.gameOver(mark);
    }
  },

  turn() {
    let { turn, playing } = this.state;
    if (playing) {
      return `${turn} turn`;
    } else {
      return '';
    }
  },

  mark(n) {
    return this.state.board[n];
  },

  render() {
    let { board } = this.state;

    return (

      <div className="container" id="gameContainer">
        <h1>Tic Tac Toe</h1>

        <button onClick={this.start} className="btn btn-sm btn-defalt">New Game</button>

        <h3>{this.turn()}</h3>

          <div className="row">
            <div className="col-xs-4 panel">
              <div onClick={() => this.clickSquare(1)} className="square">{this.mark(1)}</div>
            </div>
            <div className="col-xs-4 panel">
              <div onClick={() => this.clickSquare(2)} className="square">{this.mark(2)}</div>
            </div>
            <div className="col-xs-4 panel">
              <div onClick={() => this.clickSquare(3)} className="square">{this.mark(3)}</div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-4 panel">
              <div onClick={() => this.clickSquare(4)} className="square">{this.mark(4)}</div>
            </div>
            <div className="col-xs-4 panel">
              <div onClick={() => this.clickSquare(5)} className="square">{this.mark(5)}</div>
            </div>
            <div className="col-xs-4 panel">
              <div onClick={() => this.clickSquare(6)} className="square">{this.mark(6)}</div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-4 panel">
              <div onClick={() => this.clickSquare(7)} className="square">{this.mark(7)}</div>
            </div>
            <div className="col-xs-4 panel">
              <div onClick={() => this.clickSquare(8)} className="square">{this.mark(8)}</div>
            </div>
            <div className="col-xs-4 panel">
              <div onClick={() => this.clickSquare(9)} className="square">{this.mark(9)}</div>
            </div>
          </div>

      </div>
    )
  }
})

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
