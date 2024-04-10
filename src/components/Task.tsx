export const Task = (props) => {
	const remove = () => {
		props.onDelete(props.index);
	};
	return (
		<>
			<div className="col-md-4">
				<div className="contentDiv shadow mb-3">
					<h1>{props.title}</h1>
					<p>{props.content}</p>
					<button className="btn btn-sm btn-danger" onClick={remove}>
						Delete
					</button>
				</div>
			</div>
		</>
	);
};
