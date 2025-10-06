import Die from "./components/Die";
import React from "react";

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
  const [diceNumbers, setDiceNumbers] = React.useState(generateAllNewDice());

  function generateAllNewDice() {
    const newDice = [];

    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }

    return newDice;
  }

  const diceElements = diceNumbers.map((num, idx) => (
    <Die key={idx} number={num} />
  ));

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
    </main>
  );
}
