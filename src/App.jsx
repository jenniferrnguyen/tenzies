import Die from "./components/Die";
import React from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function App() {
  const [dice, setDice] = React.useState(generateAllNewDice);
  const buttonRef = React.useRef(null);

  const gameWon = dice.every(
    (die) => die.isHeld && die.value === dice[0].value
  );

  React.useEffect(() => {
    if (gameWon) {
      buttonRef.current.focus();
    }
  }, [gameWon]);

  function generateAllNewDice() {
    const newDice = [];

    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return newDice;
  }

  function rollDice() {
    setDice((prevDice) =>
      prevDice.map((die) => ({
        ...die,
        value: die.isHeld ? die.value : Math.ceil(Math.random() * 6),
      }))
    );
  }

  function toggleHoldDie(id) {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.id == id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }

  const diceElements = dice.map((die) => (
    <Die key={die.id} die={die} toggleHoldDie={toggleHoldDie} />
  ));

  function newGame() {
    buttonRef.current.focus();
    setDice(generateAllNewDice());
  }

  const btnStyles = gameWon ? { backgroundColor: "#FF69B4" } : null;

  return (
    <main>
      {gameWon && <Confetti />}
      <div aria-live="polite" className="sr-only">
        {gameWon && (
          <p>Congratulations! You won! Press "New Game" to start again.</p>
        )}
      </div>

      <h1 className="title">{gameWon ? "Congratulations!" : "Tenzies"}</h1>

      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>

      <div className="dice-container">{diceElements}</div>
      <button
        style={btnStyles}
        className="roll-dice-btn"
        onClick={gameWon ? newGame : rollDice}
        ref={buttonRef}
      >
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
}
