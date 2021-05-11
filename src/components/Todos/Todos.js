import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "./todos-styles.scss";

const Todos = ({ todos, setTodos, setStatus, filtered, setFiltered }) => {

  const handleCheck = (id) => {
    document
    .getElementById(id)
    .firstElementChild.classList.toggle("checked");
  document
    .getElementById(id)
    .lastElementChild.classList.toggle("todoSpanChecked");

  setTodos(
    todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    })
  );
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleStatus = (s) => {
    setStatus(s);
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(filtered);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setFiltered(items);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="todos">
        {(provided) => (
          <ul
            className="todosUl"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {filtered.map((todo, index) => {
              return (
                <Draggable key={todo.id} draggableId={todo.text} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="todo-container"
                    >
                      <div className="check-container" id={todo.id}>
                        <div
                          className="check"
                          onClick={() => {
                            handleCheck(todo.id);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="11"
                            height="9"
                          >
                            <path
                              fill="none"
                              stroke="#FFF"
                              d="M1 4.304L3.696 7l6-6"
                            />
                          </svg>
                        </div>
                        <span className="todoSpan">{todo.text}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleDelete(todo.id)}
                      ></button>
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
            <div className="todosFooter">
              <span className="itemsLeft">{todos.length} items left</span>
              <div className="filters">
                <span onClick={() => handleStatus("All")} className="filterAll">All</span>
                <span onClick={() => handleStatus("Active")} className="filterActive">Active</span>
                <span onClick={() => handleStatus("Completed")} className="filterCompleted">Completed</span>
              </div>
              <span className="clearCompleted" onClick={() => setTodos([])}>
                Clear Completed
              </span>
            </div>

            <div className="filtersMobile">
                <span onClick={() => handleStatus("All")} className="filterAllMobile">All</span>
                <span onClick={() => handleStatus("Active")} className="filterActiveMobile">Active</span>
                <span onClick={() => handleStatus("Completed")} className="filterCompletedMobile">Completed</span>
              </div>
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Todos;
