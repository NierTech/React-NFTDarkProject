import React from 'react';
import { motion } from 'framer-motion';
import { MLink } from '../../UI/Link/Link';
import CreatorsCards from './CreatorsCards/CreatorsCards';
import CreatorsHeader from './CreatorsHeader/CreatorsHeader';

const Creators = () => {
	const AnimationCreatorsLink = {
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
			<CreatorsHeader />
			<CreatorsCards />
			<MLink variants={AnimationCreatorsLink} custom={2}>
				View all
			</MLink>
		</motion.div>
	);
};

export default Creators;
