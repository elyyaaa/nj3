import React, { useState } from 'react';

const List = ({ tasks, handleDelete, handleDone, handleEdit }) => {
    const [editInput, setEditInput] = useState('');
    const [editId, setEditId] = useState(null);

    const handleEditInput = (event) => {
        setEditInput(event.target.value);
    };

    const handleSaveEdit = () => {
        if (editInput.trim() !== '') {
            handleEdit({ id: editId, title: editInput });
            setEditInput('');
            setEditId(null);
        }
    };

    const handleCancelEdit = () => {
        setEditInput('');
        setEditId(null);
    };

    return (
        <ul>
            {tasks.map((task) => (
                <li
                    key={task.id}
                    style={{
                        border: '1px solid red',
                        padding: '40px',
                        margin: '5px',
                        textDecoration: task.completed ? 'line-through' : 'none',
                        backgroundColor: task.completed ? 'green' : 'transparent',
                    }}
                >
                    {`id: ${task.id}. ${task.title}`}
                    <button onClick={() => handleDone(task.id)}>Done</button>
                    <button onClick={() => handleDelete(task.id)}>Delete</button>
                    {editId === task.id ? (
                        <>
                            <input
                                type='text'
                                value={editInput}
                                onChange={handleEditInput}
                            />
                            <button onClick={handleSaveEdit}>Save</button>
                            <button onClick={handleCancelEdit}>Cancel</button>
                        </>
                    ) : (
                        <button
                            onClick={() => {
                                setEditInput(task.title);
                                setEditId(task.id);
                            }}
                        >
                            Edit
                        </button>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default List;
