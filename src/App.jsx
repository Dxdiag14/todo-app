import { useState } from 'react'
import Form from './components/Form';
import Todo from './components/Todo';
import { nanoid } from 'nanoid'

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (taskname) => {
    const newTask = { id: `todo-${nanoid()}`, name: taskname, checked: false }
    setTasks([ ...tasks, newTask ])
  }

  const toggleTask = (id) =>{
    const updatedTask = tasks.map((task) => {
      if(id === task.id) {
        return { ...task, checked: !task.checked }
      }
      return task
    })
    setTasks(updatedTask)
  }

  const deleteTask = (id) => {
    const remainingTask = tasks.filter((task) => id !== task.id)
    setTasks(remainingTask)
  }

  const editTask = (id, newName) => {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return {...task, name: newName}
      }
      return task
    })
    setTasks(editedTaskList)
  }

  const taskList = tasks.map((task) => (
    <Todo id={task.id} name={task.name} checked={task.checked} key={task.id} toggleTask={toggleTask} deleteTask={deleteTask} editTask={editTask} />
  ))

  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task'
  const headingText = `${taskList.length}  ${tasksNoun} remaining`

  return (
    <div className="w-full overflow-scroll h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex items-center justify-center" >
        <div className="bg-white py-6 px-10 sm:max-w-md w-full ">
            <div className="sm:text-3xl text-2xl font-semibold text-center text-sky-600 mb-3">
                Todo List
            </div>
            <div className="flex justify-center mb-8">
                    <p className="text-gray-500">What need's to be done? </p>
            </div>

            {/* Form */}
            <Form addTask={addTask} />

                <div className="border-b border-sky-400 mb-6"></div>

                <div className="flex justify-center mb-3">
                    <p className="text-gray-500 font-bold">{headingText}</p>
                </div>

            {/* Todo */}
            {taskList}
            </div>
        </div>
  );
}

export default App
