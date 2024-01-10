import React from "react";
import { decode } from "html-entities";

const Card = ({ link, title, excerpt, image }) => {
	return (
		<a href={link} className="card">
			<img src={image} className="card__image" alt="" />
			<div className="card__overlay">
				<div className="card__header">
					<div className="card__header-text">
						<h2 className="card__title">{decode(title)}</h2>
					</div>
				</div>
				<p className="card__description">
					{decode(excerpt?.replace(/(<([^>]+)>)/gi, ""))}
				</p>
			</div>
		</a>
	);
};

export default Card;
