import { H2 } from '../markup-components';
import styles from './Content.module.css';

export const Content = ({ children, error }) =>
	error ? (
		<div className={styles.Content}>
			<H2> Error: </H2>
			<div>{error}</div>
		</div>
	) : (
		<div>{children}</div>
	);
