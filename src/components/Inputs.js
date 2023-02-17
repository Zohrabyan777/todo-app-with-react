import style from "../App.module.css";

export default function Inputs({
  todo,
  deleteItems,
  id,
  isCompleted,
  text,
  onChange,
}) {
  return (
    <div className={style.inputs}>
      <label>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={(e) => {
            onChange({ ...todo, isCompleted: e.target.value });
          }}
        />
        {text}
      </label>
      <button onClick={() => deleteItems(id)}>X</button>
    </div>
  );
}
