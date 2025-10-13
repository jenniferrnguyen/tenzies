export default function Dies(props) {
  const dieClass = props.die.isHeld ? "die isHeld" : "die";

  return (
    <button
      className={dieClass}
      onClick={() => props.toggleHoldDie(props.die.id)}
      aria-pressed={props.die.isHeld}
      aria-label={`Die with value ${props.die.value}, ${
        props.die.isHeld ? "held" : "not held"
      }`}
    >
      {props.die.value}
    </button>
  );
}
