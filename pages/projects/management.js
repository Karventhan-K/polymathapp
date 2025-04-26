// components/TaskDashboard.js

import Layout from '@/components/Layout';
import { useEffect, useState } from 'react';

export default function TaskDashboard() {
    const [tasks, setTasks] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newTaskName, setNewTaskName] = useState('');

    // Fetch tasks from backend
    useEffect(() => {
        const fetchTasks = async () => {
            const res = await fetch('http://localhost:8000/api/tasks/');
            const data = await res.json();
            setTasks(data);
        };
        fetchTasks();
    }, []);

    const addTask = async () => {
        const response = await fetch('http://localhost:8000/api/tasks/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: newTaskName, status: 'Pending' }),
        });
        const newTask = await response.json();
        setTasks([...tasks, newTask]);
        setNewTaskName('');
        setIsModalOpen(false);
    };

    const updateTaskStatus = async (taskId, newStatus) => {
        const res = await fetch(`http://localhost:8000/api/tasks/${taskId}/`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: newStatus }),
        });
        if (res.ok) {
            setTasks(tasks.map(t => t.id === taskId ? { ...t, status: newStatus } : t));
        }
    };

    // const updateTaskStatus = (taskId, status) => {
    //     setTasks(tasks.map(task => task.id === taskId ? { ...task, status } : task));
    // };

    return (
        <Layout>
            <div className="w-full max-w-screen-lg mx-auto p-4">
                <div className="lg:flex justify-between items-center mb-4 gap-4">
                    <h1 className="text-2xl font-semibold">Project Management Dashboard</h1>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        Add Task
                    </button>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-4">
                    <div className="overflow-x-auto">
                        <table className="w-full table-auto">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="px-4 py-2 text-left">Task</th>
                                    <th className="px-4 py-2 text-left">Status</th>
                                    <th className="px-4 py-2 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task) => (
                                    <tr key={task.id} className="border-t">
                                        <td className="px-4 py-2">{task.name}</td>
                                        <td className="px-4 py-2">{task.status}</td>
                                        <td className="px-4 py-2">
                                            <button
                                                onClick={() => updateTaskStatus(task.id, task.status === 'In Progress' ? 'Completed' : 'In Progress')}
                                                className="bg-green-500 text-white px-2 py-1 rounded-lg hover:bg-green-600 transition"
                                            >
                                                {task.status === 'In Progress' ? 'Mark Completed' : 'Mark In Progress'}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Modal for adding task */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-xl">
                            <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
                            <input
                                type="text"
                                placeholder="Task name"
                                className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
                                value={newTaskName}
                                onChange={(e) => setNewTaskName(e.target.value)}
                            />
                            <div className="flex justify-end gap-2">
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={addTask}
                                    disabled={!newTaskName.trim()}
                                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
}
