import './App.css';
import Modal from "./components /modal/Modal";
import List from "./components /list/List";
import {useState, useEffect} from "react";
import Input from "./components /input/Input";
import {Button} from "./components /header/button/Button";


function App() {
    const [showModal, setShowModal] = useState(false);
    const [input, setInput] = useState('');
    const [search, setSearch] = useState('');
    const [tasks, setTasks] = useState([
        { id: 1, title: 'coding', completed: false },
        { id: 2, title: 'eat', completed: false },
        { id: 3, title: 'sleep', completed: false }
    ]);

    const handleShowModal = () => {
        setShowModal(!showModal);
    };

    const onChangeInput = (event) => {
        setInput(event.target.value);
    };

    const handleAddTask = () => {
        setTasks((prevTasks) => [
            ...prevTasks,
            { id: tasks.length + 1, title: input, completed: false }
        ]);
        setInput('');
        handleShowModal();
    };

    const handleDeleteTask = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    };

    const handleDoneTask = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const handleEditTask = ({ id, title }) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, title } : task
        );
        setTasks(updatedTasks);
    };

    const handleSearch = (value) => {
        setSearch(value);
        // Ваша логика фильтрации поиска
    };

    useEffect(() => {
        console.log('useEffect');
    }, [tasks]);

    return (
        <>
            {showModal && (
                <Modal handleShow={handleShowModal}>
                    <Input
                        placeholder={'Добавить таск'}
                        onChangeInput={onChangeInput}
                        value={input}
                    />
                    <Button onClick={handleAddTask} text={'добавить'} />
                </Modal>
            )}
            <Input
                placeholder={'Поиск тасков'}
                onChangeInput={(e) => handleSearch(e.target.value)}
                value={search}
            />
            <button onClick={handleShowModal}>открыть</button>
            <List
                tasks={tasks}
                handleDelete={handleDeleteTask}
                handleDone={handleDoneTask}
                handleEdit={handleEditTask}
            />
        </>
    );
}



export default App;
