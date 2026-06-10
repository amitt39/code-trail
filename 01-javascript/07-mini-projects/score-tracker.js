// Score Tracker

// Track scores for 2 players — Player 1 and Player 2
// Can add points to either player
// Can show current scores of both players
// Can reset both scores to 0


function scoreTracker() {

  let player1 = 0;
  let player2 = 0;

  return function (operation) {

    switch (operation) {
      case "p1":
        return function (points) {
          player1 += points;
          console.log(player1);

        }

      case "p2":
        return function (points) {
          player2 += points;
          console.log(player2);

        }
      case "reset":
        return function () {
          player1 = 0;
          player2 = 0;
          console.log("Score Reset");

        }
      case "show":
        return function () {
          console.log(`Player 1: ${player1}\nPlayer 2: ${player2}`);
        }
      default:
        return "Invalid Operation"

    }

  }
}

let performOperation = scoreTracker();
let p1 = performOperation("p1");
let p2 = performOperation("p2");
let reset = performOperation("reset");
let show = performOperation("show");

p1(5) // p1 5
p1(2) // p1 7
p2(4) // p2 4
p1(-3) // p1 4
show() // p1 4 p2 4
reset() // p1 0 p2 0
show() // p1 0 p2 0
