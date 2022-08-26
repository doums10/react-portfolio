import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./About.scss";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

// static data removed for sanity usage
const abouts = [
	{
		title: "Front-End Developer",
		description:
			"👨‍💻 I've been coding for 3 years. I am a front end developer with a passion for building beautiful functional web applications & learning new technologies.",
			hobbies:"🏋️‍♂️ When I'm not coding, I practice Crossfit, Basketball and Soccer.",
		imgUrl: images.front,
	},
];
const About = () => {
	// const [abouts, setAbouts] = useState([]);
	// useEffect(() => {
	// 	const query = '*[_type == "abouts"]';
	// 	client.fetch(query).then((data) => setAbouts(data));
	// }, []);

	return (
		<>
			<h2 className="head-text">
				I Know that <span>Good Dev</span> <br /> means{" "}
				<span>Good Business </span>
			</h2>
			<div className="app__profiles">
				{abouts.map((about, index) => (
					<motion.div
						whileInView={{ opacity: 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.6, type: "tween" }}
						className="app__profile-item"
						key={abouts.title + index}
					>
						<img src={about.imgUrl} alt={about.title} />
						<h2 className="bold-text" style={{ marginTop: 20 }}>
							{about.title}
						</h2>
						<p className="p-text" style={{ marginTop: 10 }}>
							{about.description}
						</p>
						<p className="p-text" style={{ marginTop: 10 }}>
							{about.hobbies}
						</p>
					</motion.div>
				))}
			</div>
		</>
	);
};

export default AppWrap(
	MotionWrap(About, "app__about"),
	"about",
	"app__whitebg"
);
