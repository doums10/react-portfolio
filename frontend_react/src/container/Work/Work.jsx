import React, { useState, useEffect } from "react";
import "./Work.scss";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import AppWrap from "../../wrapper/AppWrap";
import { urlFor, client } from "../../client"
const Work = () => {
	const handleWorkFilter = (item) => {

	}
	return (
		<>
			<h2 className="head-text">
				<span>Portfolio</span> 
			</h2>
			<div className="app__work-filter">
			{['UI/UX','Javascript', 'React JS', 'Html/Css','All'].map((item, index) => {
				<div 
				className=""
				key={index}
				onClick={() => handleWorkFilter(item)}

				
				
				
				>

				</div>
			})}
			</div>
		</>
	);
};

export default Work;
