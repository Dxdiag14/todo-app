import React, { useState } from 'react'
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'

const Todo = ({ id, name, checked, toggleTask, deleteTask, editTask }) => {
  const [edit, setEdit] = useState(false)
  const [newName, setNewName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    editTask(id, newName)
    setNewName("")
    setEdit(false)
  }

  const editingTemplate = (
    <form onSubmit={handleSubmit}>
    <input
        id={id}
        type="text"
        className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"
        placeholder={name}
        value={newName}
        onInput={(e) => setNewName(e.target.value)}
        required
        autoFocus
        maxLength={60}
    />
        <div className="flex justify-center my-6">
            <button className="rounded-full p-3 w-full sm:w-56 bg-gradient-to-r from-sky-600 to-teal-300 text-white text-lg font-semibold" type='submit'>
                Save
            </button>
        </div>
    </form>
  )
    const viewingTemplate = (
      <div className="flex justify-between my-3">
      <input id={id} type="checkbox" className="border-sky-400 " defaultChecked={checked} onChange={() => toggleTask(id)} />
          <div className="px-3 text-gray-500">
              {name}
          </div>
      <div className='flex gap-5'>
      <PencilSquareIcon className='h-5 w-5 hover:cursor-pointer' onClick={() => setEdit(true)} />
      <TrashIcon className='h-5 w-5' onClick={() => deleteTask(id)} />
      </div>
  </div>
    )


  return (
    <>
    {edit ? editingTemplate: viewingTemplate}
    </>
  )
}

export default Todo