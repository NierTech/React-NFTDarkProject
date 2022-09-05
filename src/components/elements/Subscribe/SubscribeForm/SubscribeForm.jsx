import React from 'react';
import { motion } from 'framer-motion';
import styles from './SubscribeForm.module.scss';
const SubscribeForm = () => {
	const AnimationSubscribeForm = {
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
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
		>
			<motion.div
				variants={AnimationSubscribeForm}
				custom={2}
				className={styles.form}
			>
				<input
					className={styles['form__email']}
					type="email"
					placeholder="info@gmail.com"
				/>
				<button className={styles.btn} type="button">
					<span className={styles['btn__span']}>Subscribe</span>
				</button>
			</motion.div>
		</motion.section>
	);
};

export default SubscribeForm;
