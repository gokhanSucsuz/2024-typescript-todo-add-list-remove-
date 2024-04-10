import React from "react";

export const Footer = () => {
	const date = new Date();
	return (
		<>
			<footer>
				<div className="container">
					<div className="row py-4 fs-6 fw-bold">
						<p>Copyright {date.getFullYear()} | Gökhan SUÇSUZ</p>
					</div>
				</div>
			</footer>
		</>
	);
};
