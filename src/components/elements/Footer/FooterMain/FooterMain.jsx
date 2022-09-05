import React from 'react';
import { motion } from 'framer-motion';
import styles from './FooterMain.module.scss';
import logo from '../../../../assets/logo/logo.svg';
import twitter from '../../../../assets/icons/twitter.svg';
import facebook from '../../../../assets/icons/facebook.svg';
import google from '../../../../assets/icons/google.svg';
const FooterMain = () => {
	const AnimationFooterMain = {
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
				className={styles.main}
			>
				<motion.div
					variants={AnimationFooterMain}
					custom={1}
					className={styles['main__left']}
				>
					<a href="/">
						<img className={styles.img} src={logo} alt="logo" />
					</a>

					<motion.div
						variants={AnimationFooterMain}
						custom={1}
						className={styles.info}
					>
						<div className={styles.header}>
							<p className={styles['header__paragraph']}>
								Nec, enim sed lacus, magna pharetra. <br /> Phasellus tincidunt
								nulla pharetra <br /> gravida est.
							</p>
						</div>
						<div className={styles['center']}>
							<a href="/">
								<img src={twitter} alt="twitter" />
							</a>
							<a href="/">
								<img src={facebook} alt="facebook" />
							</a>
							<a href="/">
								<img src={google} alt="google" />
							</a>
						</div>
					</motion.div>
				</motion.div>

				<motion.div
					variants={AnimationFooterMain}
					custom={1}
					className={styles.right}
				>
					<div className={styles['right__title']}>
						<h1>About Us</h1>
					</div>
					<div className={styles.list}>
						<ul>
							<li className={styles['list__mark']}>
								<a className={styles['list__link']} href="/">
									About NFTs
								</a>
							</li>
							<li className={styles['list__mark']}>
								<a className={styles['list__link']} href="/">
									Live Auctions
								</a>
							</li>
							<li className={styles['list__mark']}>
								<a className={styles['list__link']} href="/">
									NFT Blog
								</a>
							</li>
							<li className={styles['list__mark']}>
								<a className={styles['list__link']} href="/">
									Activity
								</a>
							</li>
						</ul>
					</div>
				</motion.div>

				<motion.div
					variants={AnimationFooterMain}
					custom={1}
					className={styles.right}
				>
					<div className={styles['right__title']}>
						<h1>Support</h1>
					</div>
					<div className={styles.list}>
						<ul>
							<li className={styles['list__mark']}>
								<a className={styles['list__link']} href="/">
									Help & Support
								</a>
							</li>
							<li className={styles['list__mark']}>
								<a className={styles['list__link']} href="/">
									Item Details
								</a>
							</li>
							<li className={styles['list__mark']}>
								<a className={styles['list__link']} href="/">
									Author Profile
								</a>
							</li>
							<li className={styles['list__mark']}>
								<a className={styles['list__link']} href="/">
									Collection
								</a>
							</li>
						</ul>
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default FooterMain;
