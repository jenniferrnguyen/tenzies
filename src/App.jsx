import Die from "./components/Die";
import React from "react";
import { nanoid } from "nanoid";

export default function App() {
  /**
   * Challenge:
   *
   * Create state to hold our array of numbers. (Initialize
   * the state by calling our `generateAllNewDice` function so it
   * loads all new dice as soon as the app loads)
   *
   * Map over the state numbers array to generate our array
   * of Die elements and render those in place of our
   * manually-written 10 Die elements.
   */
  const [dice, setDice] = React.useState(generateAllNewDice);

  function generateAllNewDice() {
    const newDice = [];

    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }

    console.log("init dice: ", newDice);
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

  console.log("current dice: ", dice);
  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice-btn" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}
