import React from 'react';
import { motion } from 'framer-motion';
import CollectionsCard from './CollectionsCard/CollectionsCard';
import CollectionsHeader from './CollectionsHeader/CollectionsHeader';
import { MLink } from '../../UI/Link/Link';

const Collections = () => {
	const AnimationCollectionsLink = {
		hidden: {
			x: -100,
			opacity: 0,
		},
		visible: (custom) => ({
			x: 0,
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
			<CollectionsHeader />
			<CollectionsCard />
			<MLink variants={AnimationCollectionsLink} custom={1}>
				View all
			</MLink>
		</motion.div>
	);
};

export default Collections;
