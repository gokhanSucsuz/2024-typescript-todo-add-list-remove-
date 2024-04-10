import { useState } from "react";

export const CreateTask = ({ onAdd }) => {
	const [task, setTask] = useState({
		title: "",
		content: "",
	});
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		onAdd(task);
		e.preventDefault();
		setTask({
			title: "",
			content: "",
		});
	};
	const handleChange = (e: {
		target: HTMLInputElement | HTMLTextAreaElement;
	}): void => {
		console.log(e.target);
		const { name, value } = e.target;
		setTask((prevTask) => {
			return {
				...prevTask,
				[name]: value,
			};
		});
	};
	return (
		<div className="todoArea">
			<form className="todoForm shadow" onSubmit={handleSubmit}>
				<input
					type="text"
					className="form-control todoText"
					name="title"
					value={task.title}
					placeholder="Title"
					onChange={handleChange}
				/>
				<textarea
					name="content"
					className="form-control todoText"
					onChange={handleChange}
					value={task.content}
					rows={3}
					placeholder="Write your task..."></textarea>
				<button className="btn btn-sm btn-primary w-100">Add</button>
			</form>
		</div>
	);
};
