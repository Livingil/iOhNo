import { H2 } from '../markup-components';
import styles from './Private-content.module.css';

export const PrivateContent = ({ children, error }) =>
	error ? (
		<div className={styles.Content}>
			<H2> Error: </H2>
			<div>{error}</div>
		</div>
	) : (
		<div>{children}</div>
	);
