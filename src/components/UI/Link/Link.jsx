import { motion } from 'framer-motion';
import React from 'react';
import styles from './Link.module.scss';
export const Link = React.forwardRef(({ children }, ref) => {
	return (
		<div className={styles.link}>
			<a ref={ref} href="/">
				{children}
			</a>
			;
		</div>
	);
});

export const MLink = motion(Link);
