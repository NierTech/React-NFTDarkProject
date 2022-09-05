import React from 'react';
import { motion } from 'framer-motion';
import { MTitle } from '../../../UI/Title/Title';
const WorkHeader = () => {
	const AnimationWorkHeader = {
		hidden: {
			y: -100,
			opacity: 0,
		},
		visible: (custom) => ({
			y: 0,
			opacity: 1,
			transition: {
				delay: custom * 0.2,
			},
		}),
	};
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
		>
			<MTitle variants={AnimationWorkHeader} custom={1}>
				How it works
			</MTitle>
		</motion.div>
	);
};

export default WorkHeader;
