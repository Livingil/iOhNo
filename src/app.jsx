import styles from './app.module.css';
// import { useEffect, useState } from 'react';
// cd vite-project

export const App = () => {
	return (
		<div className={styles.app}>
			<h2>Список дел</h2>
			<i className="fa fa-code" aria-hidden="true"></i>

			<div className={styles.sortAndListContainer}>
				<div className={styles.listContainer}></div>
			</div>
		</div>
	);
};
