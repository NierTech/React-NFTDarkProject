import React from 'react';
import styles from './Buttons.module.scss';
import { motion } from 'framer-motion';
export const Buttons = React.forwardRef(({ children }, ref) => {
	return (
		<button ref={ref} className={styles['btn_wallet']}>
			{children}
		</button>
	);
});

export const MButtons = motion(Buttons);
