import React from "react";
import "../scss/breadcrumbs.scss";

const Breadcrumbs = ({ data }) => {
	return (
		<nav className="breadcrumbs body-text-tiny">
			<ul>
				{data.map((breadcrumb, index) => {
					return (
						<li key={index}>
							<a href={breadcrumb.url}>{breadcrumb.title}</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Breadcrumbs;
