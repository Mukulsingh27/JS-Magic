import React from "react";
import Blogs from "./Blogs";
import Header from "./templates/Header";
import Breadcrumbs from "./templates/Breadcrumbs";
import Footer from "./templates/Footer";

const App = () => {
	return (
		<>
			<Header />
			<div className="main">
				<Breadcrumbs
					data={[
						{
							url: "#",
							title: "Home",
						},
						{
							url: "#",
							title: "Blogs",
						},
					]}
				/>
				<Blogs />
			</div>
			<Footer />
		</>
	);
};

export default App;
