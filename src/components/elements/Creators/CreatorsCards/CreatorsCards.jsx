import React from 'react';
import { motion } from 'framer-motion';
import styles from './CreatorsCards.module.scss';
import profile1 from '../../../../assets/profile/profile1.svg';
import profile2 from '../../../../assets/profile/profile2.svg';
import profile3 from '../../../../assets/profile/profile3.svg';
import profile4 from '../../../../assets/profile/profile4.svg';
const CreatorsCards = () => {
	const creators = [
		{
			id: 1,
			icons: profile1,
			author: 'Wzards Dee',
			balance: 4.89 + 'ETH',
			allItems: 33,
			name: 'Items',
		},
		{
			id: 2,
			icons: profile2,
			author: 'Wzards Dee',
			balance: 4.89 + 'ETH',
			allItems: 33,
			name: 'Items',
		},
		{
			id: 3,
			icons: profile3,
			author: 'Wzards Dee',
			balance: 4.89 + 'ETH',
			allItems: 33,
			name: 'Items',
		},
		{
			id: 4,
			icons: profile4,
			author: 'Wzards Dee',
			balance: 4.89 + 'ETH',
			allItems: 33,
			name: 'Items',
		},
	];
	const AnimationCreatorsCards = {
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
				className={styles.creators}
			>
				{creators.map((item, idx) => {
					return (
						<motion.div
							variants={AnimationCreatorsCards}
							custom={2}
							className={styles['creators__cards']}
							key={idx}
						>
							<div className={styles.info}>
								<div className={styles.icons}>
									<img src={item.icons} alt={'profiles' + item.id} />
								</div>
								<div className={styles.stats}>
									<div className={styles.person}>
										<h1 className={styles['person__title']}>{item.author}</h1>
										<p className={styles['person__balance']}>{item.balance}</p>
									</div>
									<div className={styles.item}>
										<p className={styles['item__amount']}>{item.allItems}</p>
										<span className={styles['item__type']}>{item.name}</span>
									</div>
								</div>
							</div>
						</motion.div>
					);
				})}
			</motion.div>
		</section>
	);
};

export default CreatorsCards;
