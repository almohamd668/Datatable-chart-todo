import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addTodo, deleteTodo } from "../../store/todoSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import EditModal from "../../EditModal";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [id, setId] = useState(1);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    todos.length && setId(todos[todos.length - 1].id + 1);
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(id);
    dispatch(
      addTodo({
        id,
        name,
        desc,
        date: selectedDate.toLocaleDateString(undefined, {
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        }),
      })
    );
    setName("");
    setDesc("");
  };
  const handleDelete = (id) => {
    dispatch(deleteTodo({ id: id }));
  };

  return (
    <div className="container">
      <section className="section-center">
        <form onSubmit={handleSubmit}>
          <h3 style={{ marginBottom: "1.5rem", textAlign: "center" }}>
            Todo list using local storage
          </h3>
          <div className="mb-3 d-flex form ">
            <input
              type="text"
              className="form-control"
              placeholder="Todo Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Description"
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            />

            <button type="submit" className="btn btn-success">
              Create
            </button>
          </div>
          <DatePicker
            className="form-control w-100 "
            
            selected={selectedDate}
            showTimeSelect
            dateFormat="Pp"
            onChange={(date) => setSelectedDate(date)}
            value={selectedDate}
          />
        </form>

        <table className="table" style={{ marginTop: "2rem" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Due-date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo,idx) => (
              <tr key={todo.id}>
                <td>{idx + 1}</td>
                <td>{todo.name}</td>
                <td>{todo.desc}</td>
                <td>{todo.date}</td>
                <td>
                  <EditModal users={todos} userId={todo.id} />
                  <button
                    onClick={() => handleDelete(todo.id)}
                    className="btn btn-sm btn-danger ms-2"
                  >
                    Delet
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Todo;
