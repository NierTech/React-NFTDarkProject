import React from 'react';
import { motion } from 'framer-motion';
import { MLink } from '../../UI/Link/Link';
import AuctionsCards from './AuctionsCards/AuctionsCards';
import AuctionsHeader from './AuctionsHeader/AuctionsHeader';

const AuctionsSections = () => {
	const AnimationAuctionsSection = {
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
			viewport={{ amount: 0.2, once: true }}
		>
			<AuctionsHeader />
			<AuctionsCards />
			<MLink custom={1} variants={AnimationAuctionsSection}>
				View all
			</MLink>
		</motion.div>
	);
};

export default AuctionsSections;
