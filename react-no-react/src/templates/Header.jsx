import React from "react";
import "../scss/header.scss";

const Header = () => {
	if (!!0) {
		console.log("This is a test");
	}

	return (
		<header className="header">
			<div className="header__inner responsive-wrapper">
				<div className="header__logo">
					<img src="https://avatars.githubusercontent.com/u/54891099?v=4" />
					<a href="https://github.com/Mukulsingh27">
						<h3>mukulsingh.dev</h3>
					</a>
				</div>
				<nav className="header-navigation">
					<a href="#">Home</a>
					<a href="#">About</a>
					<a href="#">Blog</a>
					<a href="#">Contact Us</a>
					<button>Menu</button>
				</nav>
			</div>
		</header>
	);
};

export default Header;
