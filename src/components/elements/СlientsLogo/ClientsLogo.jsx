import React from 'react';
import { motion } from 'framer-motion';
import binance from '../../../assets/logo/binance.svg';
import bitmex from '../../../assets/logo/bitmex.svg';
import blockchain from '../../../assets/logo/blockchain.svg';
import coinbase from '../../../assets/logo/coinbase.svg';
import styles from './ClientsLogo.module.scss';
const ClientsLogo = () => {
	const headerLogotype = {
		hidden: {
			y: -150,
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
				className={styles.img}
			>
				<motion.a variants={headerLogotype} custom={1} href="/">
					<img src={coinbase} alt="COINBASE" />
				</motion.a>
				<motion.a variants={headerLogotype} custom={1} href="/">
					<img src={blockchain} alt="BLOCKCHAIN" />
				</motion.a>
				<motion.a variants={headerLogotype} custom={1} href="/">
					<img src={binance} alt="BINANCE" />
				</motion.a>
				<motion.a variants={headerLogotype} custom={1} href="/">
					<img src={bitmex} alt="BITMEX" />
				</motion.a>
			</motion.div>
		</section>
	);
};

export default ClientsLogo;
