import BG from "../images/bg.jpg";
import { useState } from "react";
const Home = () => {
  const [Todo, setTodo] = useState([]);
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  let id = 0;
  const handleSubmit = (e) => {
    e.preventDefault();
    Todo.push({
      id: id++,
      name: name,
      completed: false,
    });
    setName("");
  };
  const [completed, setCompleted] = useState(false);

  const completeTodo = (id) => {
    const updatedTodos = Todo.map((Todo) => {
      if (id === Todo.id) {
        return { ...Todo, completed: true};
        console.log("kofi");
      }
      return Todo;
    });
    setTodo(updatedTodos);
    console.log("kofi");
  };

  console.log(Todo);
  return (
    <div className="bg-white w-full ">
      {/* image container */}
      <div className="absolute w-full">
        <img src={BG} className="w-full h-72 " alt="" />
      </div>
      {/* image container */}

      {/* home content */}
      <div className="absolute mt-40 flex flex-col w-full mx-50">
        {/* title */}
        <div className="text-white w-3/4  mx-auto text-3xl tracking-widest mb-8">
          TODO
        </div>

        {/* Add todo container */}
        {/* < className=" rounded-small p-2 flex flex-row  w-3/4 mx-auto justify-between h-12   shadow-sm"> */}
        <div className=" bg-white rounded-small p-2 flex flex-row  w-3/4 mx-auto justify-between h-12   shadow-sm">
          <form onSubmit={handleSubmit} className="">
            <div className="flex  flex-row space-x-96  ">
              <div>
                <input
                  type="text"
                  onChange={handleChange}
                  placeholder="Add a new task here..."
                  value={name}
                  className=" outline-0"
                />
              </div>
              <div>
              <button
                onClick={handleSubmit}
                className=" h-8  w-32 rounded-sm position- text-white text-sm bg-green-500 text-center"
                type="submit"
              >
                Add
              </button>
              </div>
            </div>
          </form>
        </div>

        {/* todo list container */}
        <div className="w-3/4 mx-auto  flex flex-col justify-between shadow-lg mt-4 rounded-sm h-64 ">
          <div>
            <ul className="mt-4 mx-2 list-item ">
              {Todo.map((Todo) => (
                <li
                  key={Todo.id}
                  id={Todo.id}
                  defaultValue={completed}
                  onClick={completeTodo}
                  className="text-black"
                >
                  {Todo.name}
                  {console.log(Todo.name)}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-row  justify-between p-2 ">
            <div className="text-gray-400 text-sm">
              {Todo.length} tasks left
            </div>
            <div className="text-gray-400 text-sm">Followers</div>
          </div>
        </div>
      </div>
      {/* home content */}
    </div>
  );
};

export default Home;
