import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
const [input, setInput] = useState(props.edit ? props.edit.value : '');//usestate has an empty string so that we can type anything in the textbox. ther is no initial value in it if it is left empty.

const inputRef = useRef(null);

useEffect(() => {
  inputRef.current.focus()
})


const handleChange = e => {
  setInput(e.target.value);
};

const handleSubmit = e => {
  e.preventDefault();

  props.onSubmit({
    id: Math.floor(Math.random() * 10000),
    text: input
  });

  setInput('');// everytime a value is written in the text box, setInput resets the value to an empty string after the submit button is setoff
};

  return (
<form className='todo-form' onSubmit={handleSubmit}>
{props.edit ? (
<>
<input 
type= 'text'
placeholder='Update your item'
value = {input}
name= 'text'
className='todo-input edit'
onChange={handleChange}
ref= {inputRef}
/>
<button className='todo-button edit'>Update</button>
</>
) : (
  <>
<input 
  type= 'text'
  placeholder='Add a todo'
  value = {input}
  name= 'text'
  className='todo-input'
  onChange={handleChange}
  ref= {inputRef}
  />
  <button className='todo-button'>Add todo</button>
  </>
  )}


  </form>
  );
}

export default TodoForm;
