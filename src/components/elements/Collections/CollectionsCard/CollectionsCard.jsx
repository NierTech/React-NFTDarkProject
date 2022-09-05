import React from 'react';
import { motion } from 'framer-motion';
import styles from './CollectionsCard.module.scss';
import collections1 from '../../../../assets/collections/collections1.png';
import collections2 from '../../../../assets/collections/collections2.png';
const CollectionsCard = () => {
	const collections = [
		{
			id: 1,
			img: collections1,
			author: '@wzard',
			numberCollections: 'ERC-721',
		},
		{
			id: 2,
			img: collections2,
			author: '@wzard',
			numberCollections: 'ERC-721',
		},
		{
			id: 3,
			img: collections1,
			author: '@wzard',
			numberCollections: 'ERC-721',
		},
	];
	const AnimationCollectionsCard = {
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
				className={styles.collections}
			>
				{collections.map((item, idx) => {
					return (
						<motion.div
							variants={AnimationCollectionsCard}
							custom={1}
							className={styles['collections__contents']}
							key={idx}
						>
							<div className={styles['collections__cover']}>
								<img src={item.img} alt="collections" />
							</div>
							<div className={styles.info}>
								<h1 className={styles['info__title']}>{item.author}</h1>
								<p className={styles['info__paragraph']}>
									{item.numberCollections}
								</p>
							</div>
						</motion.div>
					);
				})}
			</motion.div>
		</section>
	);
};

export default CollectionsCard;
