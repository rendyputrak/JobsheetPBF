import React, { useState } from 'react';

const TodoItem = ({ task, index, onDelete }) => {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-2 rounded-lg my-2">
      <span>{index + 1}. {task}</span>
      <button
        onClick={onDelete}
        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-700"
      >
        Hapus
      </button>
    </div>
  );
};

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>
      <form onSubmit={addTask} className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Tambah tugas baru..."
          className="flex-1 p-2 border rounded-lg"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Tambah
        </button>
      </form>
      <div>
        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} index={index} onDelete={() => deleteTask(index)} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;