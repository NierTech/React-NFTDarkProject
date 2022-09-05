import React from 'react';
import { motion } from 'framer-motion';
import styles from './HeaderCounter.module.scss';
export const HeaderCounter = React.forwardRef(({}, ref) => {
	return (
		<section>
			<div ref={ref} className={styles.counter}>
				<ul className={styles['counter__list']}>
					<li className={styles['counter__mark']}>
						<span className={styles['counter__title']}>32k+</span>Artworks
					</li>
					<li className={styles['counter__mark']}>
						<span className={styles['counter__title']}>20k+</span>Auctions
					</li>
					<li className={styles['counter__mark']}>
						<span className={styles['counter__title']}>12k+</span>Creators
					</li>
				</ul>
			</div>
		</section>
	);
});
export const MHeaderCounter = motion(HeaderCounter);
