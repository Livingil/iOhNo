import styles from './Button.module.css';

export const Button = ({ children, ...prop }) => (
	<button className={styles.Button} {...prop}>
		{children}
	</button>
);
