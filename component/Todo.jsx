
function Todo({task}){
   function buttonclicked()
    {
      console.log(`deleted ${task}`)
      
    }
  return (
    <>

    <div className="todo-item">
        <h2>{task} </h2>
        <button onClick={buttonclicked}>Delete</button>
    </div>
    
</>
  )
}
export default Todo;