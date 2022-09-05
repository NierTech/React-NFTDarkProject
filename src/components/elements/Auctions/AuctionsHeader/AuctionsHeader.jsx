import React from 'react';
import { motion } from 'framer-motion';
import { MTitle } from '../../../UI/Title/Title';
const AuctionsHeader = () => {
	const AnimationAuctionsHeader = {
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
			<MTitle variants={AnimationAuctionsHeader} custom={1}>
				Live Auctions
			</MTitle>
		</motion.div>
	);
};

export default AuctionsHeader;
