import { useState } from "react";
import style from "../App.module.css";
export default function AddedTodos({ onHandlerSubmit }) {
  const [val, setVal] = useState("");
  function handelChange(e) {
    setVal(e.target.value);
  }
  return (
    <form
      className={style.form}
      onSubmit={(e) => {
        e.preventDefault();
        onHandlerSubmit(val);
        setVal("");
      }}
    >
      <input type="text" value={val} onChange={handelChange} />
      <button>ADD</button>
    </form>
  );
}
