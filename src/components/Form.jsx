import React, { useState } from 'react'

const Form = ({ addTask }) => {
    const [taskname, setTaskName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(taskname)
        setTaskName("")
    }

return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"
            placeholder="Enter new task"
            value={taskname}
            onInput={(e) => setTaskName(e.target.value)}
            required
            autoFocus
            maxLength={60}
        />
            <div className="flex justify-center my-6">
                <button className="rounded-full p-3 w-full sm:w-56 bg-gradient-to-r from-sky-600 to-teal-300 text-white text-lg font-semibold" type='submit'>
                    Add Task
                </button>
            </div>
    </form>
)
}

export default Form