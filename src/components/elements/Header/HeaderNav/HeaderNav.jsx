import React from 'react';
import { MButtons } from '../../../UI/Buttons/Buttons';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './HeaderNav.module.scss';
import nftLogo from '../../../../assets/logo/logo.svg';
const HeaderNav = () => {
	const [visible, setVisible] = React.useState(false);
	const handleClick = () => {
		setVisible(!visible);
	};
	const headerAnimation = {
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
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			className={styles.header}
		>
			<motion.a custom={1} variants={headerAnimation} href="/">
				<img src={nftLogo} alt="Logotype" />
			</motion.a>
			<nav>
				<motion.ul
					custom={1}
					variants={headerAnimation}
					className={`${styles['nav-menu']} ${
						visible ? styles['nav-menu--active'] : 'nav-menu'
					}`}
				>
					<li className={styles['nav-menu__item']}>
						<a href="/" className={styles['nav-menu__link']}>
							Explore
						</a>
					</li>
					<li className={styles['nav-menu__item']}>
						<a href="/" className={styles['nav-menu__link']}>
							Creators
						</a>
					</li>
					<li className={styles['nav-menu__item']}>
						<a href="/" className={styles['nav-menu__link']}>
							Community
						</a>
					</li>
				</motion.ul>
			</nav>
			<div className={styles.btn}>
				<MButtons custom={1} variants={headerAnimation}>
					<span>Connect Wallet</span>
				</MButtons>
			</div>
			<motion.div
				variants={headerAnimation}
				custom={1}
				className={styles.hamburger}
				onClick={handleClick}
			>
				{visible ? (
					<FaTimes size={40} style={{ color: '#FFCE4E' }} />
				) : (
					<FaBars size={40} style={{ color: '#FFCE4E' }} />
				)}
			</motion.div>
		</motion.section>
	);
};

export default HeaderNav;
