import style from "../App.module.css";
export default function Footer({ todo, removeCompleted }) {
  const completedArr = todo.filter((todo) => todo.isCompleted).length;
  return (
    <div className={style.footer}>
      <span>
        {completedArr}/{todo.length}
      </span>
      <button onClick={removeCompleted}>Clear Completed Todos</button>
    </div>
  );
}
