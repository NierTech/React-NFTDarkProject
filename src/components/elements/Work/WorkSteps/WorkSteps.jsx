import React from 'react';
import { motion } from 'framer-motion';
import styles from './WorkSteps.module.scss';
import wallet from '../../../../assets/icons/Wallet.svg';
import collection from '../../../../assets/icons/collection.svg';
import sale from '../../../../assets/icons/sale.svg';
import nfts from '../../../../assets/icons/NFTs.svg';
const WorkSteps = () => {
	const SnakeCollection = [
		{
			id: 1,
			img: wallet,
			description: 'Set Up Your Wallet',
		},
		{
			id: 2,
			img: collection,
			description: 'Create Your Collection',
		},
		{
			id: 3,
			img: nfts,
			description: 'Add your NFTs',
		},
		{
			id: 4,
			img: sale,
			description: 'List them for sale',
		},
	];
	const AnimationWorkSteps = {
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
		<section>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				className={styles.snake}
			>
				{SnakeCollection.map((item, idx) => {
					return (
						<motion.div
							variants={AnimationWorkSteps}
							custom={1}
							className={styles['snake__item']}
							key={idx.id}
						>
							<div className={styles['snake__info']}>
								<img className={styles.img} src={item.img} alt="icons" />
								<p className={styles['description__paragraph']}>
									{item.description}
								</p>
							</div>
						</motion.div>
					);
				})}
			</motion.div>
		</section>
	);
};

export default WorkSteps;

{
	/* <div className={styles.description}>
<p className={styles['description__paragraph']}>
	{item.description}
</p>
</div> */
}
