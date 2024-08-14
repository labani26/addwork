import React from 'react';

const TodoItem = ({ todo, onDelete }) => {  //what if i give props here ?
  if (!todo) {
    return  <div>No task available</div>;
  }

  const { title, description } = todo;

  return (
    
      <div>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
      <button type="button" id="button" className="btn btn-danger"  onClick={()=> onDelete(todo)}>Delete</button>
      </div>
    
  );
};

export default TodoItem;
