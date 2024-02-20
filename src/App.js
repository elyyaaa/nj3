import './App.css';
import Modal from "./components /modal/Modal";
import List from "./components /list/List";
import {useState} from "react";
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
        setTasks(prevTasks => [
            ...prevTasks,
            { id: tasks.length + 1, title: input, completed: false }
        ]);
        setInput('');
        handleShowModal();
    };

    const handleDeleteTask = (id) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));

    };
    const handleSearch = (value) => {
        setSearch(value);

        const filteredTasks = tasks.filter((task) =>
            task.title.toLowerCase().includes(value.toLowerCase())
        );

        setTasks(filteredTasks);
    };

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
            <List tasks={tasks} handleDelete={handleDeleteTask} />
        </>
    );
}

export default App;
