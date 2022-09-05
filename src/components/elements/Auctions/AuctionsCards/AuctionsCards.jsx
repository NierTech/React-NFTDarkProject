import React from 'react';
import { motion } from 'framer-motion';
import { MButtons } from '../../../UI/Buttons/Buttons';
import styles from './AuctionsCards.module.scss';
import NFTImg1 from '../../../../assets/cards/card02.png';
import NFTImg2 from '../../../../assets/cards/card03.png';
import NFTImg3 from '../../../../assets/cards/card04.png';
import heart from '../../../../assets/etc/heart.svg';
const AuctionsCards = () => {
	const [counter, setCounter] = React.useState(0);
	const maxCounter = () => {
		setCounter(counter + 1);
	};
	const NFTInfo = [
		{
			id: 1,
			img: NFTImg1,
			title: 'Virtual Art',
			author: 'by @wzard',
			heart: heart,
			likes: counter,
			description: 'Current Bid',
			price: 4.89 + 'ETH',
		},
		{
			id: 2,
			img: NFTImg2,
			title: 'Virtual Art',
			author: 'by @wzard',
			heart: heart,
			likes: counter,
			description: 'Current Bid',
			price: 4.89 + 'ETH',
		},
		{
			id: 3,
			img: NFTImg3,
			title: 'Virtual Art',
			author: 'by @wzard',
			heart: heart,
			likes: counter,
			description: 'Current Bid',
			price: 4.89 + 'ETH',
		},
	];
	const AnimationAuctionsCards = {
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
			<div
				initial="hidden"
				whileInView="visible"
				viewport={{ amount: 0.2, once: true }}
				className={styles.cards}
			>
				{NFTInfo.map((item, idx) => {
					return (
						<motion.div
							variants={AnimationAuctionsCards}
							custom={1}
							className={styles['cards__content']}
							key={idx}
						>
							<div className={styles['cards__cover']}>
								<img className={styles.img} src={item.img} alt="Nft image 01" />
							</div>
							<div className={styles.info}>
								<div className={styles['info__left']}>
									<h1 className={styles['info__title']}>{item.title}</h1>
									<p className={styles['info__author']}>{item.author}</p>
								</div>
								<div className={styles['info__right']}>
									<button onClick={maxCounter}>
										<img
											className={styles['info__heart']}
											src={item.heart}
											alt="likes"
										/>
									</button>
									<span className={styles['info__likes']}>{item.likes}</span>
								</div>
							</div>
							<div className={styles.description}>
								<h4 className={styles['description__title']}>
									{item.description}
								</h4>
								<p className={styles['description__price']}>{item.price}</p>
							</div>
							<div className={styles.btn}>
								<MButtons variants={AnimationAuctionsCards} custom={1}>
									<span>Place a bid</span>
								</MButtons>
							</div>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
};

export default AuctionsCards;
