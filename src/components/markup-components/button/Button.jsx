import styles from './Button.module.css';

export const Button = ({ children, ...prop }) => {
	return (
		<button className={styles.Button} {...prop}>
			{children}
		</button>
	);
};
