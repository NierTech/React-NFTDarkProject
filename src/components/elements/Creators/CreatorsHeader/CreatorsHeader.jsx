import React from 'react';
import { motion } from 'framer-motion';
import { MTitle } from '../../../UI/Title/Title';

const CreatorsHeader = () => {
	const AnimationCreatorsHeader = {
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
			<MTitle variants={AnimationCreatorsHeader} custom={2}>
				Top Creators
			</MTitle>
		</motion.div>
	);
};

export default CreatorsHeader;
