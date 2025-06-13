import styles from './Icon.module.css';

export const Icon = ({ id, ...prop }) => (
	<div className={styles.Icon} {...prop}>
		<i className={`fa ${id}`} aria-hidden="true"></i>
	</div>
);
