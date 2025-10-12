export default function Dies(props) {
  const dieClass = props.die.isHeld ? "die isHeld" : "die";

  return (
    <button
      className={dieClass}
      onClick={() => props.toggleHoldDie(props.die.id)}
    >
      {props.die.value}
    </button>
  );
}
