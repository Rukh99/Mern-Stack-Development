import React, { useState } from 'react'

const Todo = () => {
  const [todoList, setTodoList] = useState([]);

  

  const addNEWTodo = (e) => {
    // console.log('e.todo');
    if(!e.target.value.trim()) return ;

    if (e.code === 'Enter') {
      console.log(e.target.value);
      // todolist.push(e.target.value);
      setTodoList([...todoList, e.target.value]);
      console.log([...todoList, e.target.value]);
      e.target.value = "";
    }
  }

      const removeTodo = (index) => {
        console.log(index)
        // todoList.splice(index, 1);
        const temp = todoList;
        temp.splice(index, 1);
        setTodoList(temp);

    }
    return (
      <div>

        <div className='container'>
          <h1 className='text-center my-5'>TODO LIST </h1>
          <div className='card'>
            <div className='card-header'>
              <input type="text" className='form-control' onKeyDown={addNEWTodo} />
            </div>
            <div className='card-body p-0'>
              {todoList.map((todo, index) => {
                return <div className={`d-flex justify-content-between p-4 ${index%2===0?'bg-body-secondary' :''}`}>
                  <p>{todo}</p>
                  <button className='btn btn-danger' onClick={() => { removeTodo(index) }}>Delete</button>
                </div>
              })}
            </div>
          </div>
        </div>
      </div>

    )
  }

  export default Todo;
