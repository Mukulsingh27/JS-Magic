import React, { useState, useEffect } from "react";
import Card from "./card";
import "./card.scss";

const Blogs = () => {
	const [blogs, setBlogs] = useState([]);

	// Function to fetch data from the API
	const fetchData = async () => {
		// Fetch data from the API
		const res = await fetch(
			"https://www.rollingstone.com/wp-json/wp/v2/posts/"
		);

		if (res.status !== 200) {
			console.log("There was an error fetching data from the API.");
			return;
		}

		// Convert the response to JSON
		const data = await res.json();

		// Set the state of the blogs
		if (data) {
			setBlogs(data);
		}
	};

	// Fetch data on initial render
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="cards">
			{blogs.map((blog) => {
				return (
					<Card
						key={blog.id}
						link={blog.link}
						title={blog.title.rendered}
						excerpt={blog.excerpt.rendered}
						image={blog.jetpack_featured_media_url}
					/>
				);
			})}
		</div>
	);
};

export default Blogs;
