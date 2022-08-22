import React, { useState, useEffect } from "react";
import "./Work.scss";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import AppWrap from "../../wrapper/AppWrap";
import { urlFor, client } from "../../client";
const Work = () => {
	const [activeFilter, setActiveFilter] = useState("All");
	const handleWorkFilter = (item) => {};
	return (
		<>
			<h2 className="head-text">
				<span>Portfolio</span>
			</h2>
			<div className="app__work-filter">
				{["UI/UX", "Javascript", "React JS", "Html/Css", "All"].map(
					(item, index) => (
						<div
							className={`app__work-filter-item app__flex p-text ${
								activeFilter === item ? "item-active" : ""
							}`}
							key={index}
							onClick={() => handleWorkFilter(item)}
						>
							{item}
						</div>
					)
				)}
			</div>
			
		</>
	);
};

export default Work;
