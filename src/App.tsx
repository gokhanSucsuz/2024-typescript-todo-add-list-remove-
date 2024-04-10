import { useState } from "react";
import "./App.css";
import { CreateTask } from "./components/CreateTask";
import { Header } from "./components/Header";
import { Task } from "./components/Task";
import { Footer } from "./components/Footer";

function App() {
	const [tasks, setTasks] = useState([]);
	const addTask = (newTask: object): void => {
		setTasks((prevTask) => {
			return [...prevTask, newTask];
		});
	};
	const deleteTask = (id: number): void => {
		setTasks((prevTask) => {
			return prevTask.filter((taskItem, index) => index !== id);
		});
	};
	return (
		<>
			<Header />
			<CreateTask onAdd={addTask} />
			<div className="container">
				<div className="row d-flex mx-0 my-5">
					{tasks.map((task, index) => (
						<Task
							key={index}
							title={task.title}
							content={task.content}
							index={index}
							onDelete={deleteTask}
						/>
					))}
				</div>
			</div>
			<Footer />
		</>
	);
}

export default App;
