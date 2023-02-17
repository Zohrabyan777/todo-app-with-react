import Inputs from "./Inputs";
import style from "../App.module.css";
export default function InputItem({ todo, deleteItems, onChange }) {
  return (
    <div className={style.list__items}>
      {todo.length == 0 ? (
        <p>You have completeed all Your tasks</p>
      ) : (
        todo.map((todo) => (
          <Inputs
            onChange={onChange}
            todo={todo}
            id={todo.id}
            deleteItems={deleteItems}
            key={todo.id}
            isCompleted={todo.isCompleted}
            text={todo.text}
          />
        ))
      )}
    </div>
  );
}
