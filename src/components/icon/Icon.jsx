import styles from './Icon.module.css';

export const Icon = ({ id }) => (
	<div className={styles.Icon}>
		<i className={`fa ${id}`} aria-hidden="true"></i>
	</div>
);
