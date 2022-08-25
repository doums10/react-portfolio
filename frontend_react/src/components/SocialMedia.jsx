import React from "react";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
	return (
		<div className="app__social">
			<div>
				<a href="https://twitter.com/Msaymla" target="_blank">
					<BsTwitter />
				</a>
			</div>
			<div>
				<a href="https://github.com/doums10" target="_blank">
					<BsGithub />
				</a>
			</div>
			<div>
				<a href="https://www.linkedin.com/in/mamadou-sylla-dev/">
					<BsLinkedin />
				</a>
			</div>
		</div>
	);
};

export default SocialMedia;
