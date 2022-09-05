import React from 'react';
import styles from './HeaderContent.module.scss';
import { motion } from 'framer-motion';
import { MHeaderCounter } from '../HeaderCounter/HeaderCounter';
import rightImage from '../../../../assets/cards/card01.png';
const HeaderContent = () => {
	const headerContentAnimation = {
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
		<section>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				className={styles.section}
			>
				<div className={styles.main}>
					<motion.h1
						custom={1}
						variants={headerContentAnimation}
						className={styles['main__title']}
					>
						Explore, Buy and Sell the
						<span className={styles['main__title__yl']}> Best NFTs!</span>
					</motion.h1>
					<motion.div
						custom={1}
						variants={headerContentAnimation}
						viewport={{ once: true }}
						className={styles.link}
					>
						<a href="/">Explore</a>
						<a href="/">Create</a>
					</motion.div>
					<MHeaderCounter
						variants={headerContentAnimation}
						custom={1}
						viewport={{ once: true }}
					/>
				</div>
				<motion.div
					variants={headerContentAnimation}
					custom={2}
					viewport={{ once: true }}
					className={styles.img}
				>
					<a href="/">
						<img src={rightImage} alt="card01" />
					</a>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default HeaderContent;
