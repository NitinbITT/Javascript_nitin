export default function Form(){
          const [task, setTask] = useState("");
  const [listItem, setListitem] = useState("");
  const [count, setCount] = useState(0);

  function handleSubmit(e){
    e.preventDefault();
    setListitem(task)
    setTask("")
    // let completedList=localStorage.getItem("completedList") || []
    // completedList.append()
  }
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Enter input"
          onChange={(e) => {
            setTask(e.target.value);
          }}
          value={task}
        />
        <button onClick={handleSubmit}>Add</button>
      </form>

      {listItem}
    </>
  );
}