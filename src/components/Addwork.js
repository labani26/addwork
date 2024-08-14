import React from 'react';
import TodoItem from './TodoItem';

const Addwork = (props) => {


  return (
    <div className='container my-3' >
      <h2 className='text-center my-3'>Work List</h2>
      {props.addworks.length === 0 ? "No Task here !" :
        props.addworks.map((todo) => {
          return (
            <>
               <div key={todo.no}>
              <TodoItem todo={todo} onDelete={props.onDelete} />
              <hr />
              </div>
            </>
          )
        })}
    </div >
  )
}

export default Addwork
