import React from 'react';
import { motion } from 'framer-motion';
import styles from './Title.module.scss';
export const Title = React.forwardRef(({ children }, ref) => {
	return (
		<div ref={ref} className={styles.container}>
			<h1 className={styles['container__title']}>{children}</h1>
		</div>
	);
});

export const MTitle = motion(Title);
